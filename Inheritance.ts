// Наследование (inheritance)

// Simple Class example
class User0 {

    constructor(public name: string, public age: number) {}
}

const yauhen = new User0 ('Yauhen', 31 );

yauhen; // { name: 'Yauhen', age: 31 }

// Class with static property
class User1 {

    static secret = 12345; // static property

    constructor(public name: string, public age: number) {}
}

// Example of call static property
User1.secret

// Call static property in class method
class User2 {

    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User2.secret}`;
    }

}

const yauhen1 = new User2('Yauhen', 30);

yauhen1.getPass(); // "Yauhen12345"

// Compiled JavaScript code
"use strict";
// class User3 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getPass() {
//         return this.name + User3.secret
//     }
// }
// User3.secret = 12345

// Class example
class User4 {

    private nickName: string = 'webDev';
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User4.secret}`;
    }

}

// Inheritance example
class Yauhen extends User4 {
    name: string = 'Yauhenn';

    constructor(age: number) {
        super(name, age);
    }
}

// Create instances based on 'User' and 'Yauhen' classes
const max = new User4('Max', 20);
const yauhen2 = new Yauhen(31); // Expected 2 arguments, but got 1

// Personal method in inherited class
class Yauhen1 extends User4 {

    name: string = 'Yauhen';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}${User4.secret}`;
    }
}

const yauhen3 = new Yauhen1(31);

yauhen3.getPass(); // "31Yauhen12345"