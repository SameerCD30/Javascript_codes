if(true){

}
if(false){

}
const isUserLoggedIn = true ;
if(2 == 2){

}
if(isUserLoggedIn){

}
if(2 === "2"){
    console.log("Yes");
    
}

let array = [5,6,7] ;

if(array.length == 0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}

const myObj = {}

if(Object.keys(myObj).length == 0){
    console.log("Object is Empty");
}else{
    console.log("The Object is not empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10 

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary operator

//condition ? true: false

const iceTeaPrice = 100 ;

// it is the small replacement of else if condition. 
iceTeaPrice >= 80 ? console.log("True") : console.log("false");


