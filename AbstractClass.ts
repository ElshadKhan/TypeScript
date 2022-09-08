// Abstract class example
abstract class User {

    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string; // Abstract method

}

// const max = new User('Max', 20); // Cannot create an instance of an abstract class

// Abstract class example
class Yauhen extends User {

    name: string = 'Yauhen';

    constructor(age: number) {
        super(Yauhen.name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}`;
    }
}

const yauhen = new Yauhen(31)

// Call prototype method
yauhen.greet();      // "Yauhen"
// Call personal method
yauhen.getPass()
