const myObj =  {
    js : 'JavaScript', 
    cpp : 'C++', 
    rb : "ruby",
    swift: "swift"
}

for (const key in myObj) {
    console.log(`${key} is the shortcut for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "python", "cpp"]

for(const key in programming){
    console.log(programming[key]);
}

const map = new Map() ;
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('In', "India")

for(const key in map){
    console.log(key); // this loop wont work.
}

