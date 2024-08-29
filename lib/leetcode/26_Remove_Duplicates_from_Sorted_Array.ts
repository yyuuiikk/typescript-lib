function removeDuplicates(nums: number[]): number {
    let prev: number | null = null;
    for (let i = 0; i < nums.length; i++) {
        if (prev === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
        prev = nums[i];
    }
    return nums.length;
};

const nums = [1,1,2];
console.log(removeDuplicates(nums));
