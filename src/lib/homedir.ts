import os from 'os'

/**
 * @return the user's home directory
 *
 * - Windows: `%USERPROFILE%`
 * - other platforms: `$HOME`
 */
export default function homedir(): string | null {
  return os.homedir()
}
