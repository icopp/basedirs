export default function toSanitizedName(appName: string): string {
  return appName.replace(/[^\w ]/g, '-')
}
