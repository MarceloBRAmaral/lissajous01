//canvas definition
var document;var window;var init;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//get canvas dimensions
var canvasWidth = canvas.width;
var canvasHeigth = canvas.height;

var centerX = canvasWidth/2;
var centery = canvasHeigth/2;
var xangle = 0;
var yangle = 0;
var xspeed = 0.1;
var yspeed = 0.131;
var speed = 0.5;//world speed
var x = 0;
var y = 0;

//clear canvas function
var clearCanvas = function () {
    //ctx.fillStyle = "white";
	ctx.clearRect(0,0,canvasWidth,canvasHeigth);
    ctx.beginPath();//only this can remove stroke
};

var main = function(){
    init = window.requestAnimationFrame(main);
    
    clearCanvas();
    
    x = centerX + Math.cos(xangle)*centerX;
    y = centery + Math.sin(yangle)*centery;
    ctx.arc(x,y,5,0,Math.PI*2,false);
    ctx.fill();
    xangle+=xspeed*speed;
    yangle+=yspeed*speed;
};
main();