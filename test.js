/*
The function, carPassing(cars, speed), takes in an array of car objects, and the speed 
of a car as it passes the sensor. This function should create a new object with a property 
called speed, and another property called time and add it to the cars array. 
We can retrieve the current time, for setting the time property, by using the Date.now() function, 
which is built into JavaScript!

Our function should return an array that includes all of the elements in cars as well as our new element.

Note
We may need to use JavaScript's handy push() method to add our new object to the cars array. 
Take a look at this previous exercise for a refresher.
*/

//IMPORTANT
// we already have the new speed declared as 38 in the example below. We need to add that in 
// with the current date and time as a new object into the existing array and the declared speed 
// of 38 as listed below in the call. CARS is the name of the array

const carPassing = function (cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: speed
  }
  cars.push(newCar);
  return cars; //INITIALLY I forgot to do this and the code returned UNDEFINED. You will always get UNDEFINED
  // if you are not returning something
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));