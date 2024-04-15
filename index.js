
const drivers = [
    { name: 'Bobby' },
    { name: 'Sammy' },
    { name: 'Sally' },
    { name: 'Annette' },
    { name: 'Bobby' }
  ];
  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.name && driver.name.toLowerCase() === name.toLowerCase())
                  .map(driver => driver.name);
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.name && driver.name.toLowerCase().startsWith(letters.toLowerCase()))
                  .map(driver => driver.name);
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
                  .map(driver => driver.name);
  }
  

  
  