var nameText = document.getElementById("name");
var difficultySetting = document.getElementById("select-difficulty");
var themeSetting = document.getElementById("select-theme");
var startButton = document.getElementById("start-game");
var startDiv = document.querySelector(".screen-on");
var gameDiv = document.querySelector(".screen-off");
var leverButton = document.getElementById("lever");
var displayOutput = document.getElementById("output-area");
var scoreTotal = document.getElementById("score");
var tokensDisplay = document.getElementById("tokens");
var tokensTotal = 10;
var Total = 0;
var bumpTokens = 0;
var emojis = ["emojiBeer", "emojiSmile", "emojiSurprise", "emojiTie", "emojiTongue"];
var dragons = ["dragon1", "dragon2", "dragon3", "dragon4", "dragon5"];


startButton.addEventListener("click", function(){
    
    if(nameText.value != ""){
        startDiv.className = "screen-off";
        gameDiv.className = "screen-on";
    } else {
        alert("Enter Player Name to Start");
    }
});

leverButton.addEventListener("click", function(){
    var maxNumber = 0;
    var numberArray = [];
 
 if (tokensTotal == 0){
     displayOutput.innerHTML = "<strong>Game Over</strong>";
     return;
 }   
    tokensTotal--;

    switch(difficultySetting.value){
        case "1": maxNumber = 2;
                  break;
        case "2": maxNumber = 3;
                  break;
        case "3": maxNumber = 5;
                  break;

    }
    
    displayOutput.innerHTML = "";
    
    for(var i=0; i<3; i++){
    numberArray[i] = getRandomNumber(0, maxNumber);
    //displayOutput.innerHTML += numberArray[i] + "  ";
    getSlotImages(numberArray[i]);
    
    }

    
    if (numberArray[0] == numberArray[1] && numberArray[0] == numberArray[2]) {
        displayOutput.innerHTML += "<br> Jackpot!!! <br>";
        Total += 100;
        bumpTokens = 100;
    
    } else {
        if((numberArray[0] == numberArray[1]) || (numberArray[0] == numberArray[2]) || (numberArray[1] == numberArray[2]) ){
            displayOutput.innerHTML += "<br> Two out of Three Ain't bad! <br>";
        Total += 25;
        bumpTokens += 25;
        }
    }
    
    if (bumpTokens == 100){
        displayOutput.innerHTML += "<br>You earned a token! <br>";
        tokensTotal++;
        bumpTokens = 0;
    }
    
    scoreTotal.innerHTML = Total;
    tokensDisplay.innerHTML = tokensTotal;

    

});

function getSlotImages(picNum){
    

    switch(themeSetting.value){
        case "1": displayOutput.innerHTML += '<img src="images/emojis/' + emojis[picNum] + '.png">';
                  break; 
        case "2": displayOutput.innerHTML += '<img src="images/Dragons/' + dragons[picNum] + '.png">';
                  break;
    
        
}
}