// const testCoins = [5, 7, 1, 1, 2, 3, 22];
// const testCoins =  [1, 1, 1, 1, 1];
const testCoins =  [1, 5, 1, 1, 1, 10, 15, 20, 100];

const minChange = (coins) => {
  const sortedCoins = coins.sort((a,b) => a - b);
  let minChange = sortedCoins[0];
  for (let coin of coins) {
    if (coin > minChange) {
      minChange + 1;
      break;
    }
    minChange += coin;
  }
  return minChange;
};

console.log(minChange(testCoins)); 