function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === stopValue){
      break;
    }array[i] = `${changeValue}`;
  } return array.join();
}

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === skipValue){
      continue;
    }
    array[i] = `${changeValue}`;
  }
  return array.join();
}

1) loops findBy(array, findFn) finds the a value that satisfies `findFn`:
     Error: Expected undefined to equal 38
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:25:59)