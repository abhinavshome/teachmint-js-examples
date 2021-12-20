//Javascript is single threaded, non blocking

// let users = fetchUsersFromDatabase();
// processUsers();
// doSomethingElse();

// fetchUsersFromDatabase(users => processUsers());
// fetchUsersFromDb().then(users => processUsers())
// doSomethingElse();

setTimeout(() => console.log('hello'), 2000);
console.log('Welcome');
const now = Date.now();
while(Date.now() < now + 5000) {}
console.log(Date.now() - now);


// EVENT LOOP

// what | when
// ----------
// call f | fetching users is done
// print hello | at 5:20pm