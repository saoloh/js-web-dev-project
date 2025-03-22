//concatenation challenge
let cardTitle = "Elzero",
  cardDiscreption = "Elzero Web School",
  cardDate = "25/10";
let cardDiv = `<div>
<h3>${cardTitle}</h3>
<p>${cardDiscreption}</p>
<span>${cardDate}</span>
</div>`;
document.write(cardDiv.repeat(4))

//https://elzero.org/javascript-bootcamp-assignments-lesson-from-010-to-017/

//1//
let numberOne = 10, numberTwo = 20
console.log(numberOne+""+numberTwo) // Normal Concatenate => 1020
console.log(typeof(numberOne+""+numberTwo)) // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`) // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)) // Template Literals Way => String
console.log(numberTwo + "\n" + numberOne)
console.log(`${numberTwo}
${numberOne}`)

//2//
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//the solution is to create a div with id=elzero

//3//
console.log("/`I'm In \n\\\\ \nLove \\\\ \"\"\"  \'\'\' \n\+\+ With \+\+\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`")

//4//
let a = 21;
let b = 20;
let ab = `${b}${a}_`.repeat(3)
console.log(ab)
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
console.log(`_${a}_${ab}${b}_`); // _21_2021_2021_2021_20_