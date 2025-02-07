function chai(){
    let userName = "sameer" ;
    console.log(this.userName); //undefined.
}

// this sirf objects ke andar kaam karea
chai() ;

const chai = function(){
    let userName = "samer"
    console.log(this.userName);
}

 const chaii = ()=>{
     let userName = "samer"
     console.log(userName);
 }

//chaii() ;

const addTwo = (num1, num2) => {
    return num1 + num2 ;
}


// this is also known as implicit arrow function return.
 const addTwoNum = (num1, num2) =>  (num1 + num2);

// paranthesis me pack karna hi padega return karne ke liye.
 const retSome = () => ({userName: "sameer"})

console.log(addTwoNum(5,6));


const myArray = [2,5,7,8,9] ;


//myArray.forEach()
