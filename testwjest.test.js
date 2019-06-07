
//Why test?

//Remember edabit?

//Red Green Refactor

//syntax template

// describe("nameOfFunctionHere", () => {
//     test ("in our own words what the function is doing", () => {
//         expect(functionCall()).toBe("output")
//     })
// })

// write a test for a function called peanut that returns 'jelly'

describe("peanut", () => {
    test ("returns the string jelly", () => {
        expect(peanut()).toBe("jelly")
    })
})


const peanut = () => {
    return "jelly"
}

//Write a test for a function called greeter that takes in a name and returns "hello" + the name.

describe("greeter", () => {
    test ("return hello plus any name", () => {
        expect(greeter("sally")).toEqual("Hello Sally")
        expect(greeter("Gabe")).toBe("Hello Gabe")
    })
    test ("edge cases - string only", () => {
        expect(greeter(1)).toEqual("please enter string only")
        expect(greeter(true)).toBe("please enter string only")
    })

})
// const greeter = (name) =>{
//     return `hello ${name}`
// }

const greeter = (name) => {
    if(typeof name === "string"){
        let newName = name.charAt(0).toUpperCase() +    name.substring(1)
            return `Hello ${newName}`
    } else {
            return "please enter string only"
    }
}


//write a test for a function called addition that takes in two numbers and returns the sum of those two numbers.

describe("addition", () => {
    test ("return the sum of two numbers", () => {
        expect(addition(2, 3)).toEqual(5)
        expect(addition(5, 10)).toEqual(15)
        expect(addition(-5, 3)).toBe(-2)
    })
})

const addition = (num1, num2) => {
    return num1 + num2
}




//Write the test for a function called exercise that logs "go for a run" if you are 'full of energy' and "take a nap" if you are "tired" (stretch: what if somone put something other than our expected arguements?)

describe("exercise", () => {
    var input1 = "full of energy"
    var result1 = "go for a run"
    var input2 = "tired"
    var result2 ="take a nap"

    test ("returns whether or not to run or take a nap", () => {
        expect(exercise(input1)).toEqual(result1)
        expect(exercise(input2)).toEqual(result2)
    })

    var message = "please enter only full of energy or tired"

    test ("if the user inputs an edge case", () => {
        expect(exercise(2)).toBe(message)
        expect(exercise("two")).toBe(message)
    })
})

const exercise = (str) => {
    if(str === "full of energy"){
        return "go for a run"
    } else if (str === "tired") {
        return "take a nap"
    } else {
        return "please enter only full of energy or tired"
    }
}
