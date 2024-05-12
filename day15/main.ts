// q43

// first making orignal array

let magicianNames: string[] = [
  "Merlin the Magnificent",
  "Mystique the Enchanter",
  "Arcane the Illusionist",
];
function show_magicians(magicianNames: string[]) {
  magicianNames.forEach((name) => {
    console.log(name);
  });
}

// then making one array with the Great added to each magician’s name.

function make_great(magicianNames: string[]): string[] {
  let greatMagicians: string[] = [];
  magicianNames.forEach((magician) => {
    greatMagicians.push(`${magician} the great`);
  });
  return greatMagicians;
}

let greatMagicians = make_great(magicianNames.slice()); // Creates a new modified array because slicing sa apka new orignal array change nh hoga,blkay ek copy banjayegi "great magicians" ka naam sa ,or orignal array wese ka wesey hi rahega jisko aap apney program mae khin bh use krsktay call rkaky
console.log("Original magicians:");
show_magicians(magicianNames); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names which we make the copy of magicians name using string "the great"

// q44
// let items=["ketchup","maynoiese","kabab","cheese"]
function makesandwich(...items: string[]) {
  let summary = `i want to eat delecious sandwich with ${items.join(",")}.`;
  console.log(summary);
}

makesandwich("ham", "cheese");
makesandwich("turkey", "lettuce", "tomato");
makesandwich("avocado", "sprouts", "mustard", "mayo");

// q45

function car(...information: string[]) {
  let info = {
    corrolla: {
      manufacturer: "toyota corporation",
      model: "2024",
    },
  };
  return info;
}
let anotherInfo:any = {

  mehran: {
    color: "red",
    feature: "auto",
  },
  fortuner: {
    color: "white",
    feature: "smooth",
  },
};
console.log(car(anotherInfo))
console.log(car());





function map(f, a) {
  // Create a new array to store the mapped values
  const result = new Array(a.length);

  // Loop through each element of the input array 'a'
  for (let i = 0; i < a.length; i++) {
    // Apply the function 'f' to the current element of 'a' and store the result in 'result'
    result[i] = f(a[i]);
  }

  // Return the resulting array
  return result;
}


const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers));
