/**
 * @external
 */

import os from 'os'
import ffi from 'ffi'
import ref from 'ref'
import { Platform, KNOWNFOLDERID } from '../constants'
import parseWindowsGuid from './parse-windows-guid'

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
