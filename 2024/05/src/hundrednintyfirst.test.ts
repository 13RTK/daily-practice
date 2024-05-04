function numRescueBoats(people: number[], limit: number): number {
  people.sort((o1, o2) => o1 - o2);

  let leftIdx: number = 0;
  let rightIdx: number = people.length - 1;
  let boatCount: number = 0;

  while (leftIdx <= rightIdx) {
    const weightSum = people[leftIdx] + people[rightIdx];

    if (weightSum <= limit) {
      leftIdx++;
    }

    // Carry the weightiest person first
    rightIdx--;
    boatCount++;
  }

  return boatCount;
}
