function arrayPairSum(nums: number[]): number {
    let result: number = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        result += Math.min(nums[i], nums[i + 1]);
    }
    return result;
};

const nums = [1,4,3,2];
console.log(arrayPairSum(nums));