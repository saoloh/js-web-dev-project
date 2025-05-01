//1//

// Test Case 1
let num = 9; // "009"
if (num < 10) {
  console.log(`00${num}`);
}
// Test Case 2
num = 20; // "020"
if (num > 10 && num < 100) {
  console.log(`0${num}`);
}
// Test Case 3
num = 110; // "110"
if (num >= 100) {
  console.log(num);
}

//2//
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str)
{
    console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str && num1!==str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 != str2 && typeof num1 !== typeof str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str === typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

//3//
let Num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3>Num1&&typeof(num3)!==typeof(num2))
{
console.log(`${num3} Is Larger Than ${Num1} And Type string Not The Same Type As number`);
}

if (num3 > Num1 && num3 == num2 && typeof(num3) !== typeof(num2)) {
  console.log(`${num3} Is Larger Than ${Num1} And Type string Not The Same Type As number`);
}

if (num3 != Num1 && typeof(num3) !== typeof(num1) && typeof(num3) !== typeof(num2)) {
  console.log(
    `${num3} value And Type Is Not The Same As ${Num1} And Type Is Not The Same As ${num2}`
  );
}

//4//
// Edit What You Want Here

let nuM1 = 15;
let nuM2 = 10;
let nuM3 = +"15";
let nuM4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (nuM1 > nuM2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (nuM1 > nuM2 && nuM1 < nuM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (nuM1 > nuM2 && nuM1 === nuM3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((nuM1 + nuM2) < nuM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((nuM1 + nuM3) < nuM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((nuM1 + nuM2 + nuM3) < nuM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (nuM4 - (nuM1 + nuM3) + nuM2 === 21) {
  console.log("True");
} else {
  console.log("False");
}


//if Condition Challenge//


let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

//---------------------------//
let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
  console.log("Good1");
}

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good2");
}

if (typeof(st.length) !== "string") {
  console.log("Good3");
}

if (typeof(st.length) === "number") {
  console.log("Good4");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}