export function compress(s : string) : string {

    const compressedArr: string[] = [];
    let i = 0;

    for (let j = 0; j < s.length; j++){

        if(s[j+1] !== s[i]) {
            const diff = (j+1) - i;
            compressedArr.push(`${diff > 1 ? diff : ''}${s[i]}`);
            i = j+1;
        }
    }
    return compressedArr.join('');
};