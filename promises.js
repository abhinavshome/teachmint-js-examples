// const contactRestaurant = (f1) => {
//     setTimeout(() => {
//         console.log('restaurant contacted');
//         const token = 'ABC123';
//         f1(token);
//     }, 2000);
// };

// const bookTable = (token, f) => {
//     console.log(`booking made for the token ${token}, now ordering food`);
//     setTimeout(() => {
//         const bookingId = '111';
//         f(bookingId);
//     }, 2000);
// };

// const orderFood = (bookingId) => {
//     console.log(`ordering food for booking ${bookingId}`)
// }

// contactRestaurant((token) => {
//     bookTable(token, (bookingId) => {
//         orderFood(bookingId);
//     });
// });

let bookingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const bookingId = 'ABC123';
        resolve(bookingId);
        // reject('Restaurant is closed');
    }, 2000);
});

bookingPromise.then(
    (data) => console.log(`Ordering with booking id ${data}`),
    (err) => console.log(err)
);

(async () => {
    try {
        const data = await bookingPromise;
        console.log(`Ordering with booking id ${data}`);    
    } catch(err) {
        console.log(err);
    }
})();


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

console.log('here');

const f = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
        console.log('inside async');
    } catch(err) {
        console.log(err);
    }
};

f();

console.log('outside async');