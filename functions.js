// function add(n1, n2) {
//     return n1 + n2;
// }

const add = function (n1, n2) {
    return n1 + n2;
};

const sum = add(2,8);

const average = function(n1, n2, adder) {
    return adder(n1, n2)/2;
};
let m = 3;

console.log(average(3,8, function (n1, n2) {
    return n1 + n2;
}));


console.log(sum);