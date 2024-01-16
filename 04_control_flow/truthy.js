const userEmail = "useremail@abc.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}

/*
    Falsy values -> false, -0, 0, BigInt0n, "", null, undefined, NaN

    Truthy values -> "0",'false', " ", [], {}, function(){}

    Nullish Coalescing Operator(??): null operator
*/
let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10 //output is 10 bc val2 wasn't assigned any value

//ternary operator 
//condition ? true : false

