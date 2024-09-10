function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let mapS = new Map();
    let mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        if ( (mapS.has(s[i]) && !mapT.has(t[i])) || (!mapS.has(s[i]) && mapT.has(t[i])) ) {
            return false;
        }
        if (mapS.has(s[i]) && mapT.has(t[i])) {
            if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) {
                return false;
            }
        }
        if (!mapS.has(s[i])) {
            mapS.set(s[i], t[i]);
        }
        if (!mapT.has(t[i])) {
            mapT.set(t[i], s[i]);
        }
    }

    return true;
};

// let s = "egg";
// let t = "add";
// let s = "foo";
// let t = "bar";
let s = "bbbaaaba";
let t = "aaabbbba";
console.log(isIsomorphic(s, t));