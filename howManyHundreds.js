// this exercise is looking to RETURN the number of how many hundreds fit into the initial number
// can test print to console using console.log(howManyHundreds(1000), "=?", 10);
// the code below has two ways of doing this. the first is slightly longer so it is commented out. The second is 
//described below.

function howManyHundreds(num) {
  //let divideBy100 = num / 100;
  //return Math.floor(divideBy100);
  return (num - (num % 100)) / 100; /* so this method first removes the additional numbers eg. 894%100=94 and then 
  subtracts that 94, and then  divides that by 100 to reach the result*/
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);