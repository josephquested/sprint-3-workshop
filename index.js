// DATA TYPES //

name = "JO$EPH"                // string
age = 25                       // int
isCool = true                  // bool
children = ["addie", "dexter"] // array

// BUILDING AN OBJECT //

joseph = {
  name: name,
  age: age,
  isCool: isCool,
  children: children
}

// INTRO TO FUNCTIONS AND VARIABLES //

function printName(person) {
    console.log(person.name)
}

function returnAge(person) {
  return person.age
}

// FLOW CONTROL IN FUNCTIONS //

function decideIfPersonIsCool(person) {
  if (person.cool) {
    console.log(person.name + " is cool")
  } else {
    console.log(person.name + " is not cool")
  }
}

// INIT //

console.log("welcome to sprint 3!")
