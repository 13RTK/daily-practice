function candy(ratings: number[]): number {
  const candies: number[] = Array.from(
    { length: ratings.length },
    (candy) => 1
  );

  ratings.forEach((rating, idx, ratings) => {
    if (idx > 0 && rating > ratings[idx - 1]) {
      candies[idx] = candies[idx - 1] + 1;
    }
  });

  for (let idx = ratings.length - 1; idx >= 1; idx--) {
    if (ratings[idx - 1] > ratings[idx]) {
      candies[idx - 1] = Math.max(candies[idx - 1], candies[idx] + 1);
    }
  }

  return candies.reduce((acc, val) => acc + val);
}
