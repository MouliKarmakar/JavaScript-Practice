// Syntax of creating an empty Map.
let fruits= new Map();

// set method of Map.
fruits.set("apple",500);
fruits.set("bananas",300);
fruits.set("orange",200);
// console.log(fruits);

// get method of Map.
let key =fruits.get("bananas");
// console.log(key);

// has method of Map.
let check=fruits.has("orange");
// console.log(check);

// looping a Map
for(let [keys,values] of fruits){
    console.log(keys);
    console.log(values);
}
