const user = {
    username:"Harrsha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }   
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

//this.username won't work in functions. It only works in objects
function one(){
    let username = "harrsha"
    console.log(this);
}
one()

// function two = ()=>{
//     let name = "harrsha"
//     console.log(this.name)
// }
// two()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

/*or const addTwo = (num1, num2) => (num1 + num2) which is implicit 
 return and does the same thing as return num1+num2 which is explicit return */

 const myArray = [2,3,4,5];
 myArray.forEach(()=>{
    //statements
 })


