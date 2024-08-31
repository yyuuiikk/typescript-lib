function removeElement(nums: number[], val: number): number {
    let k: number = 0;
    const length = nums.length;
    for(let i = 0; i < length; i++) {
        if (nums[i-k] === val) {
            [nums[i-k], nums[length - 1 - k]] = [nums[length - 1 - k], nums[i-k]];
            k++;
        }
    }
    nums.splice(length - k, k);
    return length - k;
};

const nums2 = [0,1,2,2,3,0,4,2];
const val = 2;

let res = removeElement(nums2, val);
console.log('------------');
console.log(nums2);
console.log(res);