// Function example
const createPassword = (name, age) => `${name}${age}`;

createPassword('Jack', 31) // "Jack31"

// Arguments type
const createPassword1 = (name: string, age: number | string) => `${name}${age}`;

createPassword1('Jack', 31) // "Jack31"
createPassword1('Jack', "31") // "Jack31"

// Function with optional argument "age"
// REST type

const createPassword2 = (name: string, age?: number) => `${name}${age}`;

// REST
const createSkills = ( name, ...skills) => `${name}, my skils are ${skills.join()}`;

// REST type
const createSkills1 = ( name: string, ...skills: Array<string>) => `${name}, my skils are ${skills.join()}`;

// Call function with REST arguments
createSkills('Jack', 'JS', 'ES6', 'React'); // "Jack, my skills are JS,ES6,React"


