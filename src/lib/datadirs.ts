import os from 'os'
import path from 'path'

import { Platform, KNOWNFOLDERID } from './constants'
import getWindowsKnownFolderPath from './util/get-windows-known-folder-path'

/**
 * @returns The paths for non-user-specific data files.
 *
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_DATA_DIRS` (transformed to
 *   array), or array with `/usr/local/share` and `/usr/share`
 * - **macOS:** array with `/Library/Application Support`
 * - **Windows:** array with `{FOLDERID_ProgramData}` (usually
 *   `%ALLUSERSPROFILE%`, resolving to `%ProgramData%`, resolving to
 *   `%SystemDrive%\ProgramData`)
 */
export default function datadirs(): string[] | null {
  if (
    os.platform() === Platform.Cygwin ||
    os.platform() === Platform.FreeBSD ||
    os.platform() === Platform.Linux ||
    os.platform() === Platform.OpenBSD
  ) {
    return process.env.XDG_DATA_DIRS
      ? process.env.XDG_DATA_DIRS.split(':').map(p => path.normalize(p))
      : [path.join('usr', 'local', 'share'), path.join('usr', 'share')]
  }

  if (os.platform() === Platform.macOS) {
    return [path.join('Library', 'Application Support')]
  }

  if (os.platform() === Platform.Windows) {
    return [getWindowsKnownFolderPath(KNOWNFOLDERID.FOLDERID_ProgramData)]
  }

  return null
}
