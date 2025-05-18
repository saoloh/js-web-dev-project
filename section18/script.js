// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regex = /\d{4}:\w+\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g;

// console.log(regex.test(ip));
//=================================
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let regex =/\b(Os)\d*(o)\b/ig;
// console.log(specialNames.match(regex));

//=================================
// let phone = "+(995)-123 (4567)";
// let regex =/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
// console.log(phone.match(regex));

//=================================
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// http > match https
// s? s may be or may not be
// : match :
// \/\/ match //
// (?:  > non-capturing group
//[-\w]+  > mathch: - and word 1 or more
//\.  >match: a dot
// (?:[-\w]+\.)? all this matched 0 or 1 

// ([-\w]+) -w or -ww or -www or -wwwww
// \.  > .
// \w+ > x or xx or xax or xaaxas
// non capturing (?:\.\w+)? .cas all this 0 or 1
// \/? / 0 or 1
// . any character except newline
//*
//=================================
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}(\/|\s)(\d{2}|-\s)(\/|\d|\s)(\d{4}|\d{2}|\d\s-\s\d{4})/g; // Write Pattern Here

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"
//=================================
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(\w{3}.)?\w+(.org)(:(\w+))?/; // Write Your Pattern Here

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));