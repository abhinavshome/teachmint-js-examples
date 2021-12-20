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

const sumOfArrayElements = numbers.reduce((res, e) => e + res, 0);
const highest = numbers.reduce((res, e) => e > res ? e : res, numbers[0]);
console.log(sumOfArrayElements, highest);

