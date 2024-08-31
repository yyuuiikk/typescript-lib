function twoSum2(numbers: number[], target: number): number[] {
    let result: number[] = [];
    let numMap = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const search = target - numbers[i];
        if (numMap.has(search)) {
            result = [numMap.get(search) + 1, i + 1];
            break;
        }
        numMap.set(numbers[i], i);
    }
    return result;
}

const numbers = [2, 7, 11, 15];
const target2 = 9;
console.log(twoSum2(numbers, target2));
