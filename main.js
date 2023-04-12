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

//objects
let malin = {
    firstName: 'Malin',
    lastName: 'Larsson',
    age: 33,
};

console.log(malin);

console.log(`First name: ${malin.firstName}`);
let malinStr = `${malin.firstName} ${malin.lastName}, age: ${malin.age}`;
console.log(malinStr);

    
