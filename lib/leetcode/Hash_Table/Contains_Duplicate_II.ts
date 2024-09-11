function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < Math.min(nums.length, i + k + 1); j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false
};

// let nums = [1,2,3,1];
// let k = 3;
// let nums = [1,2,3,1,2,3];
// let k = 2;
// let nums = [99,99];
// let k = 2;
// let nums = [0,1,2,3,2,5];
// let k = 3;
let nums = [1,0,1,1];
let k = 1;
console.log(containsNearbyDuplicate(nums, k));