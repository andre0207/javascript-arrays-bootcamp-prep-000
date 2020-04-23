var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToBeginningOfArray(array, element) {
  var begArray = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  array.push();
}