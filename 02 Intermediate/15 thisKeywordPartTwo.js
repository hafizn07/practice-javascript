// THIS keyword explained more in javascript

// NOTE: For all regular function calls, this points to window object

console.log(this);

var user = {
    firstName: "Hafiz",
    courseCount: 4,
    getCourseCount: function () {
        console.log("LINE 11",this);
    },
}

user.getCourseCount()