1//
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector(`[name="js"]`));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("[name=js]")[0]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);

2//
for (i = 0; i < document.images.length; i++)
{
    document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    document.images[i].alt = "Elzero Logo";
}
console.log(document.body.innerHTML)

3//
let dollars = document.querySelector("form input[type=number]");
console.log(dollars)
let result = document.getElementsByClassName("result")[0];
console.log(result)

dollars.oninput = () => {
    if (dollars.value === ""|dollars.value === "0") {result.innerHTML ="{0} USD Dollar = {0} Egyptian Pound" }
    else {
        result.innerHTML = `{${dollars.value}} USD Dollar = {${(dollars.value * (15.6)).toFixed(2)}} Egyptian Pound`;
    }
}

4//
one = document.getElementsByClassName("one")[0];
two = document.getElementsByClassName("two")[0];

tilte1 = one.title;
content1 = one.innerText;

one.setAttribute("title", two.title);
two.title = tilte1;

one.innerText = two.innerText;
two.innerText = `${content1} ${document.getElementsByTagName("div").length}`;

5//
imgs = document.images;
for (i = 0; i < imgs.length; i++){
    if (imgs[i].hasAttribute("alt")===false) {
      imgs[i].alt="Elzero New"
    } else {
      imgs[i].setAttribute("alt", "Old");
    }
}
6//

let results = document.getElementsByClassName("results")[0];
let create=document.querySelector("input[type=submit]")
create.onclick = (e) => {
    e.preventDefault();

    let num = document.querySelector("input[type=number]").value;
    let text = document.querySelector("input[type=text]").value;
    let type = document.querySelector("select").value;

    results.innerHTML = "";

    for (i = 0; i < num; i++) {
        results.innerHTML += `<${type.toLowerCase()} class="box" title="Element" id="id-${i + 1}">${text}</${type.toLowerCase()}>`;
    }
}


