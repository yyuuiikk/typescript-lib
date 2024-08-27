function longestCommonPrefix(strs: string[]): string {
    const baseStrAry = strs[0].split("");
    const searchAry = strs.slice(1);
    let result = "";
    for (let i = 0; i < baseStrAry.length; i++) {
        for (let j = 0; j < searchAry.length; j++) {
            let checkStrAry = searchAry[j].split("");
            if (baseStrAry[i] !== checkStrAry[i]) {
                return result;
            }
        }
        result += baseStrAry[i];
    }   
    return result;
};


const strs = ["flower","flow","flight"];
// longestCommonPrefix(strs);
console.log(longestCommonPrefix(strs));