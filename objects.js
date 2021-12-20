let person = {
    name: 'Abhinav',
    age: 36,
    address: {
        city: 'Banglore',
        state: 'KA'
    }
};

for(let key in person) {
    console.log(key);
}

console.log(person.name);
console.log(person.address.city);
const key = 'name';
console.log(person[key]);