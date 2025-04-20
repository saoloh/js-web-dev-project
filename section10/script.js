// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i <= end; i+=start){
//     if(i !== 40){
//         console.log(i);
//     } else{
//         continue;
//     }
// }
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
//============================================
// let start = 10;
// let end = 0;
// let stop = 3;
// mainLoop:for(let i = start; i >= stop;i--){
//     if(i < 10){
//         console.log(end + i);
//     } else{
//         console.log(i);
//     }
    
// }
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
//======================================
// let start = 1;
// let end = 6;
// let breaker = 2;
// for(let i = start ; i <= end ; i++){
//     console.log(i);
//     console.log("--",breaker);
//     console.log("--", end - breaker );
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
//==========================
// let index = 10;
// let jump = 2;

// for (;;) {
//     console.log(index)
//     index-= jump;
//   if(index ===(jump) )break;
// }

// ==================================
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// for(let i = letter.length; i < friends.length;i++){
//     if(friends[i][letter.length - letter.length ] === letter.toUpperCase()){
//         continue;
//     } else{
//         console.log(`"${i} => ${friends[i]}"`);
//     }
// }
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// ==================================
// let start = 0;
// let swappedName = "elZerO";
// for(let i = start; i < swappedName.length; i++){
//     if(swappedName.charAt(i)  ){//ASCII CODE
//         console.log(swappedName.charAt(i).toUpperCase)
//     } else{
//         console.log(swappedName.charAt(i).toLowerCase)
//     }
// }
// // Output
// "ELzERo"
//===============
// let start = 0;

// let mix = [1, 2, 3, "A", "B", "C", 4];
// for(let i = start; i < mix.length; i++){
//     if(i === start){
//         continue;
//     }
//     if(typeof(mix[i]) === typeof(mix[start])){
//         console.log(mix[i]);
//     }


// }
// Output
// 2
// 3
// 4