// for of

["", "", ""]
[{},{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const nums of arr) {
    console.log(`Each element is ${nums}`);
}


// Maps     It is an objecet that holds key value pairs.....


// shows only unique values;

const map = new Map ()
map.set(`USA`, "United States of America");
map.set(`IN`, "India");
map.set(`UK`, "United Kingdom");
map.set(`UK`, "United Kingdom") ;

//console.log(map);


for (const key of map) {
    console.log(key);  // isme map se array print hojaega
}

for (const [key, value] of map) {
    //console.log(key,':->', value);  
}

const myObject= {
    'game1' : 'NFS',
    'game2' : 'SpiderMan',
}

// for(const [key, value] of myObject){
    // console.log(key, " ;- ", value );
// }


