// define a function "warble" that takes in a string as an argument,
// appends " arglebargle" to the end of it, and returns the result

function warble(string){
    var phrase = string + " arglebargle";
    return phrase;
}


// console log the result of calling your "warble" function with the argument "hello"
var phrase = warble("hello");{
    console.log(phrase)
}


// define a function "wibble" that takes a string as an argument,
// console logs the argument, prepends "wibbly " to the argument, and returns the result

function wibble(string){
    console.log(string);
    return "wibbly " + string;

}


// console log the result of calling your "wibble" function with the argument "bibbly"

var result = wibble("bibbly");{
    console.log(result);
}

// define a function "consoleSum" that takes in two numbers as arguments
// and console logs the sum of those two numbers
function consoleSum(a,b){
    var total = a + b;
    console.log(total);
}



// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 5");
consoleSum(2, 3);

// define a function "returnSum" that takes in two numbers as arguments
// and returns the sum of those two numbers

function returnSum(num1, num2){
    return num1 + num2;
}


// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 12");
console.log(returnSum(5, 7));

// using either "consoleSum" or "returnSum" and no mathematical operators,
// define a function that takes in 3 arguments and finds the sum of those 3 numbers


function threeSum(num1,num2,num3){
    var twoSum = returnSum(num1,num2);
    var megaSum = returnSum(twoSum, num3);
    return (megaSum);
}

// console.log("The following should be 25");
// console.log(threeSum(12, 4, 9));

// define a function "danceParty" that takes in a string as an argument,
// creates an alert that says "dance!",
// saves the result of calling your "wibbly" function with that argument,
// saves the result of calling your "warble" function with that argument,
// concatenates the two results together and returns that string

function danceParty(str) {
alert("dance");
var name1 = wibble(str);
var name2 = warble(str);
var name3 = name1 + " " +name2;
return name3;
}
// console log the result of calling your "danceParty" function with your name as the argument

console.log(danceParty("Mike"));
