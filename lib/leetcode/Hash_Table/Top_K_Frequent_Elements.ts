function topKFrequent(nums: number[], k: number): number[] {
    let map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let val: number = map.get(nums[i]) ?? 0;
            map.set(nums[i], val + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    let sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    
    let result: number[] = [];
    for (let i = 0; i < sortedArray.length; i++) {
        result.push(sortedArray[i][0]);
        if (i + 1 === k) break;
    }

    return result;
}

let nums = [1,1,1,2,2,3];
let k = 2;
console.log(topKFrequent(nums, k));