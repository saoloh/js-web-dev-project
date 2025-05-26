// let myRequest = new XMLHttpRequest();
// myRequest.open("Get","data.json");
// myRequest.send();
// myRequest.onreadystatechange  = function () {
//     console.log(this.responseText);
// }
//===========================
// let myRequest = new XMLHttpRequest();
// myRequest.open("Get","data.json");
// myRequest.send();
// myRequest.onreadystatechange  = function () {
//     let mainData = JSON.parse(this.responseText);
//     for(let i = 0 ; i < mainData.length ; i++){
//         // the fist i is for index because our objects are in an array 
//         mainData[i][i].section= "all";
//         console.log(mainData[i])
//     }
//     let updatedData = JSON.stringify(mainData);
//     console.log(updatedData);
// }
//===========================
let myRequest = new XMLHttpRequest();
myRequest.open("Get","data.json");
myRequest.send();
myRequest.onreadystatechange  = function () {
    let mainData = JSON.parse(this.responseText);
    for(let i = 0 ; i < mainData.length ; i++){
        // the fist i is for index because our objects are in an array 
        mainData[i][i].section= "all";
        console.log(mainData[i])
    }
    let updatedData = JSON.stringify(mainData);
    for(let i = 0 ; i < mainData.length ; i++){
        let div =  document.createElement("div");
        div.setAttribute("id", "data");

        let h2 = document.createElement("h2");
        h2.innerHTML =`Title ${i + 1}`;
        div.appendChild(h2);

        let p1 = document.createElement("p");
        p1.innerHTML = `Article Number ${ i + 1} Body`;
        div.appendChild(p1)

        let p2 = document.createElement("p");
        p2.innerHTML = `Author  ${mainData[i][i].writerName}`;
        div.appendChild(p2)

        let p3 = document.createElement("p");
        p3.innerHTML = `Category  ${mainData[i][i].section}`;
        div.appendChild(p3)

        document.body.appendChild(div);
    }
}