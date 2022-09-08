// Define object type
let user: { name: string, age: number, nickName: string } = {
    name: "Yauhen",
    age: 30,
    nickName: "Wova",
}

let admin: { name: string, age: number, nickName: string } = {
    name: "Max",
    age: 20,
    nickName: "webPapa",
}

// Using Type for objects structure
// Помечаем тип с помощью ?-знака как опциональный
type Person = { name: string, age: number, nickName?: string, getPass?: () => string };

// Apply Person type for objects with the same structure
let user1: Person = {
    name: "Yauhen",
    age: 30,
    nickName: "Wova",
}

let admin1: Person = {
    name: "Max",
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
};

const greetUser = (): void => {
    alert ("Hello, nice to see you!")
};

// Array Type
let lisst: number[] = [1,2,3]

let list: Array<number> = [1,2,3] // Generic type

// Tuple Type
// Multiple lines
let x: [string, number];

x = ["hello", 10]

// One line
let y: [string, number] = ["goodbuy", 42];

// Error case:
// x = [10, "hello"];

// Anyy Type
// Any type for array
let u: [any, any] = ["goodbuy", 42];

let z: Array<any> = [10, "hello"];

// Any type for string
let notSure: any = false;

// Issue case ( no error )
notSure = true;     // boolean
notSure = 42;       // number
notSure = "hello";  // string

// Never Type
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg)
}

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
}

// Object Type
const create = (o: object | null): void => { };

// create(1);
// create('42');
create({ obj: 1 })

// Multiple types for one value
let id: number | string;

id = 10;    // number is valid
id = '42';  // number is valid
// id = true;

// Type
type Name = string;   // Custom type creation

let idi: Name;         // Apply custom type

idi = '42';            // No, error
// idi = 10;


