// q16
// now i want to add more guest in my list
let moreGuest = ["Rohan", "Mantasha", "Abdur"];
console.log(`great news! i found a bigger dinner table`)

// // adding more guest
moreGuest.unshift("taimoor")
moreGuest.splice(2,0,"Ali")  
moreGuest.push("malaika")

console.log(moreGuest)


// q17
console.log("Unfortunately, I can only invite two people for dinner.");
 while (moreGuest.length >2) {
   let removeGuest = moreGuest.pop();
   console.log(`sorry ${removeGuest}, I can't invited you to dinner because of my limited space`)
 }

 moreGuest.forEach(guest => {
   console.log(` Dear ${guest},You still invited to the dinner`)
 });

moreGuest.splice(0,moreGuest.length)
console.log(moreGuest)





// q18

let placesToVist : string[] = ["Paris","Europe","India","Dubai","America"]


console.log(placesToVist,`orignal order`)
console.log(placesToVist.sort(),`sorted in Alphabatical order`)
console.log(placesToVist,`orginal order`)
console.log(placesToVist.sort().reverse(),`sorted in reverse order alphabtically`)
console.log(placesToVist,`orignal order`)
console.log(placesToVist.reverse())
console.log(placesToVist)
console.log(placesToVist.sort())
console.log(placesToVist.reverse())