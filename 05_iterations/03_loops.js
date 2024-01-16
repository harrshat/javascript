// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {
    
// }

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
// Key- value pairs, but they only store unique values
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ":-", value);       
// } NOTE: This won't work because objects are not iteratable in this way using forof
