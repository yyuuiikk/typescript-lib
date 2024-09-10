function firstUniqChar(s: string): number {
    let resultMap: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        if (resultMap.has(s[i])) {
            resultMap.set(s[i], (resultMap.get(s[i]) as number) + 1);
        } else {
            resultMap.set(s[i], 1);
        }
    }

    let resultAry = Array.from(resultMap);
    for (let i = 0; i < resultAry.length; i++) {
        if (resultAry[i][1] === 1) {
            return s.indexOf(resultAry[i][0]);
        }
    }

    return -1;
};

let s = "loveleetcode";
console.log(firstUniqChar(s));