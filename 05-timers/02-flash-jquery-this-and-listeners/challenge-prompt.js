// Event Listeners and `this`

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
function createButton(str) {
  // ---------- Your Code Here ----------

  var buttonDiv = $("<button>");
  buttonDiv.addClass(" addedButton");
  buttonDiv.text  (str)
  buttonDiv.data  ("content", str)
  $("#button-area").append(buttonDiv);
 



  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  // ---------- Your Code Here ----------
var displayString = $(this).data("content");
$("#display-area").append(displayString);





  // ---------- End of Code area ----------
}



// document.ready shorthand
// Put your click listeners here.
$(function () {
  // ---------- Your Code Here ----------
  $(document).on("click", ".addedButton", displayContent);
  
  $(document).on("click", "#clear-button", function (event) {
    event.preventDefault();
    $("#display-area").empty()

     } )

  $(document).on("click", "submit-button", function (event) {
    event.preventDefault();
    var buttonStr = $("#user-input").val();
    $("#user-imput").val("")
    createButton(buttonStr)

  })

  // ---------- End of Code area ----------
})