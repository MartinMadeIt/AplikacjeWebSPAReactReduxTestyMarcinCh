const getMedium = arr => arr.reduce((acc, cur) => acc + cur, 0)/arr.length;

const distFromAverage= arr => arr.map(nr => Math.abs(nr - getMedium(arr)));

const multiply = array => array.reduce((acc, cur) => acc * cur, 1);

const getEvenAverage = array => {
  const odds = array.filter(n => n % 2 === 0);
  return odds.length > 0 ? getMedium(odds) : null
}

// console.log(distFromAverage([1,2,3,4,5,6,7]))
// console.log(multiply([1,2,3,4,5,6,7]))
// console.log(getEvenAverage([1,2,3,4,5,6,7]))
// console.log(getEvenAverage([1,1, 1, 1]))