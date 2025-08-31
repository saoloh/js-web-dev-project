//1//
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i;
console.log(ipRe.test(ip))

//2//
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /Os\d*O/g;
console.log(specialNames.match(specialNamesRe));

//3//
let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
console.log(phone.match(phoneRe))

//4//
let re1 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//5//
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re2 = /(\d{2}(\/|\s-\s|\s)){2}(\d{2}|\d{4})/g;

console.log(date1.match(re2)); // "25/10/1982"
console.log(date2.match(re2)); // "25 - 10 - 1982"
console.log(date3.match(re2)); // "25 10 1982"
console.log(date4.match(re2)); // "25 10 82"

//6//
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re3 = /(https?:\/\/)?(www.)?\w+.(com|org|net|info|io)(:.*)?/gi;
    console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re3));
console.log(url4.match(re3));
console.log(url5.match(re3));