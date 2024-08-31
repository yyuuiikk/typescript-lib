function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            count = 0;
        }
        if (count > max) max = count;
    }
    return max;
};

const nums1 = [1,1,0,1,1,1];
const res1 = findMaxConsecutiveOnes(nums1);
console.log(res1);