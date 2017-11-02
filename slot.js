var nameText = document.getElementById("name");
var difficultySetting = document.getElementById("select-difficulty");
var themeSetting = document.getElementById("select-theme");
var startButton = document.getElementById("start-game");
var startDiv = document.querySelector(".screen-on");
var gameDiv = document.querySelector(".screen-off");



startButton.addEventListener("click", function(){
    if(nameText.value != ""){
        startDiv.className = "screen-off";
        gameDiv.className = "screen-on";
    } else {
        alert("Enter Player Name to Start");
    }
});