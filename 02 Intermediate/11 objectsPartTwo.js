// Methods and objects in javascript


var user = {
    firstName : "Hafiz",
    lastName : "MP",
    role : "Admin",
    loginCount : 21,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },
    courseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`
    }
}
var courseList = true
console.log(user.firstName);
console.log(user.courseCount());
user.buyCourse("Javascript course")
user.buyCourse("React Js course")
console.log(user.courseCount());
