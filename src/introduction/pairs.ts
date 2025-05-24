export const pairs = (elements: string[]) => {
    const results = [];

    for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
            results.push([elements[i], elements[j]]);
        }
    }
    return results;
};