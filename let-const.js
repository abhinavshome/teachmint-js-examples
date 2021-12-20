console.log('hello world');

// const x = 3; //ressignment not possible
let x = 3;
x = 'Hello';
console.log(x);

const person = {name: 'Abhinav'};
// person = {name: 'Sumit'}; //error
person.name = 'Sumit';
console.log(person);

const address = Object.freeze({city: 'Banglore'});
address.city = 'Delhi';
console.log(address);

//difference between primitive and other types
let num1 = {count: 3};
let num2 = num1;
num2.count++;
console.log(num1, num2);

if(true) {
    var y = 2;
   console.log(y); 
}

function z() {
    let p = 4;
}

// console.log(y); //scoping error 
// console.log(p); //scoping error
