const name = "Harrsha"
const repoCount = 50
//Not recommended to print strings this way
console.log(name+ repoCount+"Value");
//Recommended to print strings this way - String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Harrshahc')
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//substring will not take -ve values
const newString = gameName.substring(0,4);
console.log(newString);

//Slice
const anotherString = gameName.slice(0,4);
console.log(anotherString);

//To remove unnecessary space in the beginning and end of the string

const newStringOne = gameName.trim();
console.log(newStringOne);

const url = "https://harrsha.com/harrshat%20work"
console.log(url.replace('20%','-'));

const x= url.includes("harrsha");
console.log(x);

//Split using a delimiter
let newName = "Darth Vader Iron Man Batman"
console.log(newName.split(" "));

