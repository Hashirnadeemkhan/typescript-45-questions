// now i waant to add more guest in my list
var moreGuest = ["Rohan", "Mantasha", "Abdur"];
// console.log(`great news! i found a bigger dinner table`)
// // adding more guest
// moreGuest.unshift("taimoor")
// moreGuest.push("malaika")
// moreGuest.splice(moreGuest.length/3,0,"Maham")
// console.log(moreGuest)
console.log("Unfortunately, I can only invite two people for dinner.");
while (moreGuest.length > 2) {
    var removeGuest = moreGuest.pop();
    console.log("sorry ".concat(removeGuest, ", I can't invited you to dinner because of my limited space"));
}
moreGuest.forEach(function (guest) {
    console.log(" Dear ".concat(guest, ",You still invited to the dinner"));
});
moreGuest.splice(0, moreGuest.length);
console.log(moreGuest);
var placesToVist = ["Paris", "Europe", "India", "Dubai", "America"];
console.log(placesToVist, "orignal order");
console.log(placesToVist.sort(), "sorted in Alphabatical order");
console.log(placesToVist, "soretd in reverse order");
console.log(placesToVist.sort().reverse(), "sorted in reverse order alphabtically");
console.log(placesToVist, "orignal order");
console.log(placesToVist.reverse());
console.log(placesToVist);
console.log(placesToVist.sort());
console.log(placesToVist.reverse());
