// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
var qOne;
function intSet(){
    qOne = setInterval(alertFunc,5000);
}
function alertFunc(){
    console.log("question 01")
}

// intSet()
// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
var qTwo;
function intSetTwo(){
    qTwo = setInterval(alertFunc,10000);
}
function alertFunc(){
    console.log("question 02")
}
intSetTwo()

// Clear the interval you made in this question

clearInterval(qTwo)

// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
var qThree
function intSetThree(){
    qThree = setInterval(appendFunc,2000)
}
function appendFunc(){
    $("#question-03").append("3")
}
intSetThree()

// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
var qFour
function intSetFour(){
    qFour = setInterval(emptyFunc,6000)
}
function emptyFunc(){
    $("#question-03").empty()
}

intSetFour()

// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var qFive
var qFiveB

function intSetFive(){
    qFive = setInterval(appendsFunc,1000)
    qFiveB =setInterval(clearFunc,5000)
}
function appendsFunc(){
    $("#question-05").append("5")
}
function clearFunc(){
    $("#question-05").empty()
}
intSetFive()
// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
var qSix
var qSixB

function intSetSix(){
    qSix = setInterval(appendedFunc,1000)
    qSixB =setInterval(clearsFunc,6000)
}
function appendedFunc(){
    $("#question-06").append("6")
}
function clearsFunc(){
    $("#question-06").empty()
}
intSetSix()


// Create a timer to clear the interval after 6 seconds



// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds

// setTimeout(function() {
//     clearInterval(question01)
//   }, 1000 * 10);
  //more concise way than how I was doing it
