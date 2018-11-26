// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

var count = 0
function bubbleSort(arr) {
// ================= code goes here ===========================

for(var j = 0;j < arr.length; j++){
    if(arr[j]<arr[j+1]){
        var hold = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = hold
        count ++
        if(count !=0){
            j = 0
        }
    }
        
    
}

// for (var i = arr.length - 1; i >= 0; i--) {
//     for (var j = 1; j <= i; j++) {
//         if (arr[j - 1] < arr[j]) {
//             var placeHolderVar = arr[j - 1];
//             arr[j - 1] = arr[j];
//             arr[j] = placeHolderVar;
//         }
//     }
// }
// return arr;






// ============================================================
}

var testArray = [34, 23, 3, 20, 84, 18, 76, 9];
testArray = bubbleSort(testArray);
console.log(testArray);