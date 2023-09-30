let randomNum1 = Math.floor(Math.random()*6+1);
let diceImage1 = "images/dice"+randomNum1+".png";
let randomNum2 = Math.floor(Math.random()*6+1);
let diceImage2 = "images/dice"+randomNum2+".png";

document.querySelector(".img1").setAttribute("src",diceImage1);
document.querySelector(".img2").setAttribute("src",diceImage2);

if(randomNum1===randomNum2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 WINS!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 WINS!";
}