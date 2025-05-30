///1///
// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i <= end; i+=start){
//   if (i === exclude) continue;
//   console.log(i);
// }

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

///2///
// let start = 10;
// let end = 0;
// let stop = 3;
// for (let i = start; i >= stop; i--) {
//     if (i < 10)
//     {
//         console.log(`${end}${i}`);
//     }
//     else console.log(`${i}`)
// }

// Output
// 10;
// 09;
// 08;
// 07;
// 06;
// 05;
// 04;
// 03;

///3///
// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let i = start; i <= end; i++) {
//   console.log(i);
//   for (let j = breaker; j < end; j += breaker) {
//     console.log(`--${j}`);
//   }
// }

// Output
// 1
// --2
// --4
// 2
// --2
// --4
// 3
// --2
// --4
// 4
// --2
// --4
// 5
// --2
// --4
// 6
// --2
// --4

///4///
// let index = 10;
// let jump = 2;
// for (;;) {
//     if (index === jump) break;
//     else console.log(index);
//     index -= jump;
// }

// Output
// 10;
// 8;
// 6;
// 4;

///5///
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter = +true;

// for (let i = letter.length; i <friends.length; i++) {
//     if (friends[i][+false] === letter.toUpperCase())
//     {
//         continue;
//     }
//     else console.log(`("${counter++} => ${friends[i]}")`);
// }
// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");

///6///
// let start = 0;
// let swappedName = "elZerO";
// let result = [];
// for (let i = start; i < swappedName.length; i++) {
//     swappedName[i] === swappedName[i].toLowerCase()
//       ? result.push(swappedName[i].toUpperCase())
//       : result.push(swappedName[i].toLowerCase());
// }
// console.log(result.join(""))
// Output
// ("ELzERo");

///7///
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i = start; i < mix.length; i++)
// {
//     if (typeof (mix[i]) === "string" || mix[i]===mix[start]) continue;
//     else console.log(mix[i]);
// }
// Output
// 2;
// 3;
// 4;

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
// let counter = 0;
// let index = 1;
// for (let i = 0; i < myAdmins.length; i++){
//     if (myAdmins[i] === "Stop") break;
//     else counter++;
// }
// document.write(`<div>We Have ${counter} Admins</div>`);
// document.write(`<hr/>`);
// for (let i = 0; i <counter; i++) {
//     document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
//     document.write(`<h3>Team Members:</h3>`);
//     for (let j = 0; j < myEmployees.length; j++) {
        
//         if (myEmployees[j][0] === myAdmins[i][0]) {
//             document.write(`<p>- ${index} ${myEmployees[j]}</p>`);
//             index++;
//         }
//         else continue;
//     }
//     index = 1;
//     document.write(`<hr/>`);
// }