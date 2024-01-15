/* Immediately Invoked Function Expressions (IIFE)
To immediately run/call/invoke function -- this is done because global scope often causes pollution and to solve this problem, IIFE is used
*/

(function toConnect(){
    console.log('DB Connected');
})();

//ie. ()() -- First bracket is function defn and the second bracket is function call

//this can be done using arrow functions

( ()=>{
    console.log('DB CONNECTED TO');
} )()