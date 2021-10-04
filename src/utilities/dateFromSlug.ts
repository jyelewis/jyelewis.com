const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function dateFromSlug(slug: string) {
  const [year, month, day] = slug.split("-");
  const intMonth = parseInt(month, 10);

  return `${day} ${months[intMonth - 1]}, ${year}`;
}
