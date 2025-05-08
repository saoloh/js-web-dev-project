// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         let firstName = " ";
//         let lastName = " ";
//         console.log(zName.slice(0,zName.indexOf(" ")));
//         firstName = zName.slice(0,zName.indexOf(" "));
//         let arr = firstName.split("");
//         firstName = arr.join("");
//         arr[0] = arr[0].toLowercase();
//         lastName = zName.charAt(zName.indexOF(" ") + 1).toUppercase;
//         let nameMess = firstName + " " +lastName;
//       // Osama Mohamed => Osama M.
//       // Ahmed ali => Ahmed A.
//     }
//     function ageWithMessage(zAge) {
//         let age = parseInt(zAge);
//         let ageMess = `Your Age Is ${age}`;
//         console.log(`Your Age Is ${age}`);
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//     }
//     function countryTwoLetters(zCountry) {
//       console.log(`you live in ${zCountry.slice(0,2)}`);
//       let countryMess = `you live in ${zCountry.slice(0,2)}`;
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//     }
//     function fullDetails() {
//       console.log(`Hello ${nameMess}.,${ageMess},You Live In ${countryMess}`);
//     }
//     return fullDetails(); // Do Not Edit This
//   }
// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
//   // Hello Osama M., Your Age Is 38, You Live In EG
// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY
// =========================================

// let itsMe = _ =>{return `Iam A Normal Function`};

//   console.log(itsMe()); // Iam A Normal Function
//===========================================

// let urlCreate = (protocol, web, tld) =>{
//     return `${protocol}://www.${web}.${tld}`;
//   }
//   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//==============================================
// let = checker =  zName => {
//     return  status => {
//       return  salary => {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }
//   console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
//   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
//============================================
