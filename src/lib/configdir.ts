import os from 'os'
import path from 'path'

import { Platform, KNOWNFOLDERID } from './constants'
import getWindowsKnownFolderPath from './util/get-windows-known-folder-path'
import toSanitizedName from './util/to-sanitized-name'
import toSnakeCaseName from './util/to-snake-case-name'

/**
 * @returns The path for user-specific configuration files. Examples include
 *          application preferences or settings for CLI apps.
 *
 * - **macOS:** `$HOME/Library/Preferences`
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_CONFIG_HOME` or `$HOME/.config`
 * - **Windows:** `{FOLDERID_RoamingAppData}` (usually `%APPDATA%`, resolving to
 *   `%USERPROFILE%\AppData\Roaming`)
 * - **Other platforms:** `null`
 */
export default function configdir(): string | null
/**
 * @param appName The canonical name of the app, such as `Foo Bar App`.
 * @returns The path for user-specific configuration files for the given app.
 *
 * - **macOS:** `$HOME/Library/Preferences/Foo Bar App`
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_CONFIG_HOME/foo-bar-app` or
 *   `$HOME/.config/foo-bar-app`
 * - **Windows:** `{FOLDERID_RoamingAppData}\Foo Bar App\Config` (usually
 *   `%APPDATA%\Foo Bar App\Config`, resolving to
 *   `%USERPROFILE%\AppData\Roaming\Foo Bar App\Config`)
 * - **Other platforms:** `null`
 */
export default function configdir(appName: string): string | null
export default function configdir(appName?: string): string | null {
  if (
    os.platform() === Platform.Cygwin ||
    os.platform() === Platform.FreeBSD ||
    os.platform() === Platform.Linux ||
    os.platform() === Platform.OpenBSD
  ) {
    return path.join(
      process.env.XDG_CONFIG_HOME || path.join(os.homedir(), '.config'),
      ...(appName ? [toSnakeCaseName(appName)] : [])
    )
  }

  if (os.platform() === Platform.macOS) {
    return path.join(
      os.homedir(),
      'Library',
      'Preferences',
      ...(appName ? [toSanitizedName(appName)] : [])
    )
  }

  if (os.platform() === Platform.Windows) {
    return path.join(
      getWindowsKnownFolderPath(KNOWNFOLDERID.FOLDERID_RoamingAppData),
      ...(appName ? ['Config', toSanitizedName(appName)] : [])
    )
  }

  return null
}
