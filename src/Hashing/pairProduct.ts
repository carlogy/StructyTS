export const pairProduct = (nums: number[], targetProduct: number) => {

    interface Count  {
       [key: number]: number
    }

    const count : Count = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = targetProduct / nums[i];

        if (!(complement in count)){
            count[nums[i]] = i;
            continue;
        }

        return [count[complement], i];
    }
}
