const myNums = [1, 2, 3];

const myTotal =  myNums.reduce(function (acc,curVal) {
    console.log(`acc: ${acc} and ${curVal}`);
    return acc + curVal
}, 0)

/*
The above code can also be written as 
const myTotal = myNums.reduce( (acc, curVal) => acc+curVal, 0 )
 */
console.log(myTotal);

/* 

Output:
acc: 0 and 1
acc: 1 and 2
acc: 3 and 3
6
*/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 5999
    },
    {
        itemName: "mobile dev course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);



