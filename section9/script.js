// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.splice(3,1);
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//==========================
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.splice(0,1);
// friends.splice(2,1);
// console.log(friends); // ["Eman", "Osama"]
//============================================
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr = arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//====================================
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words.reverse().shift()[0].slice(website.length).toUpperCase()); // ZERO
//======================================
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if(haystack.includes(needle)){
//     console.log("found");
// }
// if(haystack[1] === needle){
//     console.log("found");
// }
// if(haystack.slice(1,2) == needle){
//     console.log("found");
// }
//======================================
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// allArrs.push(arr2[2],arr1[2],arr2[3]);
// allArrs =  allArrs.join("").toLowerCase();
// console.log(allArrs); // fxy
//==================================
