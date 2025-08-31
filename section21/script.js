//1//
let mySet = new Set([10]);
mySet.add(20);
mySet.add(mySet.size);
console.log(mySet)
console.log([...mySet][mySet.size - 1])
console.log("#".repeat(50));
//2//
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(Array.from(new Set(myFriends)).sort())
console.log("#".repeat(50));

//3//
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));
console.log("#".repeat(50));

//4//
let theNumber = 100020003000;

console.log(
    +Array.from(new Set([...theNumber.toString()]))
    .sort()
    .join("")
);
console.log("#".repeat(50));

//5//
let theName = "Elzero";

console.log(Array.from(theName));
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(theName.split(""));
console.log(Object.values(theName));
console.log("#".repeat(50));

//6//
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(chars)

let nums = chars.filter((e) => typeof e === "number");
let letters = chars.filter((e) => typeof e === "string");

sortedChars = nums.concat(letters);

console.log(sortedChars)
console.log(sortedChars.copyWithin(0, nums.length, nums.length * 2));
console.log("#".repeat(50));

///7///
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log("#".repeat(50));

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);
console.log("#".repeat(50));

///8///
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(eval(n1.join("+")) * n2.length);