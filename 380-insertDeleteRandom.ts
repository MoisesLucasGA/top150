class RandomizedSet {
    private x: Map<number, number>
    private arr: number[]

    constructor() {
        this.x = new Map<number, number>()
        this.arr = []
    }

    insert(val: number): boolean {

        if (this.x.has(val)) {
            return false
        }
        this.x.set(val, this.arr.length)
        this.arr.push(val)

        return true
    }

    print(){
        console.log(this.arr);
        console.log(this.x);
        
    }

    remove(val: number): boolean {

        if (!this.x.has(val)) {
            return false
        }

        const index = this.x.get(val)!
        const last = this.arr[this.arr.length - 1]

        this.x.set(last, index)
        // Swap values
        this.arr[index] = last
        // Remove the last element
        this.arr.pop()
        // Remove the mapping for the removed value
        this.x.delete(val)
        return true
    }

    getRandom(): number {
        const pos = Math.floor(Math.random() * this.arr.length)

        return this.arr[pos]
    }
}


const x = new RandomizedSet()

x.insert(10)
x.insert(20)
x.insert(30)

x.print()

x.remove(10)
x.print()

console.log(
    x.getRandom()
);

// console.log(x);


// const x = new Set()

// x.add(1)
// x.add(2)
// x.add(3)
// x.add(4)


// console.log(x.size);

// const arr = Array.from(x)

// console.log(arr);
// const r = (Math.floor(Math.random()*10) % 4)
// console.log(r);
// console.log(arr[r]);
