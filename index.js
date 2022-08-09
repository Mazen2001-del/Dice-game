
var randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber) + 1;

var randomDiceImage = "dice" +randomNumber+ ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSrc);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImage2 = "dice" +randomNumber2+ ".png";
var randomImageSrc2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSrc2);



// Dice 1
// if(randomNumber === 1){
//   document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
// }
//
// if(randomNumber === 2){
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
// }
//
// if(randomNumber === 3){
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
// }
//
// if(randomNumber === 4){
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
// }
//
// if(randomNumber === 5){
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
// }
//
// if(randomNumber === 6){
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
// }
// //
// // Dice 2
// if(randomNumber2 === 1){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
// }
//
// if(randomNumber2 === 2){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
// }
//
// if(randomNumber2 === 3){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
// }
//
// if(randomNumber2 === 4){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
// }
//
// if(randomNumber2 === 5){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
// }
//
// if(randomNumber2 === 6){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
// }

if(randomNumber>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(randomNumber<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else if(randomNumber===randomNumber2){
  document.querySelector("h1").innerHTML = "Draw";
}
