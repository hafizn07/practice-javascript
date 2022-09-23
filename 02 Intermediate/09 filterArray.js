// TODO: Fill and Filter in Array in Javascript

var testArray = [2, 4, 6, 3, 1, 7, 5, 9, 8]

//console.log(testArray.fill("h", 2, 5)); 
//parameters -> ("what to fill", start, end)

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98]
const result = myNumber.filter((num) => num < 55)
//console.log(result);

// TODO: Slice and Splice in Javascript

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"]

//Slicing
// console.log(users.slice(1, 3))


// Splice
users.splice(1, 2, "Hi")
console.log(users);