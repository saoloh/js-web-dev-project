// ///1///
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let letters = mix.map(function (elem) { return isNaN(parseInt(elem)) ? elem :"";}).reduce(function(acc,current){return `${acc}${current}`})
// console.log(letters)
// // Elzero


// ///2///
// let myString = "EElllzzzzzzzeroo";
// let Elzero = myString.split("").filter((ele, index) => index == 0 ? ele : myString[index] != myString[index - 1] ? ele : "").join("");
// console.log(Elzero);
// // Elzero

// ///3///
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let rr = myArray.reduce((acc, current) => { console.log(`acc=>${acc}`); console.log(`current=>${current}`); return acc+current;})
// console.log(rr)
// // Elzero

// ///4///
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let negative = numsAndStrings.filter((ele) => !isNaN(ele)).map(ele => -ele);
// console.log(negative);
// // [-1, -10, 10, 20, -5, -3]

// ///5///
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let add = nums.reduce((acc, current) => current % 2 === 0 ? acc * current : acc + current, 1);
// console.log(add)
// // 500

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter((ele) => isNaN(ele))
    .map((ele) => ele === "_" ? " " : ele === myString[myString.length - true] ? "":ele[ele.length-ele.length]).reduce((acc,current)=>acc+current)

console.log(solution); // Elzero Web School
