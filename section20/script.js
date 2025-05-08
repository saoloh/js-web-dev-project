
             /*Destructing challenge */
// let chosen = 2;

// let myFriends = [
//     {title: "osama",age: 39, available:true,skills: ["HTml","css"]},
//     {title: "Ahmed",age: 25, available:false,skills: ["python","django"]},
//     {title: "sayed",age: 33, available:true,skills: ["php","larvel"]},
// ];
// let title , age , available , a ;
// if (chosen === 1)
//     {
//     [{title , age , available , skills: [, a]}] = myFriends;
//     console.log(`${title} \n ${age} \n ${available? "": "Not"}available \n ${a}`);
    
// }
//     else if (chosen === 2)
//     {
//     [,{title , age , available , skills: [, a]}] = myFriends;
// console.log(`${title} \n ${age} \n ${available? "": "Not"}available \n ${a} `);

//     } 
//     else if (chosen === 3)
//     {
//     [, ,{title , age , available , skills: [, a]}] = myFriends;
//     console.log(`${title} \n ${age} \n ${available? "": "Not"}available \n ${a}`);

//     }

    //=============================================
//     let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// let [a, , , , e] = myNumbers;
// console.log(a * e); // 5
//=================================================
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// [a,b,c,[d,e,[f,g]]] = mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
//====================================================
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// arr1 = arr1.concat(arr2,arr3);
// console.log(arr1);
// // Write Your Destructuring Assignment Here
// [c, , , , , , , a,b] = arr1;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed
//============================================
// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
//   // Write Your Destructuring Assignment Here
//   let {age: a, working: w, country:c,hobbies:[h1,,h3]} = member;
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
  
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
  
//   console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming
//=======================================
// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//     },
//     Origin: "30 USD",
//     },
//   };
  
//   // Write Your Destructuring Assignment/s Here
//   let {title:t} = game;
//   console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style
//    let {developer: d}=game;
//   console.log(`And I Love ${d} Games`);
//   // And I Love Falcom Games

//    let {"Oath In Felghana":o }=game;
//    let {"Oath In Felghana":[u,j]}=game.releases
//   console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
//   let {"Ark Of Napishtim":a }=game;
//   console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
//   let {US:u_price}=game.releases["Ark Of Napishtim"]
//   console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
//   let {JAP:j_price}=game.releases["Ark Of Napishtim"]
//   console.log(`${a} Price in Japan Is ${j_price}`);
//   // Ark Of Napishtim Price in Japan Is 10 USD
//   let {Origin:or}=game.releases
//   console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD
//==============================================
