export function mostFrequentChar(s : string) : string {

    interface Count {
        [key: string]: number
    }

    const count : Count = {};

    for (const char of s) {
        if (!(char in count)){
            count[char]= 0;
        }

        count[char] += 1;
    }

    let maxChar  :[string, number] = ["", -Infinity];

    Object.entries(count).forEach((entry)=>{
        if (entry[1] >  maxChar[1]) {
            maxChar = [entry[0], entry[1]];
        }
    });

    return maxChar[0];
}



