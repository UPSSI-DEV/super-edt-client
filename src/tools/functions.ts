import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/fr";

dayjs.extend(customParseFormat);
dayjs.locale("fr");

function formatDate(date_string: string) {
  return dayjs(date_string, "DD/MM/YYYY").format("dddd DD MMMM");
}

function formatTime(date: Date) {
  return dayjs(date).format("HH:mm");
}

export { formatDate, formatTime };
