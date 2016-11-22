// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
      var array = ["rock","scissors","paper"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    var  random = Math.floor(Math.random()*3);
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
         var Waffles =   array[random];
    // Task 1, Step 4: return this new value
     return(Waffles);
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.


var pickWinner = function (userChoice, computerChoice) {
    var winner=null;
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    
    
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    
    if ( (userChoice == "paper" && computerChoice == "paper") || 
        (userChoice == "rocks" && computerChoice == "rocks")||
        (userChoice == "scissors" && computerChoice == "scissors") ) { 
        winner ="Tie";
    }
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"
    else if( (userChoice == "paper" && computerChoice== "rock") || 
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "scissors" && computerChoice == "paper") ){
        winner= "User wins";
    }
    
    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
    else{
        winner= "computer wins";
    } 
    console.log (winner);
    return winner;
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
   // var userChoice = "rock";
   
$( ".choice" ).click(function() {
  console.log($(this).text()); 
  var userChoice= $(this).text();
  var computerChoice = generateComputerChoice();

  var result=pickWinner(userChoice,computerChoice );
  $('#winner').text(result);
  $('#computer-choice').text(computerChoice); 
});





    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
   // pickWinner(userChoice, computerChoice);

});