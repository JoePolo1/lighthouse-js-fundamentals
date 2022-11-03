// X is horizontal, Y is vertical
// North needs to equal 0,+1
// East needs to equal +1,0
// West needs to equal -1,0
// South needs to equal 0,-1 or movesArray[1]+1
//the directional instructions themselves are part of an array, 
//so we can call them using a For loop that spans the length of the 
// array in order to iterate through the loop

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;

  for(let move of moves) {
    if(move === 'south') y += -1;
    else if(move === 'north') y += 1;
    else if(move === 'west') x += -1;
    else if(move === 'east') x += 1;
  }

  return [x, y];
}

finalPosition(moves);

/*const position
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const location = function (movesArray[0,0]) { 
  for(let i = 0, i < moves.length, i++) {
  if(i = 'north') {
      movesArray[1] + 1;
  } else if (i = 'east') {
      movesArray[0] + 1;
  } else if (i = 'west') {
      movesArray[0] - 1;
  } else if (i = 'south') {
      movesArray[1] - 1;
  }
}
}

location(moves);
return finalPosition(location)*/


