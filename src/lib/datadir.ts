import os from 'os'
import path from 'path'

import { Platform, KNOWNFOLDERID } from './constants'
import getWindowsKnownFolderPath from './util/get-windows-known-folder-path'
import toSnakeCaseName from './util/to-snake-case-name'
import toSanitizedName from './util/to-sanitized-name'

/**
 * @returns The path for user-specific data files. Examples include saved game
 *          files, mail client databases, or chat client log storage.
 *
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_DATA_HOME` or `$HOME/.local/share`
 * - **macOS:** `$HOME/Library/Application Support`
 * - **Windows:** `{FOLDERID_RoamingAppData}` (usually `%APPDATA%`, resolving to
 *   `%USERPROFILE%\AppData\Roaming`)
 * - **Other platforms:** `null`
 */
export default function datadir(): string | null
/**
 * @param appName The canonical name of the app, such as `Foo Bar App`.
 * @returns The path for user-specific data files for the given app.
 *
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_DATA_HOME/foo-bar-app` or `$HOME/.local/share/foo-bar-app`
 * - **macOS:** `$HOME/Library/Application Support/Foo Bar App`
 * - **Windows:** `{FOLDERID_RoamingAppData}\Foo Bar App\Data` (usually
 *   `%APPDATA%\Foo Bar App\Data`, resolving to
 *   `%USERPROFILE%\AppData\Roaming\Foo Bar App\Data`)
 * - **Other platforms:** `null`
 */
export default function datadir(appName: string): string | null
export default function datadir(appName?: string): string | null {
  if (
    os.platform() === Platform.Cygwin ||
    os.platform() === Platform.FreeBSD ||
    os.platform() === Platform.Linux ||
    os.platform() === Platform.OpenBSD
  ) {
    return path.join(
      process.env.XDG_DATA_HOME || path.join(os.homedir(), '.local', 'share'),
      ...(appName ? [toSnakeCaseName(appName)] : [])
    )
  }

  if (os.platform() === Platform.macOS) {
    return path.join(
      os.homedir(),
      'Library',
      'Application Support',
      ...(appName ? [toSanitizedName(appName)] : [])
    )
  }

  if (os.platform() === Platform.Windows) {
    return path.join(
      getWindowsKnownFolderPath(KNOWNFOLDERID.FOLDERID_RoamingAppData),
      ...(appName ? ['Data', toSanitizedName(appName)] : [])
    )
  }

  return null
}
