export const factorial = (n : number) : number => {
    const num = n;

    if (n === 0 || n === 1) {
        return 1;
    }

    return num * factorial(n - 1);
};