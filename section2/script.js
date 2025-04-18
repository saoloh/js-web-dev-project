// Add Variables Here
let numberOne = 10;

let number_two = 20;
// Ouput
console.log("10"+"20"); // Normal Concatenate => 1020
console.log(typeof("10"+"20")); // Normal Concatenate => String
console.log(`${10}${20}`); // Template Literals Way => 1020
console.log(typeof(`${10}${20}`)); // Template Literals Way => String

console.log("20\n"+"10");
/*
  Normal Concatenate
  20
  10
*/

console.log(`${20}\n${10}`);
/*
  Template Literals Way
  20
  10
*/
//========================================
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object
//========================================
console.log("\`I'm In \n\\\\ \n Love \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"Javascript\"\"\`\`");
//========================================
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${a}_`); // _21_2021_2021_2021_20_