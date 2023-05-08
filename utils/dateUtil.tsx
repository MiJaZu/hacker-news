import moment from "moment";

export function formatDate(dateInput: string): string {
  const date = moment(dateInput);
  const now = moment();

  // If the date is more than a week then the date will be returned
  if (now.diff(date, "days") >= 7) {
    return date.format("MMMM D, YYYY");
  }

  //If the date is from yestarday then will display "Yestarday"
  if (now.diff(date, "days") === 1) {
    return "Yestarday";
  }

  //If the date is lower than 24 hours then the remaining hours will be displayed
  if (now.diff(date, "hours") < 24) {
    const hoursDiff = now.diff(date, "hours");
    return `${hoursDiff} hour${hoursDiff === 1 ? "" : "s"}`;
  }
  return date.format("MMMM D, YYYY");
}
