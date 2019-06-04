//ARRAYS LECTURE 6/4/2019

var trees = ["palm", "oak", "maple", "redwood", "aspen", "elm"]

//length - tells you the number of items in an array
console.log(trees.length)
    -->> 6

//indexOf() - tells you the index position of a value
console.log(trees.indexOf("oak"))
    -->> 1

//accessing an element
console.log(trees[0])
    -->> "palm"

//---------modifiers/setter methods

//replace an element - will modify the original array
console.log(trees[0] = "ash")
    -->> removes "palm", adds "ash"

//push() - takes an argument and adds it to the end of the array, returns the length of the new array
console.log(trees.push("cedar"))
    -->> 7
//push() permanently modifies the array
console.log(trees)
    -->> ["palm", "oak", "maple", "redwood", "aspen", "elm", "cedar"]

//pop() - removes the item at the end of the array and returns the item
console.log(trees.pop())
    -->> "cedar"
//pop() permanently modifies the array
console.log(trees)
    -->> ["palm", "oak", "maple", "redwood", "aspen", "elm"]

//unshift() - takes in an argument and adds it to the beginning of the array, returns the length of the new array
console.log(trees.unshift("date"))
    -->> 7
//unshift() permanently modifies the array
console.log(trees)
    -->> ["date", "palm", "oak", "maple", "redwood", "aspen", "elm"]

//shift() - removes the item at the beginning of the array and returns the item
console.log(trees.shift())
    -->> "date"
//shift() permanently modifies the array
console.log(trees)
    -->> ["palm", "oak", "maple", "redwood", "aspen", "elm"]


//-----------accessors/getter methods

var name = ["L", "E", "A", "R", "N"]
var sentence = [ " ", "is awesome"]

//concat() - joins two arrays or adds an element to an array
name.concat(sentence)
    -->>["L", "E", "A", "R", "N", " ", "is awesome"]

//concat() does not change the original array, the combination must be saved as a variable
var nameSentence = name.concat(sentence)
console.log(nameSentence)
    -->>["L", "E", "A", "R", "N", " ", "is awesome"]


//join() - returns a string of all the elements in an array
console.log(nameSentence.join())
    -->> L,E,A,R,N, ,is awesome

//join("") - join can take an argument, will return a string of all the elements in an array without the separating commas
console.log(nameSentence.join(""))
    -->> LEARN is awesome

//join() does not change the original array, the combination must be saved as a variable
var learn = nameSentence.join("")
console.log(learn)
    -->> LEARN is awesome


var myString = "Hello LEARN"
//split() - returns an array containing the items in the string
console.log(myString.split())
    -->> ["Hello LEARN"]

var myString = "Hello LEARN"
//split() - returns an array containing the items in the string spliting each letter into individual indexes
console.log(myString.split(""))
    -->> ["H", "e", "l", "l", "o", " ", "L", "E", "A", "R", "N"]

//split() does not change the original array, the combination must be saved as a variable
var myNewString = myString.split("")
console.log(myNewString)
    -->> ["H", "e", "l", "l", "o", " ", "L", "E", "A", "R", "N"]
