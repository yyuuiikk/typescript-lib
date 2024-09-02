/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            i = i - 1;
            count++;
        }
    }
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            nums.push(0);
        }
    }
};

 let nums = [0,1,0,3,12];
 moveZeroes(nums);
//  let nums = [0,0,1];
//  moveZeroes(nums);
 console.log(nums);