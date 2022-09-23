// For loop basics in Javascript

// for (let i = 0; i <=10; i++) {
//     console.log(i)
// }

const myStates = [
    "Kerala",
    "Tamil Nade",
    2001,
    "Karnataka",
    "Goa",
    "Maharashtra",
    "Delhi"
]

// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== "string") continue
//         console.log(myStates[i]);
// }

// While and do while loops in javascript.

// let i = 0
// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++
// }

let i = 0
do {
    console.log(myStates[i]);
    i++
} while (i < myStates.length)