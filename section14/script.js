// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let newArr = mix.map((ele)=>{
//     if(typeof(ele)==="string"){
//         return ele;
//     }else{
//         return "";
//     } 
// }).reduce((acc,cur)=>{
//     if(typeof(cur)==="string"){
//         return acc + cur;
//     } 
// }).trim();
// console.log(newArr);
// Elzero
//===================================
// let myString = "EElllzzzzzzzeroo";
// let newArr = myString.split("").filter((ele,index)=>{
    
//     if(index == 0){
//         return ele;
//     } else if(ele !== myString[index-1]){
//         return ele;
//     } 
// }).join("");
// console.log(newArr);
// // Elzero
//==================================
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let newArr = myArray.reduce((acc,cur)=>{
//     if(typeof(cur) !== "string"){
//     cur = cur.join("");
//     }
//     return acc + cur;
// });
// console.log(newArr);
// Elzero
//========================================
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let newArr = numsAndStrings.filter(ele=>{
//     return !isNaN(ele);
// }).map(ele=>ele*-1);
// console.log(newArr);
// // [-1, -10, 10, 20, -5, -3]
//========================================
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let newArr = nums.reduce((acc,cur)=>{
//     if(cur%2 === 0){
//         return acc *cur 
//     } else{
//         return acc + cur
//     }
// },1)
// console.log(newArr);
// 500