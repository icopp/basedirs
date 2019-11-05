/**
 * Translate a Windows-style GUID into an array of bytes. This includes having
 * to reverse the first two chunks of the string-input GUID.
 */
export default function parseWindowsGuid(guid: string): number[] {
  return guid
    .split('-')
    .map(value => [...Buffer.from(value, 'hex')])
    .map((value, i) => (i < 3 ? value.reverse() : value))
    .reduce((accumulator, value) => [...accumulator, ...value], [])
}
