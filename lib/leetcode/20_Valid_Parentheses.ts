// stackを使用する
function isValid(s: string): boolean {
    const openBrackets = ["(", "{", "["];
    const bracketMap = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["],
    ]);
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (openBrackets.includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false;

            // 閉じかっこなので、stackを探索して対応する開きかっこがあるか確認する            
            let target = bracketMap.get(s[i]);
            if (target !== stack[stack.length - 1]) return false;

            // 末尾を削除
            stack.pop();
        };
    }
    if (stack.length !== 0) return false;

    return true;
};

const s = "()[]{}";
console.log(isValid(s));