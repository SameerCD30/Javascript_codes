const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} and curval ${curVal}`);
//     return acc + curVal;
// }, 0)

const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 299 
    },
    {
        itemName: "Python",
        price: 999 
    },
    {
        itemName: "MAD",
        price: 999
    },
    {
        itemName: "Data Sciemce",
        price: 12999
    }
]

const price2Pay = shoppingCart.reduce((acc, item ) => acc + item.price, 0)

console.log(price2Pay);
