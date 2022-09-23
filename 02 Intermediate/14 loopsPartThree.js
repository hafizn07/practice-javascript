// For in and for of loop in javascript

var names = [
    "Yotube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon"
]

for(const n of names)       // for of --> for an array
console.log(n)


const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    git: "github.com"
}

for(const s in symbols)     // for in --> for an object
//console.log(s)
//console.log(symbols[s])
console.log(`Key is : ${s} and the value is : ${symbols[s]}`)