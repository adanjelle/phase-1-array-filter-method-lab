// Code your solution here
function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

const drivers = ['John', 'Jane', 'Doe', 'Alice', 'Bob'];
console.log(findMatching(drivers, 'jOhn'));
console.log(fuzzyMatch(drivers, 'ja')); 
console.log(matchName([{ name: 'John', hometown: 'NYC' }, { name: 'Jane', hometown: 'LA' }], 'John'));

