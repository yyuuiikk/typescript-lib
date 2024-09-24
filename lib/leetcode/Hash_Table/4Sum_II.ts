function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let length: number = nums1.length;
    let search: number = 0;
    let resultCount: number = 0;

    // numsをMapに変換して検索速度を速くする
    let map1 = new Map();
    let map2 = new Map();
    let map3 = new Map();
    let map4 = new Map();
    for (let key = 0; key < length; key++) {
        if (map1.has(nums1[key])) {
            map1.set(nums1[key], (map1.get(nums1[key]) as number) + 1);
        } else {
            map1.set(nums1[key], 1);
        }

        if (map2.has(nums2[key])) {
            map2.set(nums2[key], (map2.get(nums2[key]) as number) + 1);
        } else {
            map2.set(nums2[key], 1);
        }

        if (map3.has(nums3[key])) {
            map3.set(nums3[key], (map3.get(nums3[key]) as number) + 1);
        } else {
            map3.set(nums3[key], 1);
        }

        if (map4.has(nums4[key])) {
            map4.set(nums4[key], (map4.get(nums4[key]) as number) + 1);
        } else {
            map4.set(nums4[key], 1);
        }
    }

    for (const [key1, value1] of map1) {
        for (const [key2, value2] of map2) {
            for (const [key3, value3] of map3) {
                search = 0 - (key1 + key2 + key3);
                if (!map4.has(search)) continue;

                resultCount += value1 * value2 * value3 * map4.get(search);
            }
        }
    }

    return resultCount;
};

let nums1 = [1,2];
let nums2 = [-2,-1];
let nums3 = [-1,2];
let nums4 = [0,2];
console.log(fourSumCount(nums1, nums2, nums3, nums4));