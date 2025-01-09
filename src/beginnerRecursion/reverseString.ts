export const reverseString = (str : string) : string => {

    if (str.length === 0) {
        return '';
    }

    const char = str[0]

    return reverseString(str.slice(1)) + char;
};



