export function getIslamicDate(date: Date = new Date()): string {
  const islamicDate = new Intl.DateTimeFormat("en-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)

  return islamicDate
}

export function formatIslamicMonth(date: Date): string {
  const islamicMonth = new Intl.DateTimeFormat("en-u-ca-islamic", {
    month: "long",
    year: "numeric",
  }).format(date)

  return islamicMonth
}

