//1//
// let num = window.prompt("Print Number From – To", "5-20").split("-");
// for (let i = Math.min(...num); i <= Math.max(...num); i++) {
//     document.write(i + "<br>");
// }

//2//
// setTimeout(popUp,500)
// let PopUp = document.createElement("div");
// PopUp.style.cssText = "background-color: #eee;padding: 20px;text-align: center;width: 300px; margin: 50px auto;border: 1px solid #ccc;position:relative"
// let button = document.createElement("button");
// button.innerHTML = "x";
// button.style.cssText =
//     "background-color:red;width:25px;height:25px;font-size:1.2rem;border-radius:50%;color:white;position: absolute;top:-5px;right:-5px;font-weight:bold;border:none;cursor:pointer;";
// let text = document.createElement("p");
// text.innerHTML = "<h1>Welcome</h1><p>Welcome to Elzero Web School</p>";
// PopUp.appendChild(text);
// PopUp.appendChild(button);
// button.addEventListener("click", () => {PopUp.remove();});
// function popUp() {
//     document.body.appendChild(PopUp);
//  }

//3//
// Div = document.createElement("div");
// Div.innerHTML = "10";
// document.body.appendChild(Div)
// function countDown() {
//     Div.innerHTML -= 1;
//     if (Div.innerHTML === "0") {
//         clearInterval(counter);
//     }
// }
// let counter = setInterval(countDown,1000)

//4//
// Div = document.createElement("div");
// Div.innerHTML = "10";
// document.body.appendChild(Div)
// function countDown() {
//     Div.innerHTML -= 1;
//     if (Div.innerHTML === "5") {
//         window.open("https://elzero.org", "_blank");
//     }
//     if (Div.innerHTML === "0") {
//         clearInterval(counter);
//     }
// }
// let counter = setInterval(countDown,1000)

//5//
Div = document.createElement("div");
Div.innerHTML = "10";
document.body.appendChild(Div);
function countDown() {
    Div.innerHTML -= 1;
    if (Div.innerHTML === "5") {
        window.open("https://elzero.org", "_blank", "width=400,height=500,top=20,left=950");
    }
    if (Div.innerHTML === "0") {
        clearInterval(counter);
    }
}
let counter = setInterval(countDown, 1000);