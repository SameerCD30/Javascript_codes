// Immediately Invoked Function Expression (IIFE)

// Global Scope ke pollutiion se problem hoti hai to use bachne ke lye use k
//ham use karte hai iife.

(function chai(){
    console.log("DB Connected");
})() ;

// isme end me semi-colon lagana padega. 

((name) => {
    console.log(`DataBase is Connected to ${name}`);
})(`Sameer Singh`) ;











