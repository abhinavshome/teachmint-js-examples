const cities = ['Banglore', 'Delhi', 'Dehradoon', 'Hyderabad'];

const upperCaseCities = cities.map(city => city.toUpperCase());

for(city of cities) {
    console.log(city);
}

cities.forEach(city => console.log(city));

console.log(cities, upperCaseCities);

const result1 = cities.find(city => city.charAt(0) === 'D');
const result2 = cities.find(city => city.charAt(0) === 'X');
const result3 = cities.filter(city => city.charAt(0) === 'D');
console.log(result1, result2, result3);

const numbers = [2,8,19,11];

const sumOfArrayElements = numbers.reduce((e, res) => e + res, 0);
const highest = numbers.reduce((e, res) => e > res ? e : res, numbers[0]);
console.log(sumOfArrayElements, highest);

//Assignment

const students = [
    {
        rollNum: 1,
        name: 'Sam',
        marks: {
            maths: 10,
            phy: 20,
            chem: 21
        }
    },
    {
        rollNum: 1,
        name: 'David',
        marks: {
            maths: 40,
            phy: 10,
            chem: 43
        }
    },
];
