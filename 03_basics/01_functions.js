//Functions in Javascript

function printName(){
    console.log("Harrsha");
}
//function call
printName();

function getSum(number1, number2) {
    let result = number1 + number2
    return result
    console.log("Harrsha");// this statement wont be executed bc it is after the return statement
}

const result = getSum(3,4);
console.log(result);

function loginMessage(username) {
    return `${username} just logged in`
}

console.log(loginMessage("harrsha"));

//passing objects in function
const user = {
    username:"Harrsha",
    price:199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username:"Harrsha",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
//or
console.log(returnSecondValue([200, 400, 500, 1000]));



