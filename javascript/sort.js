/*
 * Basic implementation of sorting algorithms.
 * Based on the book: Introduction to Algorithms - (https://mitpress.mit.edu/books/introduction-algorithms)
 *
 * All implementations here take as input a single unordered array of integers
 * No input validation is performed
 */


function insertionSort(arr) {
  if ( arr.length <= 1 ) return arr;
  for (var j=1; j<arr.length; j++) {
    var key = arr[j],
        idx = j - 1;
    while (idx>=0 && arr[idx]>key) {
      arr[idx + 1] = arr[idx];
      idx--;
    }
    arr[idx + 1] = key;
  }
  return arr;
}

module.exports = {
  'insertionSort': insertionSort
}


