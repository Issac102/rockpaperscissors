// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function() {
   var userChoice = $("#input").val();
   $("#userChoice").text(userChoice)
    var computerChoice = Math.random(); 
    var choice = "";
   if (computerChoice < .333) {
choice = "paper"
}else if (computerChoice < .666) {
choice = 'scissors'
} else { 
choice = 'rock'
}
console.log(choice,computerChoice)
$("#computerChoice").text(choice);
if (userChoice===choice){
    $("#result").text("draw")
    console.log("draw")
}
});

