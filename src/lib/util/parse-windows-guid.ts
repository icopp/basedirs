/**
 * Translate a Windows-style GUID into an array of bytes. This includes having
 * to reverse the first two chunks of the string-input GUID.
 */
export default function parseWindowsGuid(guid: string): number[] {
  return guid
    .split('-')
    .map(val => [...Buffer.from(val, 'hex')])
    .map((val, i) => (i < 3 ? val.reverse() : val))
    .reduce((prev, val) => [...prev, ...val], [])
}
