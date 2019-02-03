import os from 'os'
import { Platform, KNOWNFOLDERID } from '../constants'
import parseWindowsGuid from './parse-windows-guid'

// These have to use `require` rather than `import` because `ref` and `ffi` are
// totally broken in Jest on non-Windows platforms, such that ever referencing
// them more than one in any way makes all tests fail with `RangeError`s. To
// work around that we use a dummy instead if it's not Windows.

const ffi = os.platform() === Platform.Windows ? require('ffi') : {}
const ref = os.platform() === Platform.Windows ? require('ref') : {}

const shell32: {
  /**
   * @param rfid A reference to the KNOWNFOLDERID that identifies the folder.
   * @param dwFlags Flags that specify special retrieval options. This value can
   *                be 0; otherwise, one or more of the KNOWN_FOLDER_FLAG values.
   * @param hToken An access token that represents a particular user. If this
   *               parameter is NULL, which is the most common usage, the
   *               function requests the known folder for the current user.
   */
  SHGetKnownFolderPath(
    rfid: Buffer,
    dwFlags: number,
    hToken: Buffer,
    ppszPath: Buffer
  ): number
} =
  os.platform() === Platform.Windows
    ? new ffi.Library('Shell32', {
        SHGetKnownFolderPath: [
          ref.types.int,
          [
            ref.refType(ref.types.void),
            ref.types.int,
            ref.refType(ref.types.void),
            ref.refType(ref.refType(ref.types.char)),
          ],
        ],
      })
    : {
        SHGetKnownFolderPath() {
          throw new Error('SHGetKnownFolderPath is only usable on Windows')
        },
      }

/**
 * @returns the directory path corresponding to the given `KNOWNFOLDERID`
 * @throws {Error} if this isn't a Windows system or it's too old to have
 *                 `Shell32.SHGetKnownFolderPath`
 */
export default function getWindowsKnownFolderPath(guid: KNOWNFOLDERID): string {
  if (os.platform() !== Platform.Windows) {
    throw new Error('getWindowsKnownFolderPath only usable on Windows')
  }

  let guidPtr = ref.alloc(ref.types.void, parseWindowsGuid(guid))
  let pathPtr = ref.alloc(ref.refType(ref.refType(ref.types.void)))

  let status = shell32.SHGetKnownFolderPath(guidPtr, 0, ref.NULL, pathPtr)
  if (status !== 0) {
    throw new Error(`Error occurred getting path: ${status}`)
  }

  let pathStr = ref.readPointer(pathPtr, 0, 200)
  return pathStr
    .toString('ucs2')
    .substring(0, (pathStr.indexOf('\0\0') + 1) / 2)
}
