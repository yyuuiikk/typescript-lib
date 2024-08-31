function minSubArrayLen(target: number, nums: number[]): number {
    // range は取得する範囲
    for (let range = 1; range < nums.length + 1; range++) {
        for (let i = 0; i < nums.length - range + 1; i++) {
            let tmp = nums.slice(i, i + range);
            let tmpSum = tmp.reduce((acc, current) => acc + current, 0);
            if (tmpSum >= target) return range;
        }
    }
    return 0;

    // 別回答。配列のendからも計算を行う
    /*
    let minLength = Infinity; 
    let windowStart = 0, windowSum = 0;       

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]; 

        while (windowSum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
    */
};

// let target = 7;
// let nums = [2,3,1,2,4,3];
// let target = 20;
// let nums = [2,16,14,15];
// let target = 213;
// let nums = [12,28,83,4,25,26,25,2,25,25,25,12];
let target = 4;
let nums = [1,4,4];
let res = minSubArrayLen(target, nums);
console.log(res);