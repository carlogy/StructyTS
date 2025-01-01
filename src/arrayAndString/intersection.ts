export function intersection(nums1 : number[], nums2 : number[]) : number[] {

    const numberSet = new Set<number>();

    const resultArr : number[] = [];

    for (const num of nums2) {
        numberSet.add(num);
    }

    for (const num of nums1) {
        if (num in numberSet) {
           resultArr.push(num);
        }
    }

    return resultArr;

};
