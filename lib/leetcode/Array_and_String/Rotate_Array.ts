/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length;// 配列の長さを超える場合は余りの数だけ回転する
    if (nums.length === 1 || k === 0) return;

    let tmp = nums.slice(-k);
    nums.reverse();
    nums.splice(0, k, ...tmp);
    nums.splice(k, nums.length - k, ...nums.slice(k).reverse());
};

// let nums1 = [1,2,3,4,5,6,7];
// let k = 3;
let nums1 = [1,2];
let k = 3;
rotate(nums1, k);
console.log(nums1);