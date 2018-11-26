// Day 01
// Activity 01

$(function () {
// wait for the DOM to finish loading (document.ready)


  // Create a click listener for the submit button
    document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault() 
    $("#display").empty();
    var userFirst = $("#firstNameField").val() 
    var userLast = $("#lastNameField").val()
    var userOccupation = $("#occupationField").val()
    var userCity = $("#cityField").val()
    var userState = $("#stateField").val()
    
    console.log(userFirst)
    console.log(userLast)
    console.log(userOccupation)
    console.log(userCity)
    console.log(userState)
    
    $("#firstNameField").val("");
    $("#lastNameField").val("");
    $("#occupationField").val("");
    $("#cityField").val("");
    $("#stateField").val("");
    
    $("#display").append("<div id = 'fullName'></div>")
    $("#fullName").append(userFirst + " " + userLast)
    $("#display").append("<div id = 'occupationName'></div>")
    $("#occupationName").append(userOccupation)
    $("#display").append("<div id = 'locationName'></div>")
    $("#locationName").append(userCity +", "+ userState)
  });
    // stop the default behavior of the submit button



    // pull the values off the user input form and store them in seperate variables



    // clear the form after we're done storing the values



    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs



    // empty the display area and display the divs we just created in the display area

  })
