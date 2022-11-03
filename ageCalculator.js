let name = "Joe";
let yearOfBirth = 1986;
let currentYear = 2022;

function ageCalculator(name, yearOfBirth, currentYear) {
  return(name + " is " + (currentYear - yearOfBirth) + " years old.");
}
console.log(ageCalculator("Miranda", 1983, 2022));

/* Optional alternative using TEMPLATE LITERALS:

const ageCalculator = (name, yearOfBirth, currentYear) => {
  return (`${name} is ${currentYear - yearOfBirth} years old.`);
}

*/