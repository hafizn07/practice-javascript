// Functions in variable | User Role in javascript

/*
Define a function that can answer the role of a user.
A user can be on following roles:
1) admin - with all access
2) subadmin - with acccess to create/delete courses
3) testprep - with access to create/delete tests
4) user - consume all content
5) other - trial user.
input: getUserRole(name, role)
*/



function getUserRole(name, role) {
    // var getUserRole = function(name, role) ----> you can have function inside a variable too
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;    //the break here is dim because it is not neccessary here while using the return
        case "subadmin":
            return `${name} is sub admin with acccess to create/delete courses`
            break;
        case "testprep":
            return `${name} is test prep with access to create/delete tests`
            break;
        case "user":
            return `${name} is user consume all content`
            break;

        default:
            return `${name} is a trial user`
            break;
    }
}

// getUserRole("Hafiz", "admin") ---> this actually returns a value back, but does not execute

console.log(getUserRole("Hafiz", "admin"));

//or

var getRole = getUserRole("Codekofy", "user")
console.log(getRole);