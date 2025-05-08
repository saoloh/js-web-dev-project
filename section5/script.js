// Test Case 1
// let num1 = 9; // "009"
// if(num1 < 10){
//     console.log("00" + num1);
// }
// // Test Case 2
// let num2 = 20; // "020"
// if(num2 > 10 && num2 < 100){
//     console.log("0" + num2);
// }
// // Test Case 3
// let num3 = 110; // "110"
// if(num3 >= 100 ){
//     console.log(num3);
// }
//==========================
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"
// if(num1 == str){
//     console.log(`"{num1} Is The Same Value As {str}"`);
// }
// if(num1 == str && typeof(num1) !== typeof(str)){
//     console.log(`"{num1} Is The Same Value As {str} But Not The Same Type"`);
// }
// if(num1 !== Number(str2) || typeof(num1) !== typeof(str2)){
//     console.log(`"{num1} Is Not The Same Value Or The Same Type As {str2}"`);
// }
// if(typeof(str) === typeof(str2) && Number(str) != Number(str2)  ){
//     console.log(`"{str} Is The Same Type As {str2} But Not The Same Value"`);
// }
//==================================

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
// if(num3 > num1 && typeof(nun3) !== typeof(num2)){
//     console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"`);

// }
// if(num3 > num1 && typeof(nun3) !== typeof(num2) && num2 == num3){
//     console.log(`30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"`);
    
// }
// if(num3 !== num1 && typeof(nun3) !== typeof(num1) && typeof(nun3) !== typeof(num2)){
//     console.log(`{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"`);
    
// }

//============================================
// Edit What You Want Here

// let num1 = 6;
// let num2 = 4;
// let num3 = 6;
// let num4 = 29;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }
//===================================
// let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

//  let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

//  let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

//  let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

//  let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

//  let day = "World";
// // Output => "Its Not A Valid Day"


// day = day.trim();
// let slicedVariable = day.slice(1);
// day = day.charAt(0).toUpperCase();
// day = day + slicedVariable;
// switch(day){
//     case "Friday":
//     case "Saturday":
//     case "Sunday":
//         console.log(`No Appointments Available`);
//     break;
//     case "Monday":
//     case "Thursday":
//         console.log(`From 10:00 AM To 5:00 PM`);
//     break;
//     case "Tuesday":
//         console.log(`From 10:00 AM To 6:00 PM`);
//     break;
//     case "Wednesday":
//         console.log(`From 10:00 AM To 7:00 PM`);
//     break;
//     default:
//         console.log(`Its Not A Valid Day`);
// }