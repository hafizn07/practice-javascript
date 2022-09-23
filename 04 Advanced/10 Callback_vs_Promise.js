//TODO: callback function 

// function add(num1, num2, callback) {
//     let err = false
//     if (num1 == 0) {
//         err = true
//     }
//     callback(num1 + num2, err)
// }

// function subtraction(num1, num2, callback) {
//     callback(num1 - num2)
// }

// function multiply(num1, num2, callback) {
//     callback(num1 * num2)
// }

// function division(num1, num2, callback) {
//     callback(num1 / num2)
// }


// add(10, 20, (sum, err) => {
//     if (err) {
//         console.log("Please make sure your first number is a non zero.");
//     } else {
//         console.log("Sum is : ", sum);
//         subtraction(sum, 10, (difference) => {
//             console.log("Subtracted with 10 is : ", difference);
//             multiply(difference, difference, (product) => {
//                 console.log("Multiplied value is :", product);
//                 division(product, 10, (division) => {
//                     console.log("Divided value is :", division);
//                 })
//             })
//         })
//     }
// })


//TODO: Promise sample 

const { resolve, reject } = require("promise")
const Promise = require("promise")

function add(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First number is zero !!!")
        }
        resolve(num1 + num2)
    })
}

function multiply(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First number is zero !!!")
        }
        resolve(num1 * num2)
    })
}

function division(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First number is zero !!!")
        }
        resolve(num1 / num2)
    })
}

add(8, 2).then((sum) => {
    console.log("the sum is : ", sum);
    return multiply(sum, sum)
}).then((product) => {
    console.log("the product is : ", product);
    return division(product, 2)
}).then((divide) => {
    console.log("The product divided by 2 is : ", divide);
})
    .catch((err) => {
        console.log(err);
    })