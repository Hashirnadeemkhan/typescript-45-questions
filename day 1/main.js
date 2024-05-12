// q2
var firstName = "hashir Nadeem khan";
console.log("Hello ".concat(firstName, ", would you like to learn some Python today?"));
// q3
console.log("lowercase:", firstName.toLowerCase());
console.log("Uppercase:", firstName.toUpperCase());
console.log("Titlecase:", firstName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
