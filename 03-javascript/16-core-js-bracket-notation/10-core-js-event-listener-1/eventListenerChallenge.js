// declare the variable we're storing the confirm dialogue in
 var keyComfirm
var keyPressed

// create a key press listener

document.onkeypress = function(event){
     keyPressed = event.key.toLowerCase();

}
  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive


  // console log the key that the user pressed
console.log(keyPressed)

  // check whether the user pressed the "h" key
  if(keyPressed === "h"){
      keyConfirm = confirm("Would you like the K key to say hello?")
  }

    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener

   if(keyPressed === "k") { 
       if(keyComfirm === true){
       alert("HELLO!")

   }
   }
  // check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue