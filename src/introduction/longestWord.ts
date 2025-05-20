export const longestWord = (sentence: string) => {
    let current = "";
    const arr = sentence.split(' ');

    for (const word of arr) {
        if (word.length >= current.length ) {
            current = word;
        }
    }
    return current
};