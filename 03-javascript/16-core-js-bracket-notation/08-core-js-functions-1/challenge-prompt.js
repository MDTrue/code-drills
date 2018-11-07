// define a function "fun" that console logs "Functions are FUN!"

function fun(){

console.log("Functions are fun!")
}
// before moving on, open index.html and see what console logs have been made.
// why doesn't "Functions are FUN! appear yet?"
/*

the function has not been called

*/


// define a function "thirtySeven" that console logs the sum of 18 and 19

function thirtySeven(){
    console.log(18 + 19);
}


// call two functions you've defined so far

fun()
thirtySeven()
// define a function "log" that takes in an argument and console logs that argument

function log(item){
    console.log(item)
}


// define a function "hello" that calls on the "log" function to console log "Hello World"

function hello(){
    console.log("Hello World")
}

// call your "hello" function
hello();


// define a function "popUp" that creates an alert that says "This is an alert."
function popUp(){
    alert("this is an alert");
}


// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."
function noPopUp(){
    alert("Okay, you won't get a pop up.");
}



// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response
function goodDay(){
    var niceDay = confirm("Are you haveing a good day?");
    console.log(niceDay)
}


// call your "goodDay" function
goodDay();


// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function
function userPopUp(){
    var answer = confirm("Would you like a pop up?");
        if(answer) {
            popUp();
        }
    else noPopUp();
}


// call your "userPopUp" function
popUp();


// define a function "userName" that prompts the user for their name and then 
// uses your "log" function to display the response
function userName(){
    var response = prompt("What is your username?");
        log(response);
}



// call your "userName" function

userName();
// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response

function favoriteFruit(){
    var myFruit = prompt("What is your favorite fruit?");
    alert(myFruit);
}



// call your "favoriteFruit" function
favoriteFruit();



