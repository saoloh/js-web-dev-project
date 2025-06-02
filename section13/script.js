///1///
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
      let fname = zName.slice(0, zName.indexOf(" "));
      let lname = zName[zName.indexOf(" ")+1].toUpperCase();
    
    return `${fname} ${lname}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
      return `Your Age Is ${zAge.slice(0, 2)}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
    function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

///2///
// function itsMe() {
//     return `Iam A Normal Function`;
//   }

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
//   }
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

///3///
// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

///4///
function specialMix(...data) {
    let result = 0;
    for (i = 0; i < data.length; i++)
    {
      data[i] = parseInt(data[i]);
      if (isNaN(data[i])) continue;
      result += data[i];
  }
  if (result === 0) return "All Is Strings";
  return result;
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...inputs) {
//     return `String [${inputs.join("], [")}] => Done !`;
// };

let names = (...inputs) => `String [${inputs.join("], [")}] => Done !`;
  
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
  
/* ================================= */
  
// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + +two + +nums;

console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80