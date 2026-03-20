export function yearsFrom(dateStr) {
  return `${Math.floor((Date.now() - new Date(dateStr)) / (365.25 * 24 * 60 * 60 * 1000))}+`;
}
