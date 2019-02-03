import os from 'os'
import path from 'path'

import { Platform, KNOWNFOLDERID } from './constants'
import getWindowsKnownFolderPath from './util/get-windows-known-folder-path'

/**
 * @returns The path for user-specific executable files.
 *
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_BIN_HOME`, or `$XDG_DATA_HOME/../bin`, or
 *   `$HOME/.local/bin`
 * - **macOS:** `$HOME/Applications`
 * - **Other platforms:** `null`
 */
export default function executabledir(): string | null {
  if (
    os.platform() === Platform.Cygwin ||
    os.platform() === Platform.FreeBSD ||
    os.platform() === Platform.Linux ||
    os.platform() === Platform.OpenBSD
  ) {
    return (
      process.env.XDG_BIN_HOME ||
      (process.env.XDG_DATA_HOME &&
        path.join(process.env.XDG_DATA_HOME, '..', 'bin')) ||
      path.join(os.homedir(), '.local', 'bin')
    )
  }

  if (os.platform() === Platform.macOS) {
    return path.join(os.homedir(), 'Applications')
  }

  if (os.platform() === Platform.Windows) {
    return getWindowsKnownFolderPath(KNOWNFOLDERID.FOLDERID_UserProgramFiles)
  }

  return null
}
