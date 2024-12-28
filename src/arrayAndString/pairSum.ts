export function pairSum(nums : number[], target : number): number[]{

    interface SumHash {
        [key: number]:number
    };

    const previous : SumHash = {}

    let solutionPair: [number, number] = [0,0];

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (!(complement in previous)) {
            previous[nums[i]] = i;
            continue;
        }

        solutionPair = [previous[complement], i];

    }

    return solutionPair;
}


