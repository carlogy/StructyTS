export const fizzBuzz = (n: number) => {
       const result = [];

       for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("fizzbuzz");
            continue;
        } else if (i % 3 === 0) {
            result.push("fizz");
            continue;
        } else if (i % 5 === 0) {
            result.push("buzz");
            continue;
        }

        result.push(i);
       }
       return result;
};