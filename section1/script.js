//https://elzero.org/javascript-bootcamp-assignments-lesson-from-001-to-009/

//1//
/* the code number one will not work 
because the element it works on has not been loaded yet 
*/

//2//
//inline style solution
document.write(
  '<h1 style="color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial">Elzero</h1>'
);
//the optimal solution
document.querySelector("h1").style =
  "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
//line by line style solution
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

//3//
console.log(
  "%cElzero %cWeb %cSchool",
  "font-size:40px;color:red",
  "font-size:40px;color:green;font-weight:bold",
  "font-size:40px;background-color:blue"
);

//4//
console.group("Group 1");
console.log("Message One");
console.log("Message Two");

console.group("Child Group");
console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // End Grand Child Group

console.groupEnd(); // End Child Group
console.groupEnd(); // End Group 1

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // End Group 2

//5//
console.table(["Elzero", "sameh", "aya", "gamal", "ahmed"]);

//6//
//override the functions with empty ones
console.log = function () {};
document.write = function () {};

console.log("Iam In Console");
document.write("Iam In Page");
