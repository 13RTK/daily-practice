function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const nodePathMap: Map<number, number[]> = new Map();

  for (const [start, end] of edges) {
    nodePathMap.get(start)?.push(end);
    nodePathMap.get(end)?.push(start);

    if (!nodePathMap.has(start)) {
      nodePathMap.set(start, [end]);
    }

    if (!nodePathMap.has(end)) {
      nodePathMap.set(end, [start]);
    }
  }

  return dfs(source, nodePathMap, destination, new Set<number>());
}

function dfs(
  start: number,
  nodePathMap: Map<number, number[]>,
  destination: number,
  set: Set<number>
): boolean {
  if (start === destination) {
    return true;
  }

  set.add(start);
  for (const end of nodePathMap.get(start) || []) {
    if (!set.has(end)) {
      if (dfs(end, nodePathMap, destination, set)) {
        return true;
      }
    }
  }

  return false;
}
