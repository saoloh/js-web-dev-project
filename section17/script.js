

// let setOfNumbers = new Set().add(10);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers);
// // how to get the last element in one line ?
// setOfNumbers.forEach((e)=>{console.log(e)})


// =============================
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set(myFriends.sort()));


//============================
// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };


// let myMap = new Map();
// myMap.set("username", "Osama");
// myMap.set("role", "Admin");
// myMap.set("country", "Egypt");

// turn object to map
// console.log({...myInfo});

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("role"))

//============================
// let theNumber = 100020003000;
// theNumber = "100020003000"
// let mySet = new Set(theNumber);
// mySet.delete('0');
// console.log(mySet)

// let theNumber = 100020003000;

// let mySet = new Set(theNumber.toString().replaceAll('0','1'));
// console.log(mySet)
//============================
// let theName = "Elzero";

// // not an array but gets the output
// let arrFromStr0 = new Set(theName)

// let arrFromStr1 = theName.split("");

// let arrFromStr3 = Array.from(theName);

// let arrFromStr4 = [];
// for(let i = 0 ; i < theName.length; i++){
//     arrFromStr4.push(theName.charAt(i));
// }

//             /*    :-      */
// let arrFromStr5 = [];
// let i = 0;
// while(i < theName.length){
//     arrFromStr5.push(theName.charAt(i));
//     i++;
// }

// let arrFromStr6 = [...theName]

// console.log(arrFromStr6);

//============================
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// chars = chars.sort();
// // index of  first letter
// let index = 0;
// for(let i = 0 ; i < chars.length;i++){
//     if(typeof(chars[i]) === "number"){
//         index++;
//     }
// }
// //replace the number of the index
// chars.copyWithin(0,index,index*2);
// console.log(chars);


//============================
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// let numsThree = numsOne.concat(numsTwo);

// let oneString = numsOne.join(" ");
// let TwoString = numsTwo.join(" ");
// oneString = oneString +" "+ TwoString;
// let numsThree = oneString.split(" ")


// for loop and push 


// let numsThree = new Set(numsOne + numsTwo);
// numsThree.delete(",");

// let numsThree = [...numsOne ,...numsTwo]

//============================
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log([...n1,...n2].length * Math.max(...n2) );
