// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(150_000-50_000); // 100000
console.log(100*1000); // 100000
console.log(1_000_000/10); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
//====================================
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
//================================


//================================
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number((parseFloat(myVar)).toFixed(2))); // 100.57
//====================================
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num) ); // 2
//====================================
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt.toFixed(0)); // 10
//====================================
console.log(Math.ceil(Math.random()*4)); // 0 || 1 || 2 || 3 || 4
//===================================
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(! "10" !== 10); // true
console.log(! 20 == false); // true
//=====================================
let num1 = 10;
let num2 = 20;

console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num2 >= num1); // true
console.log(num1 <= num2); // true
console.log(num1 !== num2); // true
//=====================================
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a > b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
//=====================================