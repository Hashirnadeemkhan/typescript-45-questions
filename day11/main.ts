
// q31

let user_names :string[] = [];
if (user_names.length === 0) {
  console.log("we need to find some users");
} else {
  user_names.forEach((username) => {
    if (username == "Admin") {
      console.log("Hello Admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again`);
    }
  });
}


// q32
let current_users: string[] = [
  "Admin",
  "Hashir",
  "Eyyan",
  "Ashhad",
  "Asiya",
  "Taha",
  "Rohan",
];

let new_users: string[] = [
  "Taimoor",
  "Maham",
  "Alveena",
  "Mantasha",
  "Munna",
  "Hashir",
  "Eyyan",
];
let currentUserLowerCase = current_users.map(user=>{
  return user.toLowerCase()
})

new_users.forEach(newUser => {
  if(currentUserLowerCase.includes(newUser.toLowerCase())){
    console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`)
  }
  else{
    console.log(`This username is avalible`)
  }
});




// q33

let numbers:number[]=[1,2,3,4,5,6,7,8,9]
let ordinal:string;
numbers.forEach(number => {
if(number===1){
  ordinal="st"

}
else if(number===2){
  ordinal="nd"
  
}
else if(number===3){
  ordinal="th"
}
console.log(`${number}${ordinal}`)
});