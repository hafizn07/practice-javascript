const uid = "abc123"

var fullname = "Hafiz"
var email = "hafiznjh07@gmail.com"
var password = "12345678"
var confirmPassword = "12345678"
var courseCount = 0
var isLoggedInFromGoogle = false

// fullname = prompt("Enter your name : ")

console.log(uid)
console.log("Full name is : " + fullname)
console.log("Email is : " , email)

//interpolation in javascript

console.log(`
    With unique ID : ${uid}
    User is : ${fullname}
    and his Email is : ${email}
    and used his password : ${password}
`);