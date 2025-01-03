export function countdown(n : number): void {

    if (n === 0){
        return;
    }
    console.log("Recursive N Value: \t", n);
    countdown(n - 1);
};

countdown(5);