class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string,) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const yauhen = new User ('Yauhen', 31, 'webDev')

yauhen; // { name: "Yauhen", age: 31, nickName: "webDev" }

// Class types modificators
class User1 {
    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

const yauhen1 = new User1 ('Yauhen', 31, 'webDev', 123)

// Minimization of Class properties
class User2 {
    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {}
}

// Class default properties
class User3 {
    name: string;
    age: number = 20; // age default property
    nickName: string = 'webDev'; // nickName default property

    constructor(name: string) {
        this.name = name;
    }

    getPass(): string {
        return `${this.nickName}${this.age}`;
    }
}

const user = new User3('Yauhen');

user; // { name: "Yauhen", age: 20, nickName: "webDev" }
user.getPass(); // "webDev20"

// Get access to private property
class User4 {
    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const yauhen2 = new User4('Yauhen');

yauhen2.setAge(30); // 30
yauhen2.myAge = 31; // 31