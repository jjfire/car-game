canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.gif";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.gif";
car2_x = 10;
car2_y = 10;

background_image="7.webp"

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1();
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2();
    car2_imgTag.src = car2_image;
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        uploadcar1_up();
        console.log("up arrow key");
    }
    if (keyPressed == '40') {
        uploadcar1_down();
        console.log("down arrow key");
    }
    if (keyPressed == '37') {
        uploadcar1_left();
        console.log("left arrow key");
    }
    if (keyPressed == '39') {
        uploadcar1_right();
        console.log("right arrow key");
    }
     if (keyPressed == '87') {
            uploadcar2_up();
            console.log("key w");
        }
     if (keyPressed == '83') {
            uploadcar2_down();
            console.log("key s");
        }
     if (keyPressed == '65') {
            uploadcar2_left();
            console.log("key a");
        }
    if (keyPressed == '68') {
            uploadcar2_right();
            console.log("key d");
    }
    if(car1_x > 700)
{
    console.log("car1 won")
    document.getElementById('game_status').innerHTML= "Car1 won!!"
}
if(car2_x > 700)
{
    console.log("car2 won")
    document.getElementById('game_status').innerHTML= "Car2 won!!"
}
}

function uploadcar1_up() {
    if (car1_y>= 0) {
        car1_y -= 10;
        console.log("When up arrow is pressed = " + car1_x + " - " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function uploadcar1_down() {
    if (car1_y <= 500) {
        car1_y += 10;
        console.log("When down arrow is pressed, x = " + car1_x + " - " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function uploadcar1_left() {
    if (car1_x >= 10) {
        car1_x -= 10;
        console.log("When left arrow is pressed = " + car1_x + " - " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function uploadcar1_right() {
    if (car1_x <= 700) {
        car1_x += 10;
        console.log("When right arrow is pressed = " + car1_x + " - " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function uploadcar2_up() {
    if (car2_y>= 0) {
        car2_y -= 10;
        console.log("When up arrow is pressed = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function uploadcar2_down() {
    if (car2_y <= 500) {
        car2_y += 10;
        console.log("When down arrow is pressed, x = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function uploadcar2_left() {
    if (car2_x >= 10) {
        car2_x -= 10;
        console.log("When left arrow is pressed = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function uploadcar2_right() {
    if (car2_x <= 700) {
        car2_x += 10;
        console.log("When right arrow is pressed = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
