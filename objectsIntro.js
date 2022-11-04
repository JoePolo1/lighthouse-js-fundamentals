/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  close: function() {
      if (umbrella.isOpen === true) {
          umbrella.isOpen = false;
          return "Julia closes the umbrella";
      } else {
          return "The umbrella is already closed";
      }
  }
};

// objects consists of KEYS which contain VALUES. So below, "name:" is the key and ""Sarah"" is the value.
//you can access a key's value using dot notation by typing sister.name or bracket notation using sister["parents"]
//The sister object above contains a bunch of properties about my sister, but doesn't really say what my
//sister does. For instance, let's say my sister likes to paint. You might have a paintPicture() method
//that returns "Sarah paints a picture!" whenever you call it. The syntax for this is pretty much exactly the
//same as how you defined the properties of the object. The only difference is, the value in the
//key:value pair will be a function.


var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();


var myObj = { 
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method that initiates a function to be activated
myObj.color; // property calling


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

/* in the above example you can make a withdrawl using savingsAccount.withdraw(50); 
*/

var facebookProfile = {
    name: "Udacian",
    friends: 25,
    messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        // In the following splice() method call,
        // - argument 1 = index from where the element has to be deleted
        // - argument 2 = count of elements to be deleted
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends = facebookProfile.friends + 1;
        //friends += 1; // this statement is equivalent to the above
    },
    removeFriend: function(){
        if(facebookProfile.friends>0)
            facebookProfile.friends = facebookProfile.friends - 1;
    }
};



/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});
