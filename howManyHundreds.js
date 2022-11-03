// this exercise is looking to RETURN the number of how many hundreds fit into the initial number
// can test print to console using console.log(howManyHundreds(1000), "=?", 10);

function howManyHundreds(num) {
  let divideBy100 = num / 100;
  return Math.floor(divideBy100);
  //return num % 10;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);