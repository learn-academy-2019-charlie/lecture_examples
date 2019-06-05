
//create a function that takes in a word(string) and returns the word with the first letter capitalized.


//declare a function call capFirst

//take an argument string

//return argument with first letter capitalized

//call and test function - console log

function capFirst(word){
    var newWord = word.charAt(0).toUpperCase() + word.substring(1)
    return newWord
}

console.log(capFirst("hello"))


//Create a function that takes in an array and returns a NEW array with all numbers multiplied by 2.

//declare a function mult2

//takes in an array

//returns a NEW array with all values mult by 2

//call function - log

var arr1 = [1, 7, 10, 3, 5, 6]

function mult2(arr){
    var newArr = []
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i] * 2)
    }
    return newArr
}

console.log(mult2(arr1))



//Create a function that takes in an array and returns a NEW array with only the odd numbers.

//declare a var of a test array

//declare a function onlyOdd

//takes an array as an argument

//returns a NEW array with only odd numbers

//call the function - log

var testArr = [3, 2, 1, 10, 9, 15, 7]
// expected output = [3, 1, 9, 15, 7]

function onlyOdd(arr){
    var newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(onlyOdd(testArr));

//Create a function that takes in an array of strings and returns a new array of  strings that are only at the even indexes.

//declare a variable - array of strings

//declare a function onlyEvenIndex

//takes an array as an argument

//returns new array with only even index values

//call function - log


var testWords = ["bye", "tomorrow", "yall", "no", "see", "the", "you", "a", "later"]

function onlyEvenIndex(arr){
    var newArr = []
    for(let i =0; i<arr.length; i++){
        if(i % 2 === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(onlyEvenIndex(testWords));












//create a function that takes in a word(string) and returns the word with the first letter capitalized.

// function capWord(word){
//     var newWord = word.charAt(0).toUpperCase() + word.substring(1)
//     return newWord
// }
//
//
// console.log(capWord("alpha2019"))



//Create a function that takes in an array and returns a NEW array with all numbers multiplied by 2.
//
// var testArr = [5, 6, 3, 4, 15]
//
//
// function mult2(array){
//     var newArr = []
//     for(let i = 0; i < array.length; i++){
//         newArr.push(array[i] * 2)
//     }
//     return newArr
// }
//
// console.log(mult2(testArr));
//
// var newArr1 = mult2(testArr)
//
// console.log(newArr1);




//Create a function that takes in an array and returns a NEW array with only the odd numbers.

// var testArr = [5, 6, 3, 4, -1, -6, -3, 15, 2, 7, 10, 20]
//
// function oddArr(array){
//     var newArr = []
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 !== 0){
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }
//
// console.log(oddArr(testArr));

//Create a function that takes in an array of strings and returns a new array of  strings that are only at the even indexes.


// var testWords = ["bye", "tomorrow", "yall", "no", "see", "the", "you", "a", "later"]
//
// //create function that takes an array of strings
// function evenWords(array){
// //create an empty array
// var newArr = []
// //loop
//     for(let i = 0; i < array.length; i++){
// //if/else that deals with both the values and the indexes
//         if(i % 2 === 0){
//             newArr.push(array[i])
//         }
//     }
//     var finalArr = newArr.join(" ")
//     //return new array
//     return finalArr
// }
//
// console.log(evenWords(testWords));
