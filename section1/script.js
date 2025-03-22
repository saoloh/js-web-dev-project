document.write("<h1> salah </h1>");
 let header = document.querySelector("h1");
 header.style.color = 'blue';
 header.style.fontSize = '80px';
 header.style.fontWeight = 'bold';
 header.style.textAlign = 'center';
 header.style.fontFamily = 'Arial;'
 console.log(" %c SAlah %c seddik %c fahmy","color:red; font-size:40px;","color:green; font-size:40px; font-weight:bold","color:blue; font-size:40px")
 console.table(["salah","seddik","fahmy"]);

 console.groupCollapsed("group1");
 console.log("message");
 console.log("message");
 console.groupCollapsed("child group");
 console.log("message");
 console.log("message");
 console.groupCollapsed("child group");
 console.log("message");
 console.log("message");

 console.groupEnd();
 console.groupEnd();
 console.groupEnd();
 console.groupCollapsed("group 2");
 console.log("message");
 console.log("message");