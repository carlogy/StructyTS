export const sumOfLengths = (strArr : string[]) : number => {

    if (strArr.length === 0) {
        return 0;
    }
    const str = strArr[0].length;

    return str + sumOfLengths(strArr.slice(1));
};