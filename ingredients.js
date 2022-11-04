const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let Z = 0;
while (Z < ingredients.length) {
  console.log(ingredients[Z]);
  Z++
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards
for (let i = ingredients.length - 1; i >=0; i--) {
  console.log(ingredients[i]);  
}
  
