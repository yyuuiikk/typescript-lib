function findRestaurant(list1: string[], list2: string[]): string[] {
    let resultMap = new Map();
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                resultMap.set(list1[i], i + j);
                continue;
            }
        }
    }
    if (resultMap.size === 0) return [];

    // Mapを配列に変換して、valueの小さい順にソートする
    let resultMapArray = Array.from(resultMap.entries());
    resultMapArray.sort((a, b) => a[1] - b[1]);

    console.log(resultMapArray);

    let result: string[] = [];
    let minIndex = 0;
    for (let i = 0; i < resultMapArray.length; i++) {
        if (i === 0) {
            minIndex = resultMapArray[i][1];
            result.push(resultMapArray[i][0]);
            continue;
        }

        if (minIndex === resultMapArray[i][1]) {
            result.push(resultMapArray[i][0]);
        }
    }

    return result;
};

// let list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
// let list2 = ["KFC","Shogun","Burger King"];
// let list1 = ["happy","sad","good"];
// let list2 = ["sad","happy","good"];
let list1 = ["k","KFC"];
let list2 = ["k","KFC"];
console.log(findRestaurant(list1, list2));