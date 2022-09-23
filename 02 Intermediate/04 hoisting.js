// Code hoisting in javascript


// 1) Function declarations are scanned and made available

tipper("5") //global context

function tipper(a) {
    var bill = parseInt(a)
    console.log(bill + 5);
}

// 2) Variable declarations are scanned and made undefined

bigTipper("200")    //gets an error - bigTipper is not a function (undefined)

var bigTipper = function (a) {
    var bill = parseInt(a)
    console.log(bill + 15);
}
 //or

console.log(name);
var name = "Hafiz"
