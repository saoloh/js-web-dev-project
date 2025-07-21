
    //1
    // links = document.links;
    // for (let i = 0; i < links.length; i++) {
    //     if (
    //         links[i].classList.contains("open") &&
    //         links[i].innerText === "Elzero"
    //     ) {
    //         links[i].click();
    //     }
    // }

    //2
    // let add=document.querySelector("input.classes-to-add")
    // let remove = document.querySelector("input.classes-to-remove")
    // let current=document.querySelector("div[title=Current]")
    // let list = document.querySelector("div.classes-list > div");

    // function showClass() {
    //     list.innerHTML = "";
    //     let sorted = current.classList.value.split(" ").sort();
    //     if (sorted.length === 0) {
    //         list.innerHTML = "No Classes To Show";
    //         return;
    //     }
    //     for (i = 0; i < sorted.length; i++)
    //     {
    //         list.innerHTML += `<span>${sorted[i]}</span>`;
    //     }
    // }

    // add.addEventListener("blur", function () {
    //     let classes = add.value.toLowerCase().trim().split(" ");
    //     for (let i = 0; i < classes.length; i++){
    //         if(add.value!=="") {current.classList.add(classes[i])}
    //     }
    //     showClass()
    //     console.log(current.classList)
    //     add.value=""
    // })

    // remove.addEventListener("blur", function () {
    //     let classes = remove.value.toLowerCase().trim().split(" ");
    //     for (let i = 0; i < classes.length; i++){
    //         if(remove.value!=="") {current.classList.remove(classes[i])}
    //     }
    //     showClass()
    //     console.log(current.classList)
    //     remove.value=""
    // })

    //3
    // let div = document.querySelector("div.our-element")
    // let p = document.querySelector("p")
    // p.remove();
    // let firstDiv = document.createElement("div")
    // firstDiv.className = "start";
    // firstDiv.setAttribute("title", "Start Element");
    // firstDiv.setAttribute("data-value", "Start");
    // firstDiv.innerText = "Start";
    // let lastDiv = document.createElement("div")
    // lastDiv.className = "end";
    // lastDiv.setAttribute("title", "End Element");
    // lastDiv.setAttribute("data-value", "End");
    // lastDiv.innerText = "End";
    // div.after(lastDiv)
    // div.before(firstDiv)
    //4
    // console.log(document.querySelector("div").lastChild.textContent.trim());
    //5
    // document.addEventListener("click", function (e) {
    //     console.log(`this is ${e.target.tagName}`)
    // })

//Dom Challenge
    let style = document.createElement("style");
    style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
    document.head.appendChild(style);

    document.body.style.cssText = "margin:0;font-family:Tahoma,Arial;";

    let header = document.createElement("header");
    header.classList.add("head");
    header.style.cssText =
        "padding:20px; display:flex; justify-content:space-between; align-items:center";

    let logo = document.createElement("span");
    logo.innerHTML = "Elzero";
    logo.style.cssText =
        "color:rgba(45, 170, 101, 1);font-weight:bold;font-size:20px";
    header.append(logo);
    let links = document.createElement("ul");
    links.style.cssText = "list-style:none;display: flex";

    let words = ["Home", "About", "Service", "Contact"];
    for (let i = 0; i < words.length; i++) {
        let link = document.createElement("li");
        link.innerHTML = words[i];
        link.style.marginInline = "5px";
        link.style.color = "rgb(144, 143, 147)";
        links.append(link);
    }
    header.append(links);
    document.body.append(header);

    let content = document.createElement("section");
    content.className = "content";
    content.style.cssText =
        "display:flex;flex-wrap:wrap;padding:20px;gap:20px;justify-content:center;background-color:rgb(236, 236, 236)";
    for (i = 1; i < 16; i++) {
        let product = document.createElement("div");
        product.style.cssText =
            "text-align:center;padding:20px;width:calc((100% - 40px) / 3);background-color:white;border:1px solid rgb(211,211,211);border-radius:6px;color:rgb(144, 143, 147)";
        let num = document.createElement("span");
        num.innerHTML = i;
        num.style.cssText =
            "display:block;font-size:40px;padding:10px;color:black";
        product.append(num);
        let txt = (document.createTextNode = "Product");
        product.append(txt);
        content.append(product);
    }
    document.body.append(content);

    let footer = document.createElement("footer");
    footer.style.backgroundColor = "rgb(34, 169, 109)";
    footer.style.color = "white";
    footer.style.padding = "20px";
    footer.style.fontSize = "20px";
    footer.style.textAlign = "center";
    footer.innerHTML = "Copyright 2021";
    
    document.body.append(footer);
