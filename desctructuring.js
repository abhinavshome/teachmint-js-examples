const arr = ['Abhinav', 'Sumit'];
// const name1 = arr[0];
// const name2 = arr[1];

const [name1, name2] = arr;

console.log(name1, name2);

const obj = {
    person1: 'Abhinav',
    person2: 'Sumit'
};

// const person1 = obj.person1;
// const person2 = obj.person2;

const {person1, person2} = obj;

console.log(person1, person2);