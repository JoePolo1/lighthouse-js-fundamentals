var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
]; // an array with 3 arrays inside of it which we will treat as rows and three 
//items each which we will treat as columns

// below, donutBox.length refers to the number of ROWS of donuts
for (var row = 0; row < donutBox.length; row++) {
// below, donutBox[row].length refers to the length of the donut array currently being looped over
// and is designated as a column
for (var column = 0; column < donutBox[row].length; column++) {
  console.log(donutBox[row][column]);
  }
}

/*this prints:
 "glazed"
"chocolate glazed"
"cinnamon"
"powdered"
"sprinkled"
"glazed cruller"
"chocolate cruller"
"Boston creme"
"creme de leche"

Visit the below link for a visual example of this
https://classroom.udacity.com/courses/ud803/lessons/a892e474-c057-453d-a5c3-4145cdcbc6c7/concepts/15042dfb-78a4-426a-b4ac-9c579180691e
*/