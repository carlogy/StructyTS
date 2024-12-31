export function uncompress(s : string): string {

    let fullStr : string = "";

    let i = 0;
    for (let j = 0; j < s.length; j++) {

        if (!parseInt(s[j])) {
            const num = parseInt(s.substring(i,j));
            const str = s[j].repeat(num)
            i = j + 1;
            fullStr += str;
        }
    }

    return fullStr;
}
