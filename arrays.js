var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element) {
  var begArray = [element, ...array]
  return begArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}


function addElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var endArray = [...array, element];
  return endArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index){
return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return 
}

function removeElementFromBeginningOfArray(array){
  array.shift(array)
  return array
}