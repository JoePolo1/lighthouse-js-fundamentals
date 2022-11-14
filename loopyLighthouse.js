/*let x = 100;

while (x <= 200) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");//prints loopylighthouse on multiples of 3 and 4 
  } else if (x % 4 === 0) {
    console.log("Lighthouse"); //prints loopylighthouse on multiples of 4
  } else if (x % 3 === 0) {
    console.log("Loopy"); // Prints loopy on multiples of 3
  } else console.log(x);
  ++x //increments by one each iteration
}*/


//below is a method to do this using a for loop instead of a while loop. 

/*
for (let index = 100; index <= 200; index++) {
  if (index % 3 === 0 && index % 4 === 0) {
    console.log("LoopyLighthouse");//prints loopylighthouse on multiples of 3 and 4 
  } else if (index % 4 === 0) {
    console.log("Lighthouse"); //prints loopylighthouse on multiples of 4
  } else if (index % 3 === 0) {
    console.log("Loopy"); // Prints loopy on multiples of 3
  } else console.log(index);
    
  }
*/
// Loopy Lighthouse 2 

const loopyLighthouse = function (range, multiples, words) {
  for(let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0)  {
      console.log(words[0]);
    } else if (i % multiples[1] === 0)  {
      console.log(words[1]);
    } else console.log(i);
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
