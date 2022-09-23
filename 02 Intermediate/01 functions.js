//Basics of functions in javascript

// Discussing about function, 
// how to declare a function, 
// passing an argument in the function,
// calling a function and 
// diffrence between return and console.log(); in a function


function sayHello(name){
    console.log("Hey there, Hafiz");
    console.log(`Hey there, ${name}. How are you?`)
}

// sayHello("Hafiz")
// sayHello("hafiznjh007@gmail.com")

function namaskaram() {
    return "Hello in Kerala"
}
var greetings = namaskaram()
console.log(greetings)
// console.log(namaskaram())