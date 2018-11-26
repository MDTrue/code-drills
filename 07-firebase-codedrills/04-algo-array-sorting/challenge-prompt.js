// Odd ones out


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------
function swap(arr, index1, index2) {
  var hold = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = hold;
}
function sortAscend(arr) {
  var swapped;
  do {
    swapped = false;
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        swapped = true
      }
    }
  } while (swapped)
}
function sortDescend(arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    for (var k = 0; k < (arr.length - 1) - j; k++) {
      if (arr[k + 1] > arr[k]) {
        swap(arr, k, k + 1)
      }
    }
  }
}


// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------
  var holdOdd = []
  var holdEven = []
  for (var j = 0; j < arr.lenght; j++) {
    if (arr[j] % 2 === 0) {
      holdEven.push(arr[j])
    }
    else {
      holdOdd.push(arr[j])
    }
  }
  sortAscend(holdEven)
  // console.log(holdEven)

  sortDescend(holdOdd)
  // console.log(holdOdd)
  return holdEven.concat(holdOdd)


  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));