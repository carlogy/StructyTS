export const intersection = (a: number[], b: number[]) => {
    const result:number[] = [];
    const setA = new Set(a);
    for (const elem of b) {
        if (setA.has(elem)) {
            result.push(elem);
        }
    }

    return result;
};
console.log(intersection([2,4,6], [4,2]), "=> [2,4]");