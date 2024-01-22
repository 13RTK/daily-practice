function reconstructQueue(people: number[][]): number[][] {
  // Height first, number of people is secondary
  people.sort((o1, o2) => (o1[0] === o2[0] ? o1[1] - o2[1] : o2[0] - o1[0]));

  const resArr: number[][] = [];
  for (const curPerson of people) {
    resArr.splice(curPerson[1], 0, curPerson);
  }

  return resArr;
}
