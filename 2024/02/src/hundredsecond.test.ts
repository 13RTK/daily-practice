function numTrees(n: number): number {
  const treeNumCount: number[] = Array.from({ length: n + 1 }, () => 0);
  treeNumCount[0] = 1;

  for (let nodeNum = 1; nodeNum <= n; nodeNum++) {
    for (let leftNodeNum = 1; leftNodeNum <= nodeNum; leftNodeNum++) {
      // Right * left(exclude the root)
      treeNumCount[nodeNum] +=
        treeNumCount[nodeNum - leftNodeNum] * treeNumCount[leftNodeNum - 1];
    }
  }

  return treeNumCount[n];
}
