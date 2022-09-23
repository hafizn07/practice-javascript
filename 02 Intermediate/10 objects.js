// Objects in Javascript

var user = {
    firstName : "Hafiz",
    lastName : "MP",
    role : "Admin",
    loginCount : 21,
    facebookSignedIn : true
}

console.log(user.firstName)
console.log(user["lastName"])

console.log(user.loginCount) //before updation --> loginCount = 21
user.loginCount = 32
console.log(user.loginCount) //after updation --> loginCount = 32

console.table(user)