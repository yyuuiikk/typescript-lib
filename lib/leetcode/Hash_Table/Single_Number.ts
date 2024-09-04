function singleNumber(nums: number[]): number {
    let set = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i]);
        } else {
            set.add(nums[i]);
        }
    }
    let setKey = set.keys();
    return setKey.next().value;
};

let nums1 = [2,2,1];
console.log(singleNumber(nums1));