// const myPromise  = new Promise((resolve,reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.open("Get","file.json");
//     myRequest.send();
//     myRequest.onload = function () {
//         if(this.readyState === 4 && this.status === 200){
//             resolve(JSON.parse(this.responseText));
//         } else{
//             reject(Error("no data found"));
//         }
       
//     }
// }).then((resolve) => {
//     for(let i = 0 ; i < 5; i++){
//         let div = document.createElement('div');
//         let h3 = document.createElement('h3');
//         let title = document.createTextNode(`${resolve[i].title}`);
//         h3.appendChild(title);
//         let p = document.createElement('p');
//         let description = document.createTextNode(`${resolve[i].description}`);
//         p.appendChild(description);
//         div.appendChild(h3);
//         div.appendChild(p);
//         document.body.appendChild(div);
//         console.log(div);
//     }
    
// })
//===================================
// fetch("file.json")
//     .then((result) => {
//         let myData = result.json();
//         return myData;
//     })
//     .then((result) => {
//         for(let i = 0 ; i < 5; i++){
//             let div = document.createElement('div');
//             let h3 = document.createElement('h3');
//             let title = document.createTextNode(`${result[i].title}`);
//             h3.appendChild(title);
//             let p = document.createElement('p');
//             let description = document.createTextNode(`${result[i].description}`);
//             p.appendChild(description);
//             div.appendChild(h3);
//             div.appendChild(p);
//             document.body.appendChild(div);
//             console.log(div);
//         }
//     })