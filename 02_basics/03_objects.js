//objects in javascript

//Object.create -- Constructor method of creating objects

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Harrsha",
    "full name":"Harrsha work",
    [mySym]:"mykey1",
    age: 16,
    location:"Chennai",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"],
    
}

console.log(jsUser.email)
console.log(jsUser["email"])

myArray = ["h","i"];

jsUser.email = "harrsha.work@gmail.com"
Object.freeze(jsUser);
jsUser.email = "harrshat@gmail.com"
console.log(jsUser["email"]);
jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting);





