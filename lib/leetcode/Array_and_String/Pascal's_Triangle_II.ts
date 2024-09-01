function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    let res: number[] = [];
    for (let i = 0; i < rowIndex+1; i++) {
        if (i === 0 || i === rowIndex) {
            res.push(1);
        } else if (i === 1 || i === rowIndex - 1) {
            res.push(rowIndex);
        } else {
            res.push(calcCombination(rowIndex, i));
        }
    }

    return res;
};

function calcCombination(idx1: number, idx2: number): number {
    return factorial(idx1) / (factorial(idx2) * factorial(idx1 - idx2));
}

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let rowIndex = 5;
let res = getRow(rowIndex);
console.log(res);
