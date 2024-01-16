const myObject = { 
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

// To access objects, we use 'forin loops'
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//output
/*
js shortcut is for Javascript
cpp shortcut is for C++
rb shortcut is for Ruby
swift shortcut is for swift by apple
*/

//forin in arrays
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in object) {
    console.log(programming[key]);
}


