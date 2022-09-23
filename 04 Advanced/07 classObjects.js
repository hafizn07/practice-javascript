// import User from "./06 classJs";

const User = require('./06 classJs');

const hafiz = new User("hafiz", "hafiznjh0072gmail.com")

console.log(hafiz.getInfo());

hafiz.enrollCourse("React bootcamp")
hafiz.enrollCourse("Angular bootcamp")
console.log(hafiz.courseList);

let courses = hafiz.getCouseList()

courses.forEach((c) => console.log(c));