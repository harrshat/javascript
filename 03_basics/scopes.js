//Scope

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
//console.log(c);

//Scope level and mini hoisting
function one() {
    const userName = "harrsha";

    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()

//Expressions and hoisting
const addTwo = function(num){
    return num + 2;
}

addTwo(5);

