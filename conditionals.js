const temperature = 40;
const raining = false;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else if (temperature < -35 || temperature > 35) {
  console.log("Extreme temperature alert! Consider staying indoors.");
} else if (temperature >= 25) {
  console.log("Bring water and sunblock, it is hot!");

} else {
  console.log("Short sleeves are fine.");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
console.log("Now you know about the weather, back to you, anchorman!");