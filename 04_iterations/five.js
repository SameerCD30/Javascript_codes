const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach (function greet(val){
    //console.log(val);
 })

coding.forEach((val) => {
    //console.log(val);
})

function printMe(coding){
    //console.log(coding);   
}

coding.forEach(printMe) ;

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr) ;
// } )

const myCoding = [
    {
        languageName: "JavaScript", 
        languageFile : "js", 
    },
    {
        languageName: "Python", 
        languageFile : "py", 
    },
    {
        languageName: "Java", 
        languageFile : "java", 
    }
]

const values = myCoding.forEach( (item) => {
    //console.log(item.languageName) ;
})

//console.log(values);

//const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((nums) => {
//     return  nums > 4
// } )

//const newNums = [] ;

// myNums.forEach( (nums) => {
//     if(num > 4){
//         newNums.push(num) ;
//     }
// } )

//console.log(newNums);


const books = [
    {
        title : "Book One", genre: "Fiction", publish: 1981, 
        edition: 2004 
    },
    {
        title : "Book Two", genre: "History", publish: 1985, 
        edition: 2004 
    },
    {
        title : "Book Three", genre: "Non-fiction", publish: 1982, 
        edition: 2004 
    },
    {
        title : "Harry Potter and the Philosopher's stone", genre: "Fictional-Magic", publish: 1982, 
        edition: 2004 
    },
    {
        title : "Book Five", genre: "Romance", publish: 1985, 
        edition: 2004 
    },
    {
        title : "Book Six", genre: "History", publish: 1980, 
        edition: 2004 
    },
    {
        title : "Book Seven", genre: "Horror", publish: 1967, 
        edition: 2004 
    },
]

let userBooks = books.filter( (bk) => bk.genre === "History")

userBooks = books.filter((bk) => {
    return bk.publish >= 1981 && bk.genre == "Fictional-Magic"
})

console.log(userBooks);


