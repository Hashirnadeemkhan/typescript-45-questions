//q28

let persons_stage = 2;
if (persons_stage < 2) {
  console.log("the person is baby");
}
else if (persons_stage >= 2 && persons_stage < 4) {
  console.log("the person is a toddler");
}
else if (persons_stage >= 4 && persons_stage < 13) {
  console.log("the person is a kid");
}
else if (persons_stage >= 13 && persons_stage < 20) {
  console.log("the person is a teenager");
} else if (persons_stage >= 20 && persons_stage < 65) {
  console.log("the person is an adult");
} else{
  console.log("the person is an elder");
}


// q29

let fruits: string[] = ["banana", "apple", "orange", "grape", "kiwi"];

if (fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (fruits.includes("grape")) {
    console.log("You really like grapes!");
}

if (fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}



// q30


let user_names=["Admin","Hashir","Eyyan","Ashhad","Asiya","Taha","Rohan"];


user_names.forEach(username => {
    if (username=="Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again`)
    }
    
});
