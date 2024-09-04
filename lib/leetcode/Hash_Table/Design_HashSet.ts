class MyHashSet {
    private data: number[];

    constructor() {
        this.data = [];
    }

    add(key: number): void {
        this.data.push(key);
    }

    remove(key: number): void {
        if (this.data.includes(key)) {
            this.data = this.data.filter((item) => item !== key);
        }
    }

    contains(key: number): boolean {
        return this.data.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
var obj = new MyHashSet();
obj.add(1);
obj.add(2);
console.log(obj.contains(1));
console.log(obj.contains(3));
obj.remove(2);
console.log(obj);