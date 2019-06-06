//ES6 SYNTAX LECTURE 6/6/19

//----------------ES6 or ECMAScript 2015
//European Computer Manufacturers Association Script, the 6th version


//let is a variable available to the block-scope, such as inside a loop
//const is a variable that will not be reassigned


//------------------Spread Syntax

//copy array - we can use mutators without changing the original array
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
var arr2 = [...arr1]
//console.log("1:", arr1, "2", arr2)

arr2.push(9, 10)
//console.log("1:", arr1, "2:", arr2)


//spread operator - can pass a dynamic number of arguments
//create a function that takes in arguments of letters and joins them

function getWord(...letters){
  return letters.join("")
}
//console.log(getWord("H", "i", " ", "t", "h", "e", "r", "e", " ", "C", "h", "a", "r", "l", "i", "e", " ", "C", "l", "a", "s", "s", "!"))


//-------------Arrow Functions (fat arrow functions)
//create a greeter function, refactor to an arrow function

function greeter(name){
  return "Hello, " + name
}
//console.log(greeter("Learn Students"))

greeter = (name) => {
  return "Hello, " + name
}
//console.log(greeter("Learn Students"))

//curly braces can be omitted if there is no code block

greeter = (name) => "Hello, " + name
//console.log(greeter("Learn Students"))


//--------------String Interpolation
//refactor the greeter function with string interpolation

greeter = (name) => `Hello ${name}`
//console.log(greeter("Learn Students"))



//-----------------Objects

let myBook = {
  title: "Hitchhiker's Guide to the Gallaxy",
  author: "Douglas Adams",
  characters: {
    name1: "Arthur Dent",
    name2: "Ford Prefect",
    name3: "Trillian"
  },
  getBook() {return `${this.title} by ${this.author}`}
}
//Dot notation to access an values in an object
//console.log(myBook.characters.name1)
//console.log(myBook.getBook())


//-----------------Object destructuring

//console.log(name1) (This gives an error)

const { name1, name2, name3 } = myBook.characters

//console.log(name1, name2, name3)
//console.log(`${myBook.getBook()} is about ${name1}, ${name2}, and ${name3}.`)
