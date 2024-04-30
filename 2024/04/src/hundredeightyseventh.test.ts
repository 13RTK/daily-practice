function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  return hours.reduce((acc, val) => {
    const count: number = val >= target ? 1 : 0;

    return acc + count;
  }, 0);
}
