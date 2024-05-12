// q13
let myTransport:string[] = ["Sports car","Sports bike","Electric cycle"]
 myTransport.forEach(element => {
    console.log(`i would like to own ${element}`)
 });



// q14
let invitaions = ["Asiya","Eyyan","Ashhad"]
 for (const invitaion of invitaions) {
    console.log(`Hey ${invitaion}, i would like to invite you to dinner at my place`)
    
 }


// q15
let unableToAttend = ["Ashhad"]
console.log(`${unableToAttend} cant make it to dinner`)

// now replacing
let newInvite = "Taha"
invitaions[invitaions.indexOf("Ashhad")] = newInvite

invitaions.forEach(element => {
   console.log(`${element},would you join the me for dinner?`)
   
}); 




// [invitaions.indexOf("Ashhad")]     this part finding the index of the variable(ashhad)

// invitations[......]= newInvite     this part assigning the value of newInvite to the element in the invitation
