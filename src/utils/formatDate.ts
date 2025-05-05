import { format } from "date-fns";

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  return format(date, "ss/MM/yyyy HH:mm");
}
