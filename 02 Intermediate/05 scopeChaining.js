// Scope chaining in javascript

// Whenever our code tries to access a variable during the function call, it starts 
// the searching from local variables. And if the variable is not found, it’ll continue searching in 
// its outer scope or parent functions’ scope until it reaches the global scope and completes 
// searching for the variable there. Searching for any variable happens along the scope chain 
// or in different scopes until we get the variable. If the variable is not found in the global 
// scope as well, a reference error is thrown.  

var name = "Hafiz"
console.log("Line number 11 ", name)

function sayName() {
    var name = "Hi Hafiz"
    console.log("Line number 15 ", name);
    sayNameTwo()

    function sayNameTwo() {
        var name = "Mr. H"
        console.log("Line number 19 ", name);
    }
}
sayName()

