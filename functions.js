//write diagram on the whiteboard

//psuedo code!!

// Write a function called peanut butter that returns jelly

//declare a function called peanut peanutButter

//takes in no args
function peanutButter(){
    //return the word jelly
    return "Jelly"
}

var peanutFunction = peanutButter()

console.log(peanutFunction)



// // create a function greeting that takes in a name and returns "Hello (name).  How are you today?"
// PSEUDO CODE

//declare function called helloName
//takes 1 arg. which is a name1

var name1 = "Damon"
var name2 = "Evan"
var name3 = "Rachel"

function helloName(name){
    //returns "Hello" plus the name passed through the function.
    return "Hello " + name
}

//call function - console.log
console.log(helloName(name1))
console.log(helloName(name2))
console.log(helloName(name3))





// Write a function called trafficLight  that takes in a variable and returns "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// PSEUDO CODE

//declare 3 variables - colors
var color1 = "red"
var color2 = "yellow"
var color3 = "green"

//declare function called trafficLight

function trafficLight(color){
    //if/else to check color
    //return phrase that matches the color
    if(color === "red"){
        return "stop"
    } else if (color === "yellow"){
        return "slow down"
    } else {
        return "go"
    }
}

//call function with test cases - console.log
console.log(trafficLight(color1))
console.log(trafficLight(color2))
console.log(trafficLight(color3))


// Write a function called trafficLight  that takes in a variable and returns "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// PSEUDO CODE

//declare 3 variables - colors
var color1 = "red"
var color2 = "yellow"
var color3 = "green"

//declare function called trafficLight

function trafficLight(color){
    var response = ""
    //if/else to check color
    //return phrase that matches the color
    if(color === "red"){
        response = "stop"
    } else if (color === "yellow"){
        response = "slow down"
    } else {
        response =  "go"
    }
    return response
}

//call function with test cases - console.log
console.log(trafficLight(color1))
console.log(trafficLight(color2))
console.log(trafficLight(color3))


//Write a function that takes in two strings and returns which string is longer.
// // PSEUDO CODE



//think about edge cases
// // Write a function called peanut butter that returns jelly.

// //create a function called peanutButter
// function peanutButter(){
//     //return the string "jelly"
//     return "jelly"
// }


//call my function
// console.log(peanutButter())


//
// // create a function greeting that takes in a name and returns "Hello (name).  How are you today?"
// PSEUDO CODE



// create a function called greeting
//take in a name as an argument
// function greeting(name){
//     //return the string hello + the specific name in the arguments + how are you today?
//     return "Hello " + name + ". How are you today?"
// }

//function call

// console.log(greeting("Sarah"))




// Write a function called trafficLight  that takes in a variable and returns "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// PSEUDO CODE

//create a function called trafficLight that takes an argument

// var light1 = "green"
// var light2 = "yellow"
// var light3 = "red"
// var light4 = 123
//
//
// function trafficLight(light){
    // if / else statement for conditions
    //return instructions
//     if(light === "green"){
//         return "go"
//     } else if(light === "yellow"){
//         return "slow down"
//     } else if (light === "red"){
//         return "stop"
//     } else {
//         return "please enter red, green or yellow"
//     }
// }


//function call
// reminder to check all conditions
// reminder to think edge cases

// console.log(trafficLight(light1));
// console.log(trafficLight(light2));
// console.log(trafficLight(light3));
// console.log(trafficLight(light4));

//
//
//
//
// //Write a function that takes in two strings and returns which string is longer.
// // // PSEUDO CODE
//
// //create a function called longerString that takes in two arguments
//
//
//
// function longerString(name1, name2){
//     //if / else statement for conditions
//     if(name1.length > name2.length){
//         return name1 + " is greater than " + name2
//     } else if (name2.length > name1.length){
//         return name2 + " is greater than " + name1
//     } else if (name1.length === name2.length){
//         return name1 + " and " + name2 + " are the same length."
//     } else {
//         return "please enter a string"
//     }

// }

//return which ever string is longer

//function call

// console.log(longerString("matt", "samuel"));
// console.log(longerString("leonardo", "jim"));
// console.log(longerString("jim", "tim"));
// console.log(longerString("3", "sally"));

//think about edge cases







// //write a function that takes a number as an argument and returns "even" or "odd".  Account for edge cases =(when someone tests something other than a number)
// // PSEUDO CODE


// var num1 = 3
// var num2 = 5
// var num3 = 10

//Write a function that takes in 2 numbers and returns whether the first number is greater than, less than or equal to the second number.
// // PSEUDO CODE



// var number1 = 784
// var number2 = 2934
//

//



// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form of the noun, if necessary.
// pluralizer(5, cat) should return "5 cats" pluralizer(1, dog) should return "1 dog" because the number one does not require a plural noun
//
// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".
//
// function pluralizer(number, noun){
//     if(number === 1 || noun === "sheep" || noun === "species"){
//         return number + noun
//     } else if (number > 1 && noun === "child"){
//         return number + "children"
//     } else if (number > 1 && noun === "person"){
//         return number + "people"
//     } else if (number > 1 && noun === "goose"){
//         return number + "geese"
//     } else if (number > 1){
//         return number + noun + "s"
//     } else {
//         return "that's not a number"
//     }
// }
//
// console.log(pluralizer(1, "child"))
// console.log(pluralizer(2, "child"))
// console.log(pluralizer(1, "goose"))
// console.log(pluralizer(2, "goose"))
// console.log(pluralizer(1, "cat"))
// console.log(pluralizer(2, "cat"))
// console.log(pluralizer(1, "person"))
// console.log(pluralizer(2, "person"))
// console.log(pluralizer("two", "child"))

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function pluralizer(number, name){
//     if(number > 1 && name === "sheep" || number > 1 && name === "species"){
//         return number + name
//     } else if (number > 1 && name === "child"){
//         return number + "Children"
//     } else if (number > 1 && name === "person"){
//         return number + "people"
//     } else if (number > 1 && name === "goose"){
//             return number + "geese"
//     } else if (number === 1){
//         return number + name
//     } else {
//         return number + name + "s"
//     }
// }
//
// console.log(pluralizer(1, "cat"))
// console.log(pluralizer(2, "cat"))
// console.log(pluralizer(1, "goose"))
// console.log(pluralizer(2, "goose"))
// console.log(pluralizer(1, "child"))
// console.log(pluralizer(2, "child"))
// console.log(pluralizer(1, "person"))
// console.log(pluralizer(2, "person"))
// console.log(pluralizer(1, "species"))
// console.log(pluralizer(2, "species"))





// typeof challenge
//
// wording of pluralizer (make sure to add that user will input a number and a singular noun)
//
// langauge challenge - default being english

// reword magic8 ball "variable set to question..."
