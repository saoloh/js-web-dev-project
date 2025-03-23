// challenge 1
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);//=>11+20+80-11=100 a=12 b=21 c=81
console.log(++a + -b + +c++ - -a++ + +a); //=> 13+-21+81+13+14=100 a=14 b=21 c=82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//=>81+21-13+12-1=100

//Challenge 2
let d = "-100";
let e = "20";
let f = 30;
let g = true;
// Only Use Variables Value
// Do Not Use Variable Twice
console.log(-d * +e + f%g); // 2000
console.log(-d + ++f + ++e * ++g); // 173

//1//
console.log(10 * 20 - 15 % 3 + 190 + 10 - 400); // 0
console.log((10 * 20 * 15 / 3 + 190 + 10) % 400); // 0
console.log(10 + 20 % 15 % 3 * 190 + 10 - 400); // 0

//2//
let num = 3;
// Solution One
console.log(num+num); // 6
// Solution Two
console.log(num * (num-true)); // 6
// Soultion Three
console.log(num ** (num - true) - num); // 6
// Soultion Four
console.log(num+num*true); // 6
// Solution Five
console.log(num+num**true); // 6
// Solution Six
console.log(num / true + num); // 6
console.log((typeof num).length); // 6

//3//
let num2 = "10";
// Solution One
console.log(+num2 + +num2); // 20
// Solution Two
console.log(+num2 * (true+true)); // 20
// Solution Three
console.log(Number(num2) + Number(num2)); // 20

//4//
let points = 10;
++points
++points
++points
console.log(points); // 13

--points
--points
--points
--points
--points
console.log(points); // 8;