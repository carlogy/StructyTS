export const anagrams = (s1: string, s2: string) => {

    interface Count {
        [key: string]: number
    }
    const count: Count = {};

    for (const char of s1) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char]++;
    }

    for (const char of s2) {
        if (!(char in count)) {
            return false;
        }
        count[char]--;
    }

    for (const n of Object.values(count)) {
        if (n !== 0) {
            return false;
        }
    }
    return true;
};