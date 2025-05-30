export const mostFrequentChar = (s: string) => {
    interface Count {
        [key: string]: number
    }

    const count: Count = {};

    for (const char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char]++;
    }

    type Result = [char: string, num: number];

    let result: Result = ['', 0];

    for (const entry of Object.entries(count)) {
        if (entry[1] > result[1]) {
            result = entry;
        }
    }

    return result[0];
};