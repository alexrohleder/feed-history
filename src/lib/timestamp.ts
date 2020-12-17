export function toDateTime(timestamp: number) {
  const date = new Date(timestamp);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear().toString().substr(-2);
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
