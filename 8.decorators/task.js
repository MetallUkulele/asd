function cachingDecoratorNew(func) {
  let cache =[];

  function wrapper(...args) {
    const hash = args.join(', ');

    let idx = cache.findIndex(element => element.hash === args.join(', '));

    if (idx !== -1) {
      console.log ("Из кэша: " + cache[idx].result);
      return "Из кэша: " + cache[idx].result
    } else {      
      let result = func(...args);
      cache.push({hash, result})
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }   
  };

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let isThrottled = true,     
      timeout;

  return function (...args) {    
    if (isThrottled) {
      func.apply(this, args);
      return isThrottled = false;
    } else if (isThrottled === false) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          func.apply(this, args);
        }, ms);
      }    
  };
}

function debounceDecorator2(func, ms) {  
  let isThrottled = true;
  let count = 0;     
  let timeout;

  function wrapper (...args) { 
    count += 1;
    wrapper.history = count;
    console.log(wrapper.history);  
    if (isThrottled) {
      func.apply(this, args);
      return isThrottled = false;
    } else if (isThrottled === false) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          func.apply(this, args);
        }, ms);
      }
  };
  return wrapper;
}
