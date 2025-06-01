///1///
function sayHello(theName, theGender) {
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    } else console.log(`Hello ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

///2///
function calculate(firstNum, secondNum, operation = "add") {
    if (secondNum === undefined || firstNum === undefined) {
        console.log("Second Number Not Found");
    } else {
        switch (operation) {
            case "subtract":
                console.log(firstNum - secondNum);
                break;

            case "multiply":
                console.log(firstNum * secondNum);
                break;

            case "add":
                console.log(firstNum + secondNum);
                break;
        }
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

///3///
function ageInTime(theAge) {
    if (theAge > 100 || theAge < 10) {
        console.log("Age Out Of Range");
        return;
    }

    let months = theAge * 12;
    let days = theAge * 365;
    let weeks = Math.round(days / 7);
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    console.log(`your age is ${theAge} years`)
    console.log(`your age is ${months} months`)
    console.log(`your age is ${weeks} weeks`)
    console.log(`your age is ${days} days`)
    console.log(`your age is ${hours} hours`)
    console.log(`your age is ${minutes} minutes`)
    console.log(`your age is ${seconds} seconds`)
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

///4///
function checkStatus(a, b, c) {
    let inputs = [a, b, c];
    let age, name, hire;
    for (let i = 0; i < inputs.length; i++) {
        typeof inputs[i] === "string"
          ? (name = inputs[i])
          : typeof inputs[i] === "number"
          ? (age = inputs[i])
          : typeof inputs[i] === "boolean" && inputs[i] === true
          ? (hire = "You Are Available For Hire")
          : typeof inputs[i] === "boolean" && inputs[i] === false
          ? (hire = "You Are Not Available For Hire")
          : console.log("Invalid data Input");
    }
    console.log(`Hello ${name}, Your Age Is ${age}, ${hire}`);

}

// Solution By Osama Elzero
// function checkStatus(a, b, c) {
//   const params = [a, b, c];
//   const name = params.find((item) => typeof item === "string");
//   const age = params.find((item) => typeof item === "number");
//   const status = params.find((item) => typeof item === "boolean");
//   return `Hello ${name}, Your Age Is ${age}, You Are ${
//     status ? "Available" : "Not Available"
//   } For Hire`;
// }

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

///5///
function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`);
    };
    document.write(`</select>`);
}
createSelectBox(2000, 2021);

///6///
function multiply(...numbers) {
    result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof (numbers[i]) === "number") result *= parseInt(numbers[i]);
    }
    console.log(`Output => ${result}`);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
multiply(100.5, 10, 20, 30, 40, 50, 10, "A", false, 25);
