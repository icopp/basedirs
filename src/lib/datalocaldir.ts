import os from 'os'
import path from 'path'

import { KNOWNFOLDERID, Platform } from './constants'
import getWindowsKnownFolderPath from './util/get-windows-known-folder-path'
import datadir from './datadir'
import toSanitizedName from './util/to-sanitized-name'

/**
 * @returns The path for user-specific data files that will preferably not be
 *          transferred to other machines with the same user account.
 *
 * - **Windows:** `{FOLDERID_LocalAppData}` (usually `%LOCALAPPDATA%`, resolving
 *   to `%USERPROFILE%\AppData\Local`)
 * - **Other platforms:** The same as `datadir`.
 */
export default function datalocaldir(): string | null
/**
 * @param appName The canonical name of the app, such as `Foo Bar App`.
 * @returns The path for user-specific data files for the given app that will
 *          preferably not be transferred to other machines with the same user
 *          account.
 *
 * - **Windows:** `{FOLDERID_LocalAppData}\Foo Bar App\Data` (usually
 *   `%LOCALAPPDATA%\Foo Bar App\Data`, resolving to
 *   `%USERPROFILE%\AppData\Local\Foo Bar App\Data`)
 * - **Other platforms:** The same as `datadir`.
 */
export default function datalocaldir(appName: string): string | null
export default function datalocaldir(appName?: string): string | null {
  if (os.platform() === Platform.Windows) {
    return path.join(
      getWindowsKnownFolderPath(KNOWNFOLDERID.FOLDERID_LocalAppData),
      ...(appName ? ['Data', toSanitizedName(appName)] : [])
    )
  }

  return appName ? datadir(appName) : datadir()
}
