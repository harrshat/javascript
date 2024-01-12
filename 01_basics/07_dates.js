//Dates

let myDate = new Date();

console.log(myDate);//gives output 2024-01-12T11:04:51.247Z

console.log(myDate.toString());//gives output Fri Jan 12 2024 11:06:23 GMT+0000 (Coordinated Universal Time)

console.log("ToDateString: " + myDate.toDateString());// Gives the output 

console.log("ToLocaleString: " + myDate.toLocaleString());//Gives the output 

console.log("Typeof date" + typeof (myDate));// dateobject

let myCreatedDate = new Date(2023,0,23);
console.log("My created date: " + myCreatedDate);// Output: My created date: Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());






