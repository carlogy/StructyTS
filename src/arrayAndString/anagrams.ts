export function anagrams(s1 : string, s2: string) : boolean {

    interface Count {
        [key: string]:number;
    }

    const count: Count = {};

    for (const char of s1) {
        if (!(char in count)) {
            count[char] = 0;
        }

        count[char] ++;
    }


    for (const char of s2) {
        if (char in count) {
            count[char]--;
        }else {
            return false;
        }
    }

    for (const char in count) {
        if (count[char] !== 0) {
            return false
        }
    }

    return true;
}