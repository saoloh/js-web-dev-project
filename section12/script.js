// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("div.element"));
// console.log(document.querySelector("div#elzero"));
// console.log(document.querySelectorAll(".element"));
// console.log(document.querySelectorAll("div.element"));
// console.log(document.querySelectorAll("body > .element"));
// console.log(document.querySelectorAll("body > div.element"));
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.div);
//=====================================
// let photo = document.getElementsByTagName("img");
// let newArr = Array.from(photo);
// newArr.forEach(element => {
//     element.setAttribute("sec",`https://elzero.org/wp-content/themes/elzero/imgs/logo.png`);
//     element.setAttribute("alt",`Elzero Logo`);
// });
//==================================
// let ele = document.createElement("div");
// let attr = document.createAttribute("class");
// attr.value = "style";
// ele.setAttributeNode(attr);
// let text = document.createTextNode("hard");
// ele.appendChild(text);
// document.body.appendChild(ele);
//===============================

// for(let i = 0 ;i <100 ; i++){
//     let product = document.createElement("div");
//     product.classList.add("product");
//     let head = document.createElement("h3");
//     head.textContent = "text";
//     let par = document.createElement("h3p");
//     par.textContent = "text";
//     document.body.appendChild(product);
//     product.appendChild(head);
//     product.appendChild(par);
// }
//====================================================
// //get the div you want to display on
// let outputDiv  = document.querySelector('.result');
// //get the  html collection inputFourm

// let inputFourm = document.getElementsByTagName('input');
// console.log(inputFourm[0])
// inputFourm[0].addEventListener("input",()=>{
// outputDiv.innerHTML  = `{${inputFourm[0].value}} USD Dollar = {${inputFourm[0].value*50}} Egyptian Pound`
// })

// //change info in the outputDiv

//==================================================
// let firstDiv  = document.querySelector(".one");
// let secondtDiv  = document.querySelector(".two");

// let firstDivText = firstDiv.childNodes[0].data;
// let secondtDivText = secondtDiv.childNodes[0].data;

// firstDiv.childNodes[0].data = `${secondtDivText}`;
// secondtDiv.childNodes[0].data = `${firstDivText} 2`;

// let titleOne = firstDiv.getAttribute("title");
// let titleTwo = secondtDiv.getAttribute("title");

// firstDiv.title = titleTwo;
// secondtDiv.title = titleOne;
//=============================================
// let imageshtmlnodelist = Array.from(document.images);


// imageshtmlnodelist.forEach((ele)=>{

//     if(ele.hasAttribute("alt")){
//         ele.alt = "old";
//     } else{
//         ele.setAttribute("alt","Elzero New");
//     }
// })
//=========================================
// number of ele
// let form = document.querySelector("form");

// let formInput = Array.from(document.querySelectorAll('.input'));

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     for (let i = 0 ; i < formInput[0].value ; i++){
//         let div = document.createElement("div");
//         div.className = "gridDiv";
//         let text = document.createTextNode(formInput[1].value);
//         div.appendChild(text);
//         document.body.appendChild(div);
        
//     }
// })







// //removve old ele


// //loop that creats the ele type 
// //num of time 
// //class
// //id increment
// // text 
// // style 

