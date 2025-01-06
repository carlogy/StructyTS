export const sumOfLengths = (strArr : string[]) : number => {

    if (strArr.length === 0) {
        return 0;
    }
    const str = strArr[0].length;

    return str + sumOfLengths(strArr.slice(1));
};

const actual = sumOfLengths(["", " ", "  ", "   ", "    ", "     "]);
const expected = 15;
console.log("Actual:\t", actual);
console.log("Expected:\t", expected, "\nMatch:\t", actual === expected);