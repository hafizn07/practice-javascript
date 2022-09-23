// Maps in javascript

var myMaps = new Map
myMaps.set(1, "Uno")
myMaps.set(2, "dos")
myMaps.set(3, "tres")
myMaps.set(4, "cuatro")
myMaps.set(5, "cinco")
myMaps.set(6, "seis")
myMaps.set(7, "siete")
myMaps.set(8, "ocho")
myMaps.set(9, "nueve")
myMaps.set(10, "diez")

console.log(myMaps);

// for (let key of myMaps.keys()){
//     console.log(`key is ${key}`);    //keys
// }

// for (let value of myMaps.values()) {
//     console.log(`value is ${value}`);     //values
// }

for (let [key, value] of myMaps){
    console.log(`key is : ${key} and value is : ${value}`);
}

myMaps.forEach((v, k) => console.log(`${v} and key is ${k}`));

myMaps.delete(2);
console.log(myMaps);