function compareArrays(arr1, arr2) { 
  let result;
  
  if (arr1.length === arr2.length) {
    result = arr2.every((value, idx) => value / arr1[idx] === 1);
  } else {
    result = false;
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr  
  .filter(value => value > 0 && value % 3 === 0)
  .map (value => value * 10); 

  return resultArr; // array
}
