function dayOfTheWeek(day: number, month: number, year: number): string {
  const curDate: Date = new Date(year, month - 1, day);
  const weekArr: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekArr[curDate.getDay()];
}
