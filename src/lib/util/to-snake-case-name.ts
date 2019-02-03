import toSanitizedName from './to-sanitized-name'

export default function toSnakeCaseName(appName: string): string {
  return toSanitizedName(appName)
    .toLowerCase()
    .replace(/ /g, '-')
}
