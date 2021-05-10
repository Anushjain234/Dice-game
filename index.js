var randomNumber1 = Math.floor(Math.random()* 6) + 1;

var randomDiceimage = "dice" + randomNumber1 + ".png";

var randomImagesource = "images/" + randomDiceimage;

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomImagesource)

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomDiceimage = "dice" + randomNumber2 + ".png";

var randomImagesource = "images/" + randomDiceimage;

var images1 = document.querySelectorAll("img")[1];

images1.setAttribute("src", randomImagesource);



if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
}
else if(randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"

}
