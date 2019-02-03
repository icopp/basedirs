import os from 'os'

import { Platform } from './constants'

/**
 * @returns The path for user-specific runtime files and file objects. This
 *          includes sockets and named pipes, but not other temporary files.
 *
 * - **Cygwin, FreeBSD, Linux, OpenBSD:** `$XDG_RUNTIME_DIR`
 * - **Other platforms:** `null`
 */
export default function runtimedir(): string | null {
  if (
    os.platform() === Platform.Cygwin ||
    os.platform() === Platform.FreeBSD ||
    os.platform() === Platform.Linux ||
    os.platform() === Platform.OpenBSD
  ) {
    return process.env.XDG_RUNTIME_DIR || null
  }

  return null
}
