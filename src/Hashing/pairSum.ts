export const pairSum = (nums: number[], targetSum: number) => {


    interface Count {
        [key: number]: number
    }
    const count: Count = {};

   for (let i = 0; i < nums.length; i++) {
    const complement = targetSum - nums[i];

    if (!(complement in count)) {
        count[nums[i]]= i;
        continue;
    }
    return [count[complement], i];
   }
};

