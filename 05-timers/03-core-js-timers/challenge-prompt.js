// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function alertTime () {
    alert("Question 1");
  }
  setTimeout(alertTime, 5000);

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function alertTwo () {
    alert("Question 2");
  }
  var timeOutTwo = setTimeout(alertTwo, 15000);


// Remove the timer you just made for Question 2

clearTimeout(timeOutTwo)

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

var timeOutThreeOne = setTimeout(function() {alert("question 3 part 1")},15000)

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
var timeOutThreeTwo = setTimeout(function() {alert("question 3 part 2")},16000)


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(timeOutThreeTwo)

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"


function timerFive() {
    console.log("question 5 complete")

}
setTimeout(timerFive,11000)