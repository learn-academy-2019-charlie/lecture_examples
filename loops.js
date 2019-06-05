// Diagram parts of a for loop first


// Loops/Iteration Practice

// Example 1
// Write a for loop that logs each number from 1 - 10.

console.log("1-10")
for(let i=1; i<=10; i++){
    console.log(i)
}


// Example 2
// Write a for loop that logs each number fom 1-10 in reverse.

console.log("reverse")
for(let i = 10; i > 0; i--){
    console.log(i)
}


// Exercise 3
//Consider this array
var arr1 = [18, 7, 3, 5, 10, 41, 33]

// Write a for loop that logs the result of each number in the arr1 multiplied by 3.
console.log("mult 3");
for(let i=0; i < arr1.length; i++){
    console.log(arr1[i] * 3);
}





// Example 4
// Consider this variable:
var numbers = [1, 8, 3, 2, 5, 4, 8, 9, 7, 1, 15, 10, 11]
// Write for loop that logs each number mult by 5

console.log("mult 5")

for(let i =0; i < numbers.length; i++ ){
    console.log(numbers[i] * 5);
}


// Example 5
// Use the numbers array and write a for loop that logs only the even numbers. Replace the odd numbers with the string "odd".
var numbers2 = [1, 8, 3, 2, 5, 4, 8, 9, 7, 1, 15, 10, 11]
// expected output = ["odd", 8, "odd", 2, "odd", 4, 8, "odd", "odd", "odd", "odd", 10, "odd"]

console.log("conditional");

for(let i = 0; i<numbers2.length; i++){
    if(numbers2[i] % 2 === 0){
        console.log(numbers2[i]);
    } else {
        console.log("odd");
    }
}


//Example 6

var numArr = [8, 3, 5, 3, 7, 3, 7, 10, 3]

// Use the numArr above and write a for loop that logs all numbers except 3.

console.log("no 3s");

for(let i=0; i < numArr.length; i++){
    if(numArr[i] !== 3){
        console.log(numArr[i]);
    }
}





// Example 1
// Write a for loop that logs each number from 1 - 10.

// console.log("1-10");
//
// for(let i=1; i <= 10; i++){
// 	console.log(i);
// }



// Example 2
// Write a for loop that logs each number fom 1-10 in reverse.

// console.log("10-1");
//
// for(let i=10; i>0; i--){
// 	console.log(i);
// }


// Exercise 3
//Consider this array
// var arr1 = [18, 7, 3, 5, 10, 41, 33]
// Write a for loop that logs the result of each number in the arr1 multiplied by 3.
//
// console.log("arr1 * 3");
//
// for(let i=0; i < arr1.length; i++){
// 	console.log(arr1[i] * 3);
// }





// Example 4
// Consider this variable:
// var numbers = [1, 8, 3, 2, 5, 4, 8, 9, 7, 1, 15, 10, 11]
// // Write for loop that logs each number mult by 5






// Example 5
// Use the numbers array and write a for loop that logs only the even numbers. Replace the odd numbers with the string "odd".
// var numbers = [1, 8, 3, 2, 5, 4, 8, 9, 7, 1, 15, 10, 11]
// expected output = ["odd", 8, "odd", 2, "odd", 4, 8, "odd", "odd", "odd", "odd", 10, "odd"]

// console.log("even or odd");
//
// for(let i=0; i<numbers.length; i++){
// 	if(numbers[i] % 2 === 0){
// 		console.log(numbers[i]);
// 	} else {
// 		console.log("odd");
// 	}
// }



//Example 6

// var words = [8, 3, 5, 3, 7, 3, 7, 10, 3]

// Use the numArr above and write a for loop that logs all numbers except 3.
// console.log("no 3s");
//
// for(i=0; i < words.length; i++){
// 	if(words[i] != 3){
// 		console.log(words[i]);
// 	}
// }
