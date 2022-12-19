const testArray = [-10, -5, 0, 5, 10];
const sortSquareArray = (array) => array.map(num => num**2).sort((a,b) => a - b);

console.log(sortSquareArray(testArray));