export function pairProduct(nums : number[], target : number) : number[] {

    interface ProductHash {
        [key: number]: number
    }

    const previousNums: ProductHash = {}

    let solutionPair : [number, number] = [0,0];

    for (let i = 0; i < nums.length; i++) {
        const quotient = target / nums[i];

        if (!(quotient in previousNums)){
            previousNums[nums[i]] = i;
            continue;
        }

        solutionPair = [previousNums[quotient], i];


    }
    return solutionPair;
}

// const testRun = pairProduct([3, 2, 5, 4, 1], 8);
// console.log(testRun);