var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element) {
  var begArray = [element, ...array]
  return array
}