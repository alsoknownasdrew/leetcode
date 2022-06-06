export const twoSum = (nums: number[], target: number): number[] => {
  for(let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  throw new Error("Invalid input: provided array has no elements that sums up to target")
};