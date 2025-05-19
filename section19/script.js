

// class Car {
//     constructor(name,model,price){
//     this.n = name;
//     this.m = model;
//     this.p = price;
//     }
//     run(){
//         return `Car Is Running Now`;
//     }
//     stop(){
//         return `Car Is Stopped`;
//     }
// }


// let myfCar = new Car('BMW',1990,500000);
// let mysCar = new Car('Ferrari',1999,600000);
// let mytCar = new Car('Porche',2000,700000);

// console.log(`Car one is ${myfCar.n} And Model is ${myfCar.m} and price is ${myfCar.p}`);
// console.log(myfCar.run());
//============================================
// class Phone {
//     constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//     }
// }

//   // Write Tablet Class Here
// class Tablet extends Phone{
//     constructor(name,serial,price,size){
//         super(name,serial,price);
//         this.s = size || `Unknown`;
//     }
//     fullDetails(){
//         return `${this.name} serial is ${this.serial} and size is ${this.s} `
//     }
// }
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);
  
//   console.log(`${TabletOne.fullDetails()}`);
//   // iPad Serial is 100200300 And Size Is 12.9
  
//   console.log(`${TabletTwo.fullDetails()}`);
//   // Nokia Serial is 350450650 And Size Is 10.5
  
//   console.log(`${TabletThree.fullDetails()}`);
//   // LG Serial is 250450650 And Size Is Unknown
//============================================
// Edit The Class
// class User {
//     #c;
//     constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//     }
//     get showData(){
//         if(/\d{4}-\d{4}-\d{4}-\d{4}/g.test(this.#c) ){
//             return this.#c;    
//         }
//         else{
//         return this.#c.toString();    
//         }
//     }

// }
  
//   // Do Not Edit Anything Below
  
//   let userOne = new User("Osama", "1234-5678-1234-5678");
//   let userTwo = new User("Ahmed", "1234567812345678");
//   let userThree = new User("Ghareeb", 1234567812345678);
  
//   console.log(userOne.showData);
//   // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
//   console.log(userTwo.showData);
//   // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
//   console.log(userThree.showData);
//   // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
//   console.log(userOne.c); // Prevent Accessing To Card Property Here
//   // Undefined
// console.log(/\d{4}-\d{4}-\d{4}-\d{4}/g.test("1234-5678-1234-5678"))
//============================================
// // Write Your Code Here

// String.prototype.addLove = function(){
//     return ` i love elzero web shcool`
// }
// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School
//============================================
// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };

//   // Write Your Code Here
// Object.defineProperties(myObj,{
//     id:{
//         enumerable:false,
//     },
//     score:{
//         writable:false,
//     },
// })
// delete myObj.country;
// myObj.score = 500;

// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }
// console.log(myObj);
//============================================


