let randomnum;
let nums = [];
let extranums = [];
let game, numbers, extranumbers, rows;
let gen = new Audio("assets/sounds/gen.mp3");
let extra = new Audio("assets/sounds/extra.mp3");
function gameCheck(){
    game = document.getElementById("game").value;
    if(game == 1){
        document.getElementById("numbers").max = 7;
        document.getElementById("extranumbers").max = 1;
        lotto();
    }else if(game == 2){
        document.getElementById("numbers").max = 5;
        document.getElementById("extranumbers").max = 2;
        euroJackpot();
    }else if(game == 3){
        document.getElementById("numbers").max = 6;
        document.getElementById("extranumbers").max = 1;
        vikingLotto();
    }else if(game == 4){
        document.getElementById("numbers").max = 10;
        document.getElementById("extranumbers").max = 0;
        document.getElementById("extranumbers").value = 0;
        keno();
    }
    if(extranums.length > 0){
        extra.play();
    }else{
        gen.play();
    }
}
function lotto(){
    numbers = document.getElementById("numbers").value;
    extranumbers = document.getElementById("extranumbers").value;
    rows = document.getElementById("rows").value;
    if(numbers > 7){
        numbers = 7;
        document.getElementById("numbers").value = 7;
    }
    if(extranumbers > 1){
        extranumbers = 1;
        document.getElementById("extranumbers").value = 1;
    }
    for(a = 1; a <= rows; a++){
        for(i = 0; i < numbers; i++){
            randomnum = Math.floor(Math.random() * (40 - 1 + 1) + 1);
            nums[i] = randomnum;
            nums.length = numbers;
        }
        for(i = 0; i < extranumbers; i++){
            randomnum = Math.floor(Math.random() * (40 - 1 + 1) + 1);
            extranums[i] = randomnum;
            extranums.length = extranumbers;
        }
        if(a == 1){
            document.getElementById("dis1").innerHTML = nums + "<br>";
            document.getElementById("dis2").innerHTML = extranums + "<br>";
        }else{
            document.getElementById("dis1").innerHTML += nums + "<br>";
            document.getElementById("dis2").innerHTML += extranums + "<br>";
        }
    }
}
function euroJackpot(){
    numbers = document.getElementById("numbers").value;
    extranumbers = document.getElementById("extranumbers").value;
    rows = document.getElementById("rows").value;
    if(numbers > 5){
        numbers = 5;
        document.getElementById("numbers").value = 5;
    }
    for(a = 1; a <= rows; a++){
        for(i = 0; i < numbers; i++){
            randomnum = Math.floor(Math.random() * (50 - 1 + 1) + 1);
            nums[i] = randomnum;
            nums.length = numbers;
        }
        for(i = 0; i < extranumbers; i++){
            randomnum = Math.floor(Math.random() * (50 - 1 + 1) + 1);
            extranums[i] = randomnum;
            extranums.length = extranumbers;
        }
        if(a == 1){
            document.getElementById("dis1").innerHTML = nums + "<br>";
            document.getElementById("dis2").innerHTML = extranums + "<br>";
        }else{
            document.getElementById("dis1").innerHTML += nums + "<br>";
            document.getElementById("dis2").innerHTML += extranums + "<br>";
        }
    }
}
function vikingLotto(){
    numbers = document.getElementById("numbers").value;
    extranumbers = document.getElementById("extranumbers").value;
    rows = document.getElementById("rows").value;
    if(numbers > 6){
        numbers = 6;
        document.getElementById("numbers").value = 6;
    }
    if(extranumbers > 1){
        extranumbers = 1;
        document.getElementById("extranumbers").value = 1;
    }
    for(a = 1; a <= rows; a++){
        for(i = 0; i < numbers; i++){
            randomnum = Math.floor(Math.random() * (48 - 1 + 1) + 1);
            nums[i] = randomnum;
            nums.length = numbers;
        }
        for(i = 0; i < extranumbers; i++){
            randomnum = Math.floor(Math.random() * (48 - 1 + 1) + 1);
            extranums[i] = randomnum;
            extranums.length = extranumbers;
        }
        if(a == 1){
            document.getElementById("dis1").innerHTML = nums + "<br>";
            document.getElementById("dis2").innerHTML = extranums + "<br>";
        }else{
            document.getElementById("dis1").innerHTML += nums + "<br>";
            document.getElementById("dis2").innerHTML += extranums + "<br>";
        }
    }
}
function keno(){
    numbers = document.getElementById("numbers").value;
    extranumbers = document.getElementById("extranumbers").value;
    rows = document.getElementById("rows").value;
    for(a = 1; a <= rows; a++){
        for(i = 0; i < numbers; i++){
            randomnum = Math.floor(Math.random() * (70 - 1 + 1) + 1);
            nums[i] = randomnum;
            nums.length = numbers;
        }
        for(i = 0; i <= extranumbers; i++){
            randomnum = Math.floor(Math.random() * (70 - 1 + 1) + 1);
            extranums[i] = randomnum;
            extranums.length = 0;
        }
        if(a == 1){
            document.getElementById("dis1").innerHTML = nums + "<br>";
            document.getElementById("dis2").innerHTML = extranums + "<br>";
        }else{
            document.getElementById("dis1").innerHTML += nums + "<br>";
            document.getElementById("dis2").innerHTML += extranums + "<br>";
        }
    }
}
gameCheck();