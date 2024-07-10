//strongly typed syntax
let a : string = "Pakistan";
a = "USA";
let b : number = 9;
let c : boolean = true;
let d: any = "abc@xyz_12.com";

//type inference
let e = "USA";
let f = 10.9;
f = 22;
let g = false;
g = true;
let h = "123@abc.com";
//  e.g 2
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let box = new Box<number>(42);
console.log(box.getValue()); // Output: 42
