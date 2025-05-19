export const maxValue = (nums: number[]) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};
