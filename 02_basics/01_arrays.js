//array

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]);

const myArr2= new Array()
console.log(myArr[0]);

//Array Methods
// To add elements into the end of the array
myArr.push(6);
myArr.push(7);
console.log(myArr);
//To remove elements from the end of the array
myArr.pop();
console.log(myArr);

//To add element at the beginning of the array
myArr.unshift(9);
console.log(myArr);

//To remove element from the beginning of the array
myArr.shift(9);
console.log(myArr);

//To check if your array contains an element
myArr.includes(3); //To check if mrArr array contains the element 3.
console.log(myArr.includes(4)); //Outputs true or false

//To get index of the element
console.log(myArr.indexOf(3));

//To add all the elements of the array into a string- join- It changes the datatype













