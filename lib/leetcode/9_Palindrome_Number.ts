function isPalindrome(x: number): boolean {
    const stringAry = x.toString().split('');
    const stringAryReverse = stringAry.slice().reverse();
    for (let i = 0; i < stringAry.length; i++) {
        if (stringAry[i] !== stringAryReverse[i]) return false;
    }

    return true;
};

const x = 123;
console.log(isPalindrome(x));