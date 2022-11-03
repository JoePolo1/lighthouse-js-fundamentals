var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts); //returns [ 'JELLY DONUT HOLE', 'CHOCOLATE DONUT HOLE', 'GLAZED DONUT HOLE' ]

/* In this example, the variable i is being used to 
represent the index of the array. As i is incremented, 
you are stepping over each element in the array 
starting from 0 
until donuts.length - 1 (donuts.length is out of bounds).

the below function FOR EACH makes this easier.
*/

let cupcakes = ["chocolate", "strawberry", "vanilla"];

function printCupcakes(cupcakes) {
  cupcakes += " with sprinkles"
  cupcakes = cupcakes.toUpperCase();
  console.log(cupcakes);
}

cupcakes.forEach(printCupcakes);

