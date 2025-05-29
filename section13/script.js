let inputAddClass = document.querySelector(".classes-to-add");
let inputRemoveClass = document.querySelector(".classes-to-remove");

let div = document.querySelector(".classes-list div");



inputAddClass.onblur = function (){
    let text = inputAddClass.value;
    if(text.split(" ").length > 1){
        let arr = text.toLowerCase().split(" ");
        for(let i = 0 ; i < text.split(" ").length -1 ; i++){
        let divClass = document.createElement('div');
        let textDivClass = document.createTextNode(arr[i]);
        divClass.appendChild(textDivClass);
        div.appendChild(divClass);
        }
    }
    let divClass = document.createElement('div');
    let textDivClass = document.createTextNode(text.toLowerCase());
    divClass.appendChild(textDivClass);
    div.appendChild(divClass);

}


inputRemoveClass.onblur = function (){
    let text = inputRemoveClass.value;
    let e  = Array.from(document.querySelectorAll(".classes-list div div"));
    if (e.length  === 0){
        console.log("no classes");
    }
    for(let i =0 ; i < e.lenght ; i++){
        if(text.toLowerCase() === e[i] ){
            e[i].remove();
        }
    }
}
//==============================================
// let par = document.getElementsByTagName("p");
// let div = document.querySelector(".our-element");



// par[0].remove();
// let start  = document.createElement("div");
// start.classList.add("start");
// start.setAttribute("title","Start Element");
// start.setAttribute("data-value","Start");
// start.textContent = "start";
// div.before(start);

// let end  = document.createElement("div");
// end.classList.add("end");
// end.setAttribute("title","end Element");
// end.setAttribute("data-value","end");
// end.textContent = "end";
// div.after(end);
//============================================
// let span = document.getElementsByTagName("span");

// console.log(span[0].nextSibling.nextSibling.nextSibling);
//=========================================

// document.addEventListener('click',function (e){
// console.log(e.target.nodeName);
// })
