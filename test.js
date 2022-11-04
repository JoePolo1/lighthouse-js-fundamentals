/* Hints
At some point in your code, you may want to use some_array.push(some_value)
You may paste the following code after your function definition to help you verify it works correctly:

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of
every even number from 0 to 100. In this challenge, we will build a function that creates an array like this
for a given start, end, and step parameter.

*/


const school1 = "Elementary School"; // The next 3 lines define the different school options as variables
const school2 = "Secondary School";
const school3 = "Lighthouse Labs";
function whichSchool(age) { 
  if (age < 13) {
    return school1;
  } else if (age >= 13 && age <= 18) {
    return school2;
  } else {
    return school3;
  }
}



