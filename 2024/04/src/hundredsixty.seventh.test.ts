function deckRevealedIncreasing(deck: number[]): number[] {
  deck.sort((o1, o2) => o1 - o2);

  const res: number[] = new Array(deck.length).fill(0);
  const indices: number[] = Array.from(
    { length: deck.length },
    (_val, idx) => idx
  );

  for (const card of deck) {
    // Reveal the top and remove from the deck
    const idx = indices.shift()!;
    res[idx] = card;

    // Reveal the next top, and put it into the bottom
    if (indices.length) {
      indices.push(indices.shift()!);
    }
  }

  return res;
}
