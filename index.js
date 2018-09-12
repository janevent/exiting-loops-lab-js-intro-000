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
     Error: Expected