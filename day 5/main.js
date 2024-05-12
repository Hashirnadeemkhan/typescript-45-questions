var myTransport = ["Sports car", "Sports bike", "Electric cycle"];
myTransport.forEach(function (element) {
    console.log("i would like to own ".concat(element));
});
var invitaions = ["Asiya", "Eyyan", "Ashhad"];
for (var _i = 0, invitaions_1 = invitaions; _i < invitaions_1.length; _i++) {
    var invitaion = invitaions_1[_i];
    console.log("Hey ".concat(invitaion, ", i would like to invite you to dinner at my place"));
}
var unableToAttend = ["Ashhad"];
console.log("".concat(unableToAttend, " cant make it to dinner"));
// now replacing
var newInvite = "Taha";
invitaions[invitaions.indexOf("Ashhad")] = newInvite;
invitaions.forEach(function (element) {
    console.log("".concat(element, ",would you join the me for dinner?"));
});
// [invitaions.indexOf("Ashhad")]     this part finding the index of the variable(ashhad)
// invitations[......]= newInvite     this part assigning the value of newInvite to the element in the invitation
