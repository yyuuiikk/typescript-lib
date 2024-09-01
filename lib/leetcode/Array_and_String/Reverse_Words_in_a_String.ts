function reverseWords(s: string): string {
    return s.trim().split(/\s+/).reverse().join(' ');
};

let s = "the sky is blue";
let res = reverseWords(s);
console.log(res);