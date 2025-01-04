export const sumNumbersRecursive = (numbers : number[]): number =>  {
    const nums = numbers[0];

    if (numbers.length === 0) {
        return 0;
    }

    return nums + sumNumbersRecursive(numbers.slice(1));
};
