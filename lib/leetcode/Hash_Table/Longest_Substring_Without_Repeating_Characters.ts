function lengthOfLongestSubstring(s: string): number {
    let tmp: Map<string, number> = new Map();
    let result: Array<string> = [];
    for (let i = 0; i < s.length; i++) {
        if (tmp.has(s[i])) {
            if (result.length < tmp.size) {
                result = Array.from(tmp.keys());
            }
            // ある文字列が連続していない場合は、ある文字とそれ以前の文字を削除する
            if ((tmp.get(s[i]) ?? 0) + 1 !== i) {
                for (const [key, value] of tmp) {
                    if (value < i) tmp.delete(key);
                    if (key === s[i]) break;
                    // console.log(tmp);
                }
                tmp.delete(s[i]);
            } else {
                tmp.clear();
            }
        }
        tmp.set(s[i], i);
    }
    // console.log(tmp);
    // console.log(result);
    
    let resultNum = result.length < tmp.size ? tmp.size : result.length;
    return resultNum;
};

// let s = "abcabcbb";
// let s = "pwwkew";
// let s = " ";
let s = "ckilbkd"; // 5
// let s = "dvdf";
console.log(lengthOfLongestSubstring(s));