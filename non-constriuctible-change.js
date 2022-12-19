const testCoins = [5, 7, 1, 1, 2, 3, 22];
// const testCoins = [1,2,5];

const minChange = (coins) => {
  const maximumChange = coins.reduce((result, number) => {
    return result + number;
  },0);
  const sortedCoins = coins.sort((a,b) => a - b);
  console.log(sortedCoins);
  let minChange = sortedCoins[0];
  for (let i = 0; i<= sortedCoins.length; i++) {
    const coin = sortedCoins[i];
    if (sortedCoins.includes(coin) || coin + sortedCoins[i-1] === minChange ) {
      minChange++;
    }
    else {
      break;
    }
  }

  console.log(minChange);


  // const possibleChanges = Array.from(
  //   { length: maximumChange },
  //   (_elem, idx) => idx + 1
  // );
  // const result = possibleChanges.reduce((result, item, idx) => {
  //   const shouldIterate = coins.includes(result) 
  //     || 
  //   if (shouldIterate) {
  //     result = possibleChanges[idx + 1]
  //   }
  //   console.log(result);
  //   return result;
   
  // }, possibleChanges[0])
  // // console.log(result);
  // // return minChange(sortedCoins)
};

minChange(testCoins);