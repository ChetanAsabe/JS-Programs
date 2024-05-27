let a = 10;
let b = 20;

console.log('Before swap');
console.log('a =', a);
console.log('b =', b);

//using arithmatic operator
// a = a + b;
// b = a - b;
// a = a - b;

//using JS Destructuring
[a, b] = [b, a]

console.log('After swap');
console.log('a =', a);
console.log('b =', b);