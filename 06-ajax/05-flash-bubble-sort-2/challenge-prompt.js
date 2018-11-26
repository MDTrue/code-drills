// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements


function bubbleSortTwo(arr) {
    // ================= code goes here ===========================

    var toSort = arr.length;
    do {
        var swapBoolean = false;
        for (var j = 1; j < toSort ; j++){
            if(arr[j] < arr[j-1]){
                var hold = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = hold;
                swapBoolean = true

            }
        }
        toSort --;
    } while (swapBoolean);
    return arr
    









    
    // ============================================================
}


var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge)
