class MyHashMap {
    private data: Map<number, number>;

    constructor() {
        this.data = new Map<number, number>();
    }

    put(key: number, value: number): void {
        this.data.set(key, value);
    }

    get(key: number): number {
        return this.data.get(key) ?? -1;
    }

    remove(key: number): void {
        if (this.data.has(key))  {
            this.data.delete(key);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
var myHashMap = new MyHashMap();
myHashMap.put(1, 1);
myHashMap.put(2, 2);
console.log(myHashMap);
console.log(myHashMap.get(1));
myHashMap.put(2, 1);
console.log(myHashMap.get(2));
myHashMap.remove(2);
console.log(myHashMap);