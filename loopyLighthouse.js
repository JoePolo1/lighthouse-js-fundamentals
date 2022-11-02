let x = 100;

while (x <= 200) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");//prints loopylighthouse on multiples of 3 and 4 
  } else if (x % 4 === 0) {
    console.log("Lighthouse"); //prints loopylighthouse on multiples of 4
  } else if (x % 3 === 0) {
    console.log("Loopy"); // Prints loopy on multiples of 3
  } else console.log(x);
  ++x //increments by one each iteration
}

