//determines if an array length is good enough to build a sports team, which requires 7 players. 
//returns a true or false statement


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(ourArray) {
    
 if (ourArray.length >= 7) 
     return true;
     else
     return false;
 }
console.log(hasEnoughPlayers(team));