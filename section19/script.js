// let font = document.getElementById("font");
// let colors = document.getElementById("colors");
// let size = document.getElementById("size");
// let text = document.querySelector("div.text");

// if (window.localStorage.getItem("font")) {
//     text.style.fontFamily = window.localStorage.getItem("font");
//     font.value = window.localStorage.getItem("font");
// }
// if (window.localStorage.getItem("color")) {
//     text.style.color = window.localStorage.getItem("color");
//     colors.value = window.localStorage.getItem("color");
// }
// if (window.localStorage.getItem("size")) {
//     text.style.fontSize = window.localStorage.getItem("size");
//     size.value = window.localStorage.getItem("size");
// }
// font.addEventListener("change", (e) => {
//     window.localStorage.setItem("font", e.target.value);
//     text.style.fontFamily = e.target.value;
// });

// colors.addEventListener("change", (e) => {
//     window.localStorage.setItem("color", e.target.value);
//     text.style.color = e.target.value;
// });

// size.addEventListener("change", (e) => {
//     window.localStorage.setItem("size", e.target.value);
//     text.style.fontSize = e.target.value;
// });

let inputs = document.querySelectorAll("input");
let select = document.querySelector("select");

inputs.forEach(input => {
    input.addEventListener("blur", e => {
        sessionStorage.setItem(input.type, e.target.value);
})
    if (sessionStorage.getItem(input.type)) {
        input.value = sessionStorage.getItem(input.type);
    }
});

select.addEventListener("change", e => {
    sessionStorage.setItem("track", e.target.value)
});

if (sessionStorage.getItem("track")) {
    select.value=sessionStorage.getItem("track")
}
