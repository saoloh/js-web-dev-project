//1//
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num, 1);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3
myFriends.length = num;
console.log(myFriends);

//2//
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

//3//
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo.reverse());
//or//
// finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//4//
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.sort()[0][0].slice(website.length).toUpperCase()); // ZERO

//5//
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack[1] == needle) {
  console.log("Found");
}
if (haystack[-2] == needle) {
  console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

//6//
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs
  .concat(arr1, arr2)
  .sort()
  .slice(arr2.length)
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.reverse()

console.log(my.slice(counter-true)); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(counter,-true)); // ["Elham", "Mazero"]

console.log(my[counter].slice(zero,counter-true)+my[counter+true].slice(counter-true)); // "Elzero"

console.log(my[zero][counter+true]+my[counter-true][zero]); // "rO"