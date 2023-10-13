let gamePattern = []
let userPattern = []
let level = 1;
start=false;
 
$(".start").on("click",function () {
   if(!start){
   
         nextSequence();
         start=true;
         $(".start").css("visibility","hidden");
   }



});


function nextSequence() {
   userPattern=[];
   $("h1").text("Level " + level); 
   level++;
   let randomnum = Math.floor(Math.random() * 4);
   let colors = ["red", "blue", "green", "yellow"];
   let chosenColor = colors[randomnum];
   gamePattern.push(chosenColor);
   $("." + chosenColor).delay(50).fadeOut().fadeIn();
   playSound(chosenColor);


}
if(start){
   
}

$(".btn").on("click", function () {
   userColor = $(this).attr("id");
   userPattern.push(userColor);
   playSound(userColor);
   animatePress(userColor);

   checkAnswer(userPattern.length - 1);


})
function checkAnswer(currentLevel) {
   if (userPattern[currentLevel] === gamePattern[currentLevel]) {
      console.log("success");
      if(userPattern.length===gamePattern.length){
         setTimeout(function(){
            nextSequence();
         },1000);
      }
   }
   else {
      console.log("nope");
      $("h1").html("Game Over!!!<br><br>Press Restart");
      let gameover = new Audio("sounds/wrong.mp3");
      gameover.play();
      $("body").addClass("game-over")
     setTimeout(function(){
      $("body").removeClass("game-over");
     },300);
     gameReset();
     start=false;
     $(".start").css("visibility","visible");
     $(".start").text("RESTART");


   }

}
function playSound(name) {
   let userSound = new Audio("sounds/" + name + ".mp3");
   userSound.play();
}
function animatePress(currentColor) {
   $("." + currentColor).addClass("pressed");
   setTimeout(function () {
      $("." + currentColor).removeClass("pressed");
   }, 100);
}

function gameReset(){
   level=1;
   userPattern=[];
   gamePattern=[];
}
