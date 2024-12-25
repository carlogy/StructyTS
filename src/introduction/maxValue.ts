export function maxValue(nums: number[]): number {
  let maxVal = -Infinity;

  for (const num of nums) {
    if (num > maxVal) {
      maxVal = num
    }
  }
  return maxVal;
}