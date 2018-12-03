// Firebase Chat


  // Initialize Firebase

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------
  // console.log("hello")

  database.ref().on("child_added", function(childSnapshot){
    var chatItem = $("<p>")
  chatItem.text(childSnapshot.val())
  $("#chat-display").append(chatItem)
})
  $(document).on("click", "#chat-submit",function(event){
    event.preventDefault();
    var chatMessage = $("#chat-input").val().trim()

    $("#chat-input").val("") 

    database.ref().push(chatMessage)
  })
  

  // --------------------- End Code Area --------------------

})

