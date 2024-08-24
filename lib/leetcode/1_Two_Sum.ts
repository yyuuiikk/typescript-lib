function twoSum(nums: number[], target: number): number[] {
    let numsMap = new Map;
    nums.forEach((val, key) => {
        numsMap.set(key, val);
    })

    for (let i = 0; i < nums.length; i++) {
        let search = target - nums[i];
        for (let [mapKey, mapVal] of numsMap) {
            if (i === mapKey) {
                continue;
            }

            if (search === mapVal) {
                return [i, mapKey];
            }
        }
    }
    return [];
};

// const nums = [3, 2, 3];
// const target = 6;
// const nums = [0,4,3,0];
// const target = 0;
const nums = [1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1];
const target = 11;

console.log(twoSum(nums, target));