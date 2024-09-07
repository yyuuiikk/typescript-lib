function isHappy(n: number): boolean {
    let pastResult = new Set();

    while (pastResult.has(n) === false) {
        pastResult.add(n);
        let nums = n.toString().split('').map(Number);
        let sum: number = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i] ** 2;
        }
        if (sum === 1) return true;

        n = sum;
    }
    return false;
};

let n = 19;
console.log(isHappy(n));