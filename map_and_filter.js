
// write an arrow function that takes in an array of objects and returns the animals that are cats.
// var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}]
//
// onlyCats = (arr) => {
//     var newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].animal === 'cat'){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
//
// console.log(onlyCats(toonimals));



//diagram on board



//loop through this array to return a new array with values multiplied by 3. (map or filter?)

var testArr = [3, 7, 2, 5, 10, 13, 15]

// prior to es6

// var newArr = testArr.map(function(value) {
//     return value * 3
// })
//
// console.log(newArr);

// var testArr = [3, 7, 2, 5, 10, 13, 15]


// function mult3(arr){
//     var newArr = arr.map(function(value) {
//         return value * 3
//     })
//     return newArr
// }
//
// console.log(mult3(testArr));

// var testArr = [3, 7, 2, 5, 10, 13, 15]
//
//
// mult3 = (arr) => {
//     return newArr = arr.map(value => value * 3)
// }
//
// mult3(testArr)
// console.log(newArr);
// console.log(mult3(mult3Answer));



// OLD WAY
// function mult3(array){
//     let newArr = []
    // for(let i = 0; i < array.length; i++){
    //     newArr.push(array[i] * 3)
    // }
//     return newArr
// }

//function with es6 and map





//write an arrow function that takes in any array and returns a new array that identifies whether the numbers are even or odd.
// var testArr2 = [3, 7, 2, 5, 10, 13, 15]

//expected output [ 'odd', 'odd', 'even', 'odd', 'even', 'odd', 'odd' ]

// oddEven = (arr) => {
//     var newArr = arr.map(value => {
//         if(value % 2 === 0){
//             return 'even'
//         } else {
//             return 'odd'
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr2));

// w/ ternary

// var testArr = [3, 7, 2, 5, 10, 13, 15]
//
// oddEven = (array) => {
//     return newArr = array.map(value => value % 2 === 0 ? "even" : "odd")
// }
//
// // console.log(oddEven(testArr));

// // declare a variable to hold the return from a function
// const oddEvenArr = oddEven(testArr)
//
// console.log(oddEvenArr);


//write an arrow function that takes in an array and returns only the odd numbers (do we use map or filter?  why?

// var testArr = [3, 7, 2, 5, 10, 13, 15]
// //
// const oddNum = (array) => {
//     return newArr = array.filter(v => v % 2 != 0)
// }
// //
// console.log(oddNum(testArr));




var testArr = [3, 7, 2, 5, 10, 13, 15]
//
const oddNum = (array) => {
    var newArr = array.filter((value, index) => {
        if (value % 2 === 0) {
            return index
        }
    })
    return newArr
}
//
console.log(oddNum(testArr));




//write an arrow function that takes in any array and returns a new array with only the numbers at the even indexes. (do we use map or filter? why?)

// // expected output = [3, 2, 10, 15]

// const evenValues = (arr) => {
//     return newArr = arr.filter((value, index) => {
//             return index % 2 === 0
//     })
// }

// var testArr3 = [3, 7, 2, 5, 10, 13, 15]
//
// const evenValues = (arr) => {
//     return newArr = arr.filter((value, index) => index % 2 === 0)
// }
//
// console.log(evenValues(testArr3));





//
// const evenIndex = (array) => {
//     let newArr = array.filter((value, index) => {
//         return index % 2 === 0
//     })
//     return newArr
// }
// //
// console.log(evenIndex(testArr));






// const oddEven = (array) => {
//     let newArr = array.map(function(value) {
//         if(value % 2 === 0){
//          return "even"
//         } else {
//          return "odd"
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr));

// const evenIndex = (array) => {
//     let newArr = array.filter((value, index) => {
//         if (index % 2 !== 0){
//             return value
//         }
//     })
//     return newArr
// }
//
// console.log(evenIndex(testArr));




//use map or filter to return a new array with values multiplied by 3.
// var arr = [5, 3, 2, 9, 8]
//
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i] * 3);
// }


// var arr1 = [5, 3, 2, 9, 8]
// let newArr = arr1.map(value => value * 3)


// var arr1 = [5, 3, 2, 9, 8]
// var arr2 = [15, 3, 10, 17, 5]
//
// mult3 = (arr) => {
//     return arr.map(value => value * 3)
// }
//
// console.log("original", arr1);
// console.log("new", mult3(arr1));
// console.log("new", mult3(arr2))
//
//
// OLD WAY
// function mult3(array){
//     let newArr = []
//     for(let i = 0; i < array.length; i++){
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }





//write an arrow function that takes in any array and returns a new array that identifies whether the numbers are even or odd.
// var testArr = [3, 7, 2, 5, 10, 13, 15]

//expected output [ 'odd', 'odd', 'even', 'odd', 'even', 'odd', 'odd' ]

// const oddEven = (array) => {
//     let newArr = array.map(value => {
//         if(value % 2 === 0){
//             return "even"
//         } else {
//             return "odd"
//         }
//     })
//     return newArr
// }

// console.log(oddEven(testArr));


// var testArr = [3, 7, 2, 5, 10, 13, 15]
//
// oddEven = (array) => {
//     return newArr = array.map(value => value % 2 === 0 ? "even" : "odd")
// }
//
// // console.log(oddEven(testArr));
// // declare a variable to hold the return from a function
// const oddEvenArr = oddEven(testArr)
//
// console.log(oddEvenArr);






// const oddEven = (array) => {
//     let newArr = array.map(value => {
//         if(value % 2 === 0){
//             return "even"
//         } else {
//             return "odd"
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr));



//write an arrow function that takes in an array and returns only the odd numbers (do we use map or filter?  why?

// var testArr = [3, 7, 2, 5, 10, 13, 15]
// //
// const oddNum = (array) => {
//     return newArr = array.filter(v => v % 2 != 0)
// }
// //
// console.log(oddNum(testArr));






//write an arrow function that takes in any array and returns a new array with only the numbers at the even indexes. (do we use map or filter? why?)

// var testArr = [3, 7, 2, 5, 10, 13, 15]
// // expected output = [3, 2, 10, 15]
//
// const evenIndex = (array) => {
//     let newArr = array.filter((value, index) => {
//         return index % 2 === 0
//     })
//     return newArr
// }
// //
// console.log(evenIndex(testArr));






// const oddEven = (array) => {
//     let newArr = array.map(function(value) {
//         if(value % 2 === 0){
//          return "even"
//         } else {
//          return "odd"
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr));

// const evenIndex = (array) => {
//     let newArr = array.filter((value, index) => {
//         if (index % 2 !== 0){
//             return value
//         }
//     })
//     return newArr
// }
//
// console.log(evenIndex(testArr));
