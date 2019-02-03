import os from 'os'
import path from 'path'

import { Platform, KNOWNFOLDERID } from './constants'
import getWindowsKnownFolderPath from './util/get-windows-known-folder-path'
import toSanitizedName from './util/to-sanitized-name'
import toSnakeCaseName from './util/to-snake-case-name'

/**
 * @returns The path for user-specific non-essential (cached) data. An
 *          application should be able to launch without error if cached data is
 *          suddenly deleted (but may be slower until data is re-cached).
 *          Examples include servers with cached response data or applications
 *          using ephemeral data retrieved from the internet.
 *
 * - **macOS:** `$HOME/Library/Caches`
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_CACHE_HOME` or `$HOME/.cache`
 * - **Windows:** `{FOLDERID_LocalAppData}` (usually `%LOCALAPPDATA%`, resolving
 *   to `%USERPROFILE%\AppData\Local`)
 * - **Other platforms:** `null`
 */
export default function cachedir(): string | null
/**
 * @param appName The canonical name of the app, such as `Foo Bar App`.
 * @returns The path for user-specific non-essential (cached) data for the given
 *          app. An application should be able to launch without error if cached
 *          data is suddenly deleted (but may be slower until data is
 *          re-cached).
 *
 * - **macOS:** `$HOME/Library/Caches/Foo Bar App`
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_CACHE_HOME/foo-bar-app` or `$HOME/.cache/foo-bar-app`
 * - **Windows:** `{FOLDERID_LocalAppData}\Foo Bar App\Cache` (usually
 *   `%LOCALAPPDATA%\Foo Bar App\Cache`, resolving to
 *   `%USERPROFILE%\AppData\Local\Foo Bar App\Cache`)
 * - **Other platforms:** `null`
 */
export default function cachedir(appName: string): string | null
export default function cachedir(appName?: string): string | null {
  if (
    os.platform() === Platform.Cygwin ||
    os.platform() === Platform.FreeBSD ||
    os.platform() === Platform.Linux ||
    os.platform() === Platform.OpenBSD
  ) {
    return path.join(
      process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache'),
      ...(appName ? [toSnakeCaseName(appName)] : [])
    )
  }

  if (os.platform() === Platform.macOS) {
    return path.join(
      os.homedir(),
      'Library',
      'Caches',
      ...(appName ? [toSanitizedName(appName)] : [])
    )
  }

  if (os.platform() === Platform.Windows) {
    return path.join(
      getWindowsKnownFolderPath(KNOWNFOLDERID.FOLDERID_LocalAppData),
      ...(appName ? ['Cache', toSanitizedName(appName)] : [])
    )
  }

  return null
}
