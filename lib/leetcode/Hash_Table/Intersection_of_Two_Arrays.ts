function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    return [...set1].filter(x => set2.has(x));
};
let nums1 = [1,2,2,1];
let nums2 = [2,2];
console.log(intersection(nums1, nums2));