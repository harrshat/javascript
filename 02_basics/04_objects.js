//Singleton object ( object created using Constructor)

const tinderUser = {}
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email:"abc@gmail.com",
    fullName: {
        userfullname:{
            firstname: "harrsha",
            lastname: "xyz"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname);

//Combining objects

const obj1 = {
    1: "a", 
    2: "b"
}

const obj2 = {
    3:"a",
    4:"b"
}
//Incorrect method of combining 2 objects
const obj3 = {obj1, obj2};
console.log(obj3);

//Correct method of combining 2 objects
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);
//or const obj4 = {...obj1, ...obj2};

//Example where you get array of objects

const objectUsers = [
    {
        id:1,
        username:"harrsha",
        email:"abc@gmail.com"
    },
    {
        id:2,
        username:"asha",
        email:"xyz@gmail.com"
    }
]
objectUsers[1].email;
//to get the keys from the key-value pairs of the object
console.log(Object.keys(objectUsers));





