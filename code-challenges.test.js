// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { array, describe } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentenceGenerator", () => {
  it("takes in an array of objects and returns an array with a sentence about each person, name capitalized", () => {
    expect(sentenceGenerator(people)).toEqual(['Ford Prefect is a hitchhiker.', 'Zaphod Beeblebrox is president of the galaxy.', 'Arthur Dent is a radio employee.'])
  })
})

// b) Create the function that makes the test pass.

// create a function that takes in an array of objects and returns an array of sentences about the person with the name capitalized
// input: an array of objects
// output: an array of sentences about people using information from the objects, with names capitalized
// first, map through the array so that the output is a new array
// split the name key using .split(' ') so that the first and last name become their own elements
// reference the appropriate indexes on the following steps to ensure that the proper characters are being modified
// use .toUpperCase() to capitalize the first letter of both the first and last name
// use .slice() to ensure that the characters that go along with the capitalized first letter are added back
// use string interpolation to create sentences out of the object values, and dot notation to call on the object values

const sentenceGenerator = (arr) => {
  return arr.map((obj) => {
    let name = obj.name.split(' ')
    let firstName = name[0][0].toUpperCase() + name[0].slice(1)
    let lastName = name[1][0].toUpperCase() + name[1].slice(1)
    return `${firstName} ${lastName} is ${obj.occupation}.`
  })
}

console.log(sentenceGenerator(people))
// output: ['Ford Prefect is a hitchhiker.', 'Zaphod Beeblebrox is president of the galaxy.', 'Arthur Dent is a radio employee.']


// note: this was really challenging for me, and i referenced several resources in order to reach this code. it took me a bit to understand why this worked, but once it clicked the whole thing made so much more sense. originally i couldn't understand why .slice() was being used here, but now i realize it is what is ensuring the rest of the name is tacked on to the appropriate capitalized letter.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("onlyRemainders", () => {
  it("takes in a mixed data array and returns an array of only the remainders of the numbers when divided by three", () => {
    expect(onlyRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(onlyRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.

// create a function that takes in a mixed data array and returns an array of only the remainders of the numbers when divided by three
// input: a mixed data array
// output: an array with the remainders of the numbers when divided by three 
// first, filter through the array so that only the numbers are returned in the subset
// then, map over that subset to touch each value and use the module operator to retrieve the remainder

const onlyRemainders = (arr) => {
  let filteredArray = arr.filter(num => typeof num === "number")
  return filteredArray.map(num => num % 3)
}

console.log(onlyRemainders(hodgepodge1))
// output: [2, 0, -1, 0]
console.log(onlyRemainders(hodgepodge2))
// output: [2, 1, -1]

// just noting here that i am SO happy with how writing this code went. i felt like this was one of the first times in a while where the challenge didn't require a boat load of research, and having the knowledge to create this code from scratch is a victory i think i really needed. 

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubedSum", () => {
  it("takes in an array of numbers, and returns the sum of those numbers cubed", () => {
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// create a function that takes in an array of numbers and returns the sum of all the numbers cubed
// input: an array of numbers
// output: sum of those numbers cubed
// first, map over the array and cube the numbers. 
// then, use .reduce() to get the sum of the newly cubed numbers

const cubedSum = (arr) => {
  let mappedArray = arr.map(num => Math.pow(num, 3))
  return mappedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(cubedSum(cubeAndSum1))
// output: 99
console.log(cubedSum(cubeAndSum2))
// output: 1125

// note: for this one, i researched the .reduce() method to use in this code. i already knew it would need to be mapped, so learning about reduce made this all come together very neatly in my opinion. the one part of the .reduce() method that confuced me at first was the accumulator and currentValue syntax and the 0, but after reading more on it i am understanding the 0 as what is looking out for an empty array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce