
// FUNCTION RANDOM ARGUMENT CHALLENGE


// function showDetails(a,b,c){
//     let arr =[];
//     arr.push(a,b,c);

//     let str,bool,age;
//     for(let i = 0 ; i <arr.length;i++){

//         if(typeof(arr[i]) === "string"){
//             str = arr[i];
//         } else if(typeof(arr[i]) === "number"){
//             age = arr[i];
//         } else{
//             bool = arr[i];
//         }
//     }
//     bool?console.log(`Hello ${str}, Your Age is ${age}, you are avialable for hire`):console.log(`Hello ${str}, Your Age is ${age}, you are not avialable for hire`);
// }



// showDetails("osama",38,true);
// showDetails(38,"osama",true);
// showDetails(true,38,"osama");
// showDetails(false,38,"osama");
//==============================================
// function sayHello(theName, theGender) {
//     if(theGender === "Male"){
//         console.log(`"Hello MR ${theName}"`);
//     } else if(theGender === "Female"){
//         console.log(`"Hello Miss ${theName}"`);
//     } else{
//         console.log(`"Hello  ${theName}"`);
//     }

//   }
  
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"
//=================================================
// function calculate(firstNum, secondNum, operation) {
//     if(typeof(secondNum) === "undefined"){
//         console.log(`Second Number Not Found`);
    
//     }else{ switch(operation){
//         case "add":
//             console.log(firstNum + secondNum);
//             break;
//         case "subtract":
//             console.log(firstNum - secondNum);
//             break;
//         case "multiply":
//             console.log(firstNum * secondNum);
//             break;
//         default:
//             console.log(firstNum + secondNum);
//     }}
   
//   }
  
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600
//====================================================
// function ageInTime(theAge) {
//     if(theAge < 10 || theAge > 100){
//         console.log(`age out of range`);
//     } else{
//         console.log(`months =>${theAge*12} \n weeks =>${theAge*12*4} \n days =>${theAge*365} \n hours => ${theAge*365*24} \n minutes => ${theAge*365*24*60} \n hours => ${theAge*365*24*60*60}`);
//     }
//   }
  
//   // Needed Output
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months
//===============================================
// function createSelectBox(startYear, endYear) {
//     document.write("<select>");
//     for(let i = startYear ; i <=endYear ;i++){
//     document.write(`<option value="${i}">${i}</option>`);
//     }
//     document.write("</select>");
//   }
//   createSelectBox(2000, 2021);
 
//===============================================

// function multiply(...arg){
//     let result = 1;
//     let num = 1;
//     for(let i = 0 ; i < arg.length ;i++){
//         if(typeof(arg[i]) === "string"){
//             continue;
//         } else{
//             num = arg[i];
//             num = Math.floor(num);
//             arg[i] = num;
//             result *= arg[i];
//         }
//     }
//     console.log(result);
// }


// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000