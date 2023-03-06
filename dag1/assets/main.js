const apple = "assets/images/apple.png";
const banana = "assets/images/banana.png";
const lemon = "assets/images/lemon.png";
const mango = "assets/images/mango.png";
const orange = "assets/images/orange.png";
const pineapple = "assets/images/pineapple.png";
const crown = "assets/images/crown.png";
const fruits = [apple, banana, lemon, mango, orange, pineapple, crown];
let randomnum;
let points = 0;
let totpoints = 0;
let img1;
let img2;
let img3;
let point = new Audio("assets/sounds/point.mp3");
let extra = new Audio("assets/sounds/ExtraPoint.mp3");
let spin = new Audio("assets/sounds/spin.mp3");
function fruitPicker(){
    randomnum = Math.floor(Math.random() * (7 - 1 + 1) + 0);
    document.getElementById("img1").src = fruits[randomnum];
    img1 = randomnum;
    randomnum = Math.floor(Math.random() * (7 - 1 + 1) + 0);
    document.getElementById("img2").src = fruits[randomnum];
    img2 = randomnum;
    randomnum = Math.floor(Math.random() * (7 - 1 + 1) + 0);
    document.getElementById("img3").src = fruits[randomnum];
    img3 = randomnum;
    points = 0;
    extraPoints();
    clacPoints();
    showPoints();
}
function clacPoints(){
    if(img1 == 0){
        points += 10;
        totpoints += 10;
    }else if(img1 == 1){
        points += 20;
        totpoints += 20;
    }
    else if(img1 == 2){
        points += 30;
        totpoints += 30;
    }
    else if(img1 == 3){
        points += 40;
        totpoints += 40;
    }
    else if(img1 == 4){
        points += 50;
        totpoints += 50;
    }
    else if(img1 == 5){
        points += 100;
        totpoints += 100;
    }
    else if(img1 == 6){
        points += 250;
        totpoints += 250;
    }
    if(img2 == 0){
        points += 10;
        totpoints += 10;
    }else if(img2 == 1){
        points += 20;
        totpoints += 20;
    }
    else if(img2 == 2){
        points += 30;
        totpoints += 30;
    }
    else if(img2 == 3){
        points += 40;
        totpoints += 40;
    }
    else if(img2 == 4){
        points += 50;
        totpoints += 50;
    }
    else if(img2 == 5){
        points += 100;
        totpoints += 100;
    }
    else if(img2 == 6){
        points += 250;
        totpoints += 250;
    }
    if(img3 == 0){
        points += 10;
        totpoints += 10;
    }else if(img3 == 1){
        points += 20;
        totpoints += 20;
    }
    else if(img3 == 2){
        points += 30;
        totpoints += 30;
    }
    else if(img3 == 3){
        points += 40;
        totpoints += 40;
    }
    else if(img3 == 4){
        points += 50;
        totpoints += 50;
    }
    else if(img3 == 5){
        points += 100;
        totpoints += 100;
    }
    else if(img3 == 6){
        points += 250;
        totpoints += 250;
    }
}
function extraPoints(){
    if(img1 == 6){
        document.getElementById("img1").style = "background-color: yellow;"
        points += 5;
        totpoints += 5;
        extra.play();
    }else{
        document.getElementById("img1").style = "background-color: none;"
        point.play();
    }
    if(img2 == 6){
        document.getElementById("img2").style = "background-color: yellow;"
        points += 5;
        totpoints += 5;
        extra.play();
    }else{
        document.getElementById("img2").style = "background-color: none;"
        point.play();
    }
    if(img3 == 6){
        document.getElementById("img3").style = "background-color: yellow;"
        points += 5;
        totpoints += 5;
        extra.play();
    }else{
        document.getElementById("img3").style = "background-color: none;"
        point.play();
    }
    if(img1 == img2){
        document.getElementById("img1").style = "background-color: yellow;"
        document.getElementById("img2").style = "background-color: yellow;"
        points += 5;
        totpoints += 5;
        extra.play();
    }
    else if(img1 != img2 && img1 != 6 && img2 != 6){
        document.getElementById("img1").style = "background-color: none;"
        document.getElementById("img2").style = "background-color: none;"
        point.play();
    }
    if(img2 == img3){
        document.getElementById("img2").style = "background-color: yellow;"
        document.getElementById("img3").style = "background-color: yellow;"
        points += 5;
        totpoints += 5;
        extra.play();
    }
    else if(img2 != img3 && img2 != 6 && img3 != 6){
        document.getElementById("img2").style = "background-color: none;"
        document.getElementById("img3").style = "background-color: none;"
        point.play();
    }
}
function showPoints(){
    document.getElementById("score").innerHTML = "current score = " + points;
    document.getElementById("totscore").innerHTML = "total score = " + totpoints;
}