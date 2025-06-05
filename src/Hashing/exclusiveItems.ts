export const exclusiveItems = (a: number[], b: number[]) => {
  interface Count  {
    [key: number]: boolean
  }

  const countA: Count = {};
  const countB: Count = {};

  for (const item of a) {
    if (!(item in countA)) {
        countA[item] = true;
    }
  }

  for (const item of b) {
    if (!(item in countB)) {
        countB[item] = true;
    }
  }

  const results: number[] = [];

  for (const n of a) {
    if (!(n in countB)) {
        results.push(n);
    }
  }

  for (const n of b) {
    if (!(n in countA)) {
        results.push(n);
    }
  }
  return results;
}
