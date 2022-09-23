// show user a signout button instead of signIn if he/she is logged in 
// other wise showhim option login/signup

var authenticated = false

// if (authenticated) {
//     console.log("Show sign Out button")
// }else{
//     console.log("show Login/signUp button");
// }

authenticated ? console.log("Show SignOut Button") : console.log("Show Login/SignUp Button")