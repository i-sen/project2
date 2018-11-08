
var phase = 0, speed = 0.07;
var mgr;
var quantity = 300;
var xPosition = [];
var yPosition = [];
var myFont;


function preload() {
    myFont = loadFont('Fragmentcore.otf');
}
function setup(){
	createCanvas(windowWidth,windowHeight);
  textFont(myFont);
  noStroke;
  a = height / 2;
  phase = 0;
  speed = 0.1;
  maxCircleSize = 9;
  numRows = 30;
  numCols = 30;
  numStrands = 1;
  colorA = color(253, 174, 120, 60);
  colorB = color(210, 100, 123);
}

function draw(){

	background(0);
	fill(255);
  textSize(60);
  // textFont(myFont);
  text("ABSOLUTION", windowWidth/2 , windowHeight/2.7);
  fill(240);
  textSize(40);
  // textFont(myFont);
  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 2) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);
      for(var row = 0; row < numRows; row += 1) {
        var y = height/2 + row * 10 + cos(strandPhase + colOffset) * 50;
        var sizeOffset = (sin(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}

