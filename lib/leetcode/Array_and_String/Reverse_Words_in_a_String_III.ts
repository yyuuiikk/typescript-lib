function reverseWords3(s: string): string {
    const words = s.split(' ');
    let res: string = '';

    for (let i = 0; i < words.length; i++) {
        if (i !== 0) res += ' ';
        res += words[i].split('').reverse().join('')
    }
    return res;
};

let s3 = "Let's take LeetCode contest";
let res3 = reverseWords3(s3);
console.log(res3);