/*
Our function will receive two arguments:

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost), 
which hold some numerical value. Our function must increase the correct value in the bins object, 
and then return the newly updated object.
*/

const smartGarbage = function (trash, bins) {
  bins[trash] += 1;
  return bins;
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });


//Should return the object 
/* {
  waste: 4,
  recycling: 3,
  compost: 5
}
*/

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

/*For this challenge, we'll need to implement a function called judgeVegetable()
that will decide which vegetable is best based on a given judging characteristic. 
Our function will receive two parameters: a list of veggies(as an array of objects), and 
a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

*/

const judgeVegetable = function (vegetables, metric) {
  vegetables.sort((a, b) => a[metric] - b[metric])
  return vegetables[vegetables.length - 1].submitter; //IMPORTANT - so minus one is just the spot of the highest sorted object, and then you're just calling the submitter of that object with this
}


//If we called the function with the following arguments, the return would be "Old Man Franklin"
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
console.log(vegetables);