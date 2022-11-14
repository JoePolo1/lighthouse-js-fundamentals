const calculateChange = function(total, cash) {
  //calculating change to be returned
  let change = cash - total;
  //Creating empty object that will store change breakdown later
  let objToReturn = {};
  let obj = {
    twentyDollar: 0,
    tenDollar: 0, 
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar:0,
    quarter: 0,
    dime: 0,
    nickel:0,
    penny: 0,

    calculate: function(change) {
      while (change >= 2000) {
        obj.twentyDollar += 1;
        change -= 2000;
      }
      while (change >= 1000) {
        obj.tenDollar += 1;
        change -= 1000;
      }
      while (change >= 500) {
        obj.fiveDollar += 1;
        change -= 500;
      }
      while (change >= 200) {
        obj.twoDollar += 1;
        change -= 200; 
      }
      while (change >= 100) {
        obj.oneDollar += 1;
        change -= 100;
      }
      while (change >= 25) {
        obj.quarter += 1;
        change -= 25;
      }
      while (change >= 10 && change < 25) {
        obj.dime += 1;
        change -= 10;
      } 
      while (change >= 5 && change < 10) {
        obj.nickel += 1;
        change -= 5;
      }
      while (change >= 1 && change < 5) {
        obj.penny += 1;
        change -= 1;
      }
    }
  }

  obj.calculate(change);
  const keys = Object.keys(obj);
  for (key of keys) {
    if (obj[key] > 0 & key !== "calculate") {
      objToReturn[key] = obj[key];
    }
  }
  return objToReturn;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));