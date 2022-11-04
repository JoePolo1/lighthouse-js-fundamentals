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


function range(start, end, step) {
  let rangeArray = [];
  if(step === undefined || end === undefined || start === undefined || step <= 0 || start > end) {
    return rangeArray;
  } else {
    for (let i = start; i <= end; i += step) {

    rangeArray.push(i);
    }
    return rangeArray;
  }
}
//below is test data to use to validate
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
