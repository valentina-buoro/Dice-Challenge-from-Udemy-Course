var randomNumber1 = Math.random(); //CREATED A RANDOM NUMBER USING THE Math.random() 
randomNumber1 = randomNumber1 * 6 //MULTIPLIED BY 6 BECAUSE THERE ARE 6 SIDES TO THE DICE
randomNumber1 = Math.floor(randomNumber1) + 1; //ADDED 1 TO GIVE A NUMBER BETWEEN 1-6 BECAUSE Math.random() GIVES A NUMBER BETWWEN 0-0.99999

var randomImage = "dice"+randomNumber1+".png"; //CREATED A NEW VARIABLE TO CONTAIN THE IMAGE
var randomImageSource = "images/"+randomImage; //TO GET IMAGE SOURCE

var image1 = document.querySelectorAll("img")[0]; //TO SET THE IMAGE TO THE NEW IMAGE SOURCE
image1.setAttribute("src", randomImageSource);

//REPEATED THE SAME STEPS FOR THE SECOND IMAGE
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber1+".png";
var randomImageSource2 = "images/"+randomImage2;

var image1 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

// TO CHANGE THE TEXT WHEN EACH PLAYER WINS
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!"
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!"
}