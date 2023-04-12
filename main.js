//Hello World!

console.log('Hello, world!');

//variables
let greeting = 'Hej från en variabel';
console.log(greeting);

//redifine
greeting = 3;
console.log(greeting);
//redifine
greeting = 'Hello';

const PI = 3.1415;

//Printing
console.log(greeting + ' PI is: '+PI);

//interploation and templating
console.log(`${greeting}, PI is: ${PI}`);

//Be careful with floats
console.log(0.1 + 0.2);

//Equality
console.log(1==1); //true
console.log(1=='1'); //true,  här omvandlas en string till en int
console.log(1==='1'); //false, här omvandlas en string INTE till int

//loose typing and conversation
let myNumber = 5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //Här blir svaret 10 då vi räknar på nummer

myNumber = '5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //Här blir svaret 55 då vi lägger på en femma efter en string

/*Conttrol flows*/
//if
let myAge = 33;
if(myAge >=40){
    console.log('You are getting old');
} else{
    console.log('You\'re still young');
}
 myAge = 34;
//ternary operation
myAge === 33 ?
    console.log('33') :
    console.log('not 33');

    //boolean statement ? true : false
/*
camelCase // praxis i JS functions / vars
PascalCase // Classes
snake_case // often not used
*/


//loops
//for
for(let i = 0; i < 5; i++) {
    console.log(i);
}

let persons = [
    'Malin',
    'Kalle',
    'Arvid',
    'Axel',
];
//log entire array  
console.log(persons);
//lenght of array
console.log(persons.length);
// get first person
console.log(persons[0]);
//get last person
console.log(persons[persons.length - 1]);

//get slice of array
let newPersons = persons.slice(0,2); //i detta fall tar man allt som är innan 2, 0 start av slice, 2 slutet på slice (men inkluderas inte)
console.log(newPersons);

//add to start of array
persons.unshift('Ulf');

//add to end of array
persons.push('Yri');

console.log(persons);

//remove from start of array
persons.shift();

//Remove from end of array
persons.pop();

console.log(persons);

//loop over arrays
for(let person of persons) {
    console.log(person);
}

//older, still works
for(let i = 0; i <persons.length; i++) {
    console.log(persons[i]);
}
//lambda loop
persons.forEach(x => console.log(x));

//objects: Key : value
let malin = {
    firstName: 'Malin',
    lastName: 'Larsson',
    age: 33,
};

console.log(malin);

console.log(`First name: ${malin.firstName}`);
let malinStr = `${malin.firstName} ${malin.lastName}, age: ${malin.age}`;
console.log(malinStr);

let malinAdvanced = {
    firstName: 'Malin',
    lastName: 'Larsson',
    age: 33,
    hobbies: ['baking', 'reading', 'movies']
};

console.log(malinAdvanced); //Object
let malinJSON = JSON.stringify(malinAdvanced); //object to JSON
console.log(malinJSON);
console.log(JSON.parse(malinJSON)); // back to object


//loop over object
for(let propertyName in malinAdvanced) {
    let propertyValue = malinAdvanced[propertyName];
    console.log(propertyName, propertyValue);
}
for(let propertyName in malinAdvanced) {
    let propertyValue = malinAdvanced[propertyName];
    if(Array.isArray(propertyValue) === true) {
        for(let hobby of propertyValue){
            console.log("Hobby: " + hobby);
        }
    } else {
        console.log(propertyName + ' : ' + propertyValue);
    }
}

//connection to html
//ask js to create a new element
let myDiv = document.createElement('div');
//add some html
myDiv.innerHTML =`
<h1>Hello from JS</h1>
<p>This text is for JavaSpript, my age is ${malin.age}</p>
`;

//grab the body tag
let body = document.querySelector('body');

//Add div to html
body.append(myDiv);

//another way to add data
let myBands = [ 
    {
    name: 'The Beatles',
    genre: 'pop'   
    },
    {
        name: 'The Rolling Stones',
        genre: 'Rock'
    }
];

//Grab the bands div
let bandsDiv = document.querySelector('#bands');
for(let band of myBands) {
    bandsDiv.innerHTML += `
    <div class= "band">
    <h2>${band.name}</h2>
    <p>Genre: ${band.genre}</p>
    </div>
    `;
}

//functions
function sayHello() {
    console.log('Hello');
}

const sayHello2 = () => {
    console.log('Hello 2');
}

sayHello();
sayHello2();

//different ways to declare same function
//function declaration
function add(a, b) {
    return a + b;
}
//arrow function
const add2 = (a, b) => {
    return a + b;
}
//function expression
const add3 = function(a, b) {
    return a + b;
}

//arrow function with implicit return
const add4 = (a, b) => a + b;
//arrow function with implicit return and one parameter
const add5 = a => a +5;

console.log(add(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
console.log(add5(1));

class Person {
    constructor(name, age, hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    greetings() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
        console.log('I enjoy: ' + this.hobby);
        
    }
}

const malinClass = new Person('Malin', 33, 'wine');
malinClass.greetings();
