console.log("operators in js ")
 let a=40;
 let b=4;
 // arithmetic operators
 console.log(a+b) // addition
console.log(a - b) // subtraction
console.log(a / b) // division
console.log(a * b) // multiplication
console.log(a % b) // modulo
console.log(a ** b) // exponentiation
console.log(a++) // post-increment
console.log(++a) // pre-increment
console.log(a--) // post-decrement
console.log(--a) // pre-decrement

// assignmen operators
let c = a; // assignment operator
c += 5; // addition assignment
c -= 5; // subtraction assignment
c *= 5; // multiplication assignment
c /= 5; // division assignment
c %= 5; // modulo assignment
c **= 5; // exponentiation assignment

// comparison operators
console.log(a == b) // equal to
console.log(a === b) // strict equal to
console.log(a != b) // not equal to
console.log(a !== b) // strict not equal to
console.log(a > b) // greater than
console.log(a < b) // less than
console.log(a >= b) // greater than or equal to
console.log(a <= b) // less than or equal to

// logical operators
console.log(a > 30 && b < 10) // logical AND
console.log(a > 30 || b < 10) // logical OR
console.log(!(a > 30)) // logical NOT

// bitwise operators
console.log(a & b) // bitwise AND
console.log(a | b) // bitwise OR
console.log(a ^ b) // bitwise XOR
console.log(~a) // bitwise NOT
console.log(a << 2) // left shift
console.log(a >> 2) // right shift
console.log(a >>> 2) // unsigned right shift

// ternary operator
let result = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log(result)

