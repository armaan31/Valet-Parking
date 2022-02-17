canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var cw=75;
var ch=100;
var cx=5;
var cy=225;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
function add() {
	bgimg = new Image();
    bgimg.onload=uploadBackground;
    bgimg.src="parkingLot.jpg";
    cimg = new Image();
    cimg.onload=uploadCar;
    cimg.src="car2.png";
}
function uploadBackground() {
	ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
	ctx.drawImage(cimg, cx, cy, cw, ch);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == "38")
		{
			up();
			console.log("up");
		}
		if(keyPressed=="40")
		{
			down();
			console.log("down");
		}
		if(keyPressed == "37")
		{
			left();
			console.log("left");
		}
		if(keyPressed == "39")
		{
			right();
			console.log("right");
		}
}
function up(){
	if (cy>=0){
        cy=cy-10;
        uploadBackground();
        uploadCar();
    }
}
function down()
{
	if (cy<=400){
        cy=cy+10;
        uploadBackground();
        uploadCar();
    }
}
function left()
{
	if (cx>=0){
        cx=cx-10;
        uploadBackground();
        uploadCar();
    }
}

function right()
{
	if (cx<=800){
        cx=cx+10;
        uploadBackground();
        uploadCar();
    }
}
