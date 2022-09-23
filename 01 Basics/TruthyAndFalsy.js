//Coersion and falsy values in javacsipt

// TODO:    falsy values
// undefined
// null
// 0
// ''
// NaN

//everything apart from this is truthy values

var user = ""          //[ it can be undefined, null, 0 or NaN]

// var user = "hai" - its a truthy value and it returns the below statement

if (user) {
    console.log("Condition is true!"); //do not return this statement because of falsy values
}