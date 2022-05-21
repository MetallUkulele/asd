function compareArrays(arr1, arr2) {  

  const result = arr2.every(value => {
    return  arr1.length === arr2.length && arr1.indexOf(value) === arr2.indexOf(value);
  })

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr
  
  .filter(value => value > 0 && value % 3 === 0)

  .map (value => {
    return value * 10;
  }); 

  return resultArr; // array
}
