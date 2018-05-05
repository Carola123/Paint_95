var stage = document.createElement('canvas');
var stageColor = "rgba(255, 255, 255, 1)";
stage.style.height = "500px";
stage.style.width = "500px";
stage.style.background = stageColor;
stage.style.border = "2px solid black";
document.body.appendChild(stage);

var mouseDown = false;
var ctx = stage.getContext("2d");

//Tools
var colorsBox = document.createElement("div");
colorsBox.style.height = "20px";
colorsBox.style.width = "500px";
colorsBox.style.marginTop = "-3px";
colorsBox.style.backgroundColor = "grey";
colorsBox.style.border = "1px solid black";
colorsBox.setAttribute("id", "colorsBox");
document.body.appendChild(colorsBox);

function insertTool (element, c){
element.style.background = c;
element.style.border = "2px solid #000";
element.style.width = "20px";
element.style.height = "20px";
element.style.display = "inline-block"
document.body.appendChild(element);
}

var color1 = "red", color2 = "yellow", color3 = "blue",color4 = "green", color5 = "pink", activeColor = color1;
var toolColor1 = document.createElement('div');
var toolColor2 = document.createElement('div');
var toolColor3 = document.createElement('div');
var toolColor4 = document.createElement('div');
var toolColor5 = document.createElement('div');
var erase = document.createElement('div');
var img = document.createElement("img");
insertTool(toolColor1, color1);
insertTool(toolColor2, color2);
insertTool(toolColor3, color3);
insertTool(toolColor4, color4);
insertTool(toolColor5, color5);
insertTool(erase, "white");

img.src = "http://icons.iconarchive.com/icons/iconsmind/outline/256/Pen-icon.png";
img.style.width = "30px";
img.style.height = "30px";
img.style.display = "inline-block";
document.body.appendChild(img);


//Events
toolColor1.addEventListener("click", function(){
	activeColor = color1;
	console.log(activeColor);
}, false);

toolColor2.addEventListener("click", function(){
	activeColor = color2;
	console.log(activeColor);
}, false);

toolColor3.addEventListener("click", function(){
	activeColor = color3;
	console.log(activeColor);
}, false);

toolColor4.addEventListener("click", function(){
	activeColor = color4;
	console.log(activeColor);
}, false);

toolColor5.addEventListener("click", function(){
	activeColor = color5;
	console.log(activeColor);
}, false);

erase.addEventListener("click", function(){
	activeColor = stageColor;
	console.log(activeColor);
}, false);

function getMousePosition(eve){
	var stgData = stage.getBoundingClientRect();
	return{
		x: (eve.clientX - stgData.left),
		y: (eve.clientY - stgData.top)
	}
}

function draw(x, y){
ctx.lineTo(x, y);
ctx.strokeStyle = activeColor;
ctx.lineWidth = 20;
ctx.stroke();
stage.style.cursor = "pointer";
}

stage.addEventListener("mousemove", function(eve){
	var axi = getMousePosition(eve);
	if(mouseDown)
		draw(axi.x, axi.y);
}, false);

stage.addEventListener("mousedown", function(eve){
	var axi = getMousePosition(eve);
	ctx.beginPath();
	ctx.moveTo(axi.x, axi.y);
	mouseDown = true;
}, false);

stage.addEventListener("mouseup", function(eve){
mouseDown = false;
}, false);

