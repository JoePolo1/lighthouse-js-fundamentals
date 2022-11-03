/* This exercise is intended to calculate area
- the parameters to the functiuons will always be numbers
- each function should return a nuymber that corresponds to the area of a shape
Here is the math for each of the shapes:

rectangle: length x width
triangle: base x height / 2
circle: (pi) x (radius squared) // (to access pi in javascript, use Math.pi)

if any parameter is negative the function should return undefined*/

function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return (base * height) / 2;
  }
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return Math.PI * (radius * radius) //handy little way to make "radius squared" in code
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined