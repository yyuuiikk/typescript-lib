function intersect(nums1: number[], nums2: number[]): number[] {
    let nums1Map: Map<number, number> = new Map();
    let nums2Map: Map<number, number> = new Map();
    
    for (let i = 0; i < nums1.length; i++) {
        nums1Map.set(nums1[i], (nums1Map.get(nums1[i]) ?? 0) + 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        nums2Map.set(nums2[i], (nums2Map.get(nums2[i]) ?? 0) + 1);
    }
    
    let result: number[] = [];
    nums1Map.forEach((value, key) => {
        if (nums2Map.has(key)) {
            let nums2MapVal: number = nums2Map.get(key) ?? 0;
            if (nums2MapVal > value) {
                result.push(...Array(value).fill(key));
            } else {
                result.push(...Array(nums2MapVal).fill(key));
            }
        }
    });
    
    return result;
};

let nums1 = [1,2,2,1];
let nums2 = [2,2];
// let nums1 = [4,9,5];
// let nums2 = [9,4,9,8,4];
// let nums1 = [1,2,2,1];
// let nums2 = [2];
console.log(intersect(nums1, nums2));