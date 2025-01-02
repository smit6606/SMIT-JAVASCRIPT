/*
Constructor => Special method of class (automatically call when object ic created)

There Are Two Types of Methods
i) Default Constructor
ii) Parameterized Constructor
*/

// i) Default Constructor

class Test {
    constructor() {
        console.log("Default Constructor called......")
    }
    sayHello() {
        console.log("Hello! Good Morning. Jay Shree Krishna")
    }
    sumAddition() {
        console.log("Sum of A + B:", a + b);

    }
}
let smit = new Test()
smit.sayHello()

// ii) Parameterized Constructor

class Demo {
    constructor(name, a, b) {
        this.name = name;
        this.a = a;
        this.b = b;
        this.sum = a + b;

        console.log("Constructor called......."); 
        console.log("Sum of a + b in constructor:", this.sum);
    }

    sayHello() {
        console.log("Hello! Good Morning. Jay Shree Krishna", this.name);
    }

    sumAddition() {
        console.log("Sum of A + B:", this.sum);
    }
}

let jay = new Demo("Smit", 12, 56);
jay.sayHello();
jay.sumAddition();