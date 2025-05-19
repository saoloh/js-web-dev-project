// let myBirthDate = new Date('6-19-2004');
// let dateNow = Date.now();
// let diff = dateNow - myBirthDate;

// console.log(diff / 1000);
// console.log(diff / 1000 /  60);
// console.log(diff / 1000 /  60 /60);
// console.log(diff / 1000 /  60 /60 /24) ;
// console.log(diff / 1000 /  60 /60 /24 /30) ;
// console.log(diff / 1000 /  60 /60 /24 /365) ;
//====================================
// let dateNow = new Date();
// dateNow.setFullYear(1980,0,1);
// dateNow.setHours(0,0,1);
// console.log(dateNow);
//====================================
// let dateNow = new Date();
// dateNow.setMonth(-1);
// console.log(dateNow);
// console.log(dateNow.getMonth(-1));
// console.log(dateNow.getDay());
//====================================
// let myBirthDate = new Date('6-19-2004');
// let myBirthDate = new Date(2004,6,19);
// let myBirthDate = new Date(2004,6,19,0,0,0);
// console.log(myBirthDate)
//====================================
//time now 
// let timeNow = new Date();

// //operation

// for(let i = 0 ; i < 100 ; i++){
//   console.log(i);
// }

// //time after
// let timeThen = new Date();
// console.log(timeThen -  timeNow);
//====================================
// function* gen(){
//   let i =14;
//   let x = 0 ; 
//   while(true){
//     yield i;
//     i += 140 + x ;
//      //154 //
//     x+=200;
//   }
  
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
//====================================

// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here

// let mySet = new Set();
// for(let value of genNumbers()){
//   mySet.add(value)
// }
// for(let value of genLetters()){
//   mySet.add(value)
// }
// function* genAll(){
//   yield* mySet;

// }
// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}