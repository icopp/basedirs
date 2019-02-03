import os from 'os'
import path from 'path'

import { Platform, KNOWNFOLDERID } from './constants'
import getWindowsKnownFolderPath from './util/get-windows-known-folder-path'

/**
 * @returns The paths for non-user-specific configuration files.
 *
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_CONFIG_DIRS` (transformed to
 *   array), or array with `/etc/xdg`
 * - **macOS:** array with `/Library/Preferences`
 * - **Other platforms:** `null`
 */
export default function configdirs(): string[] | null {
  if (
    os.platform() === Platform.Cygwin ||
    os.platform() === Platform.FreeBSD ||
    os.platform() === Platform.Linux ||
    os.platform() === Platform.OpenBSD
  ) {
    return process.env.XDG_CONFIG_DIRS
      ? process.env.XDG_CONFIG_DIRS.split(':')
      : [path.join('etc', 'xdg')]
  }

  if (os.platform() === Platform.macOS) {
    return [path.join('Library', 'Preferences')]
  }

  if (os.platform() === Platform.Windows) {
    return [getWindowsKnownFolderPath(KNOWNFOLDERID.FOLDERID_ProgramData)]
  }

  return null
}
