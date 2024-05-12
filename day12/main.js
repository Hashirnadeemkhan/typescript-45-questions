"use strict";
let favourite_pizza = ["chicken tikka", "chicken fajita", "cheese pizza"];
for (let i = 0; i < favourite_pizza.length; i++) {
    console.log(`I like ${favourite_pizza[i]}`);
}
console.log("I really love pizza!");
let commonAnimals = ["dog", "cat", "lion"];
commonAnimals.forEach((animal) => {
    console.log(`${animal}would make a great pet`);
});
console.log("Any of these animals would make a great pet!");
function make_shirt(size, message) {
    return [size, message];
}
let size = 30;
let message = "just smiling";
console.log(make_shirt(size, message));
//  2nd method 
// function make_shirt(size: string, message: string){
//     console.log(`my size of the T shirt is "${size}" and my message on the t shirt is the "${message}"`)
// }
// make_shirt( "medium size","just keep smiling" )
