// q22

let arrays : number[] =[2,3,66,32,79,10,32]

let index :number =5;

    if(index>0 && index <=arrays.length){
        console.log(`here is the array array number which i find with the help of indexing :${arrays[index]}`)
    }
    else{
        console.log("number can't exist in the array list,because index out of bounds")
    }

;


// q23

let cars = ["fortuner", "revo", "lamborgini", "ferrari", "bugatti"];
let checkCars :string = "revo"

cars.forEach((car) => {
  if (car.includes(checkCars)) {
    console.log(`yes this car exist in my list`);
  } else {
    console.log("not exist");
  }
});



// q24

let string1 = "Hashir"
let string2 = "Asiya"

console.log(string1===string2)
console.log(string1 !== string2)

let name1 :string="IMRAN KHAN"
console.log(name1.toLowerCase())


let num1 = 27
let num2 = 7
console.log(num1>20 && num2<10)
console.log(num1>30 && num2<10)
console.log(num1>30 || num2<5)
console.log(num1>25 || num2<5)
console.log(num1>=25 || num2<=5)





