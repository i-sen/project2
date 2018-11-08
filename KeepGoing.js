
var phase = 0, speed = 0.07;
var quantity = 300;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;
var snowColor = 255;
var slider;
var r;
var g;
var myFont;

function preload() {
    myFont = loadFont('Fragmentcore.otf');
}

    function setup() {
      createCanvas(windowWidth,windowHeight);
      textFont(myFont);
      background(0);
      slider = createSlider (0,255,255);
      slider.position(670, 750);
    	 
      for(var i = 0; i < quantity; i++) {
          flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
          xPosition[i] = random(0, width);
          yPosition[i] = random(0, height);
          direction[i] = round(random(0, 1));
    }
  }

   
    function draw () {
        r = random(255);
        g = random (255);
    	background(0);
  push();
  translate(width*0.52, height*0.5);
  rotate(frameCount / -100.0);
  color = slider.value();
  fill(r,g,color);
  polygon(20, 20, 130, 5); 
  pop();
	fill(255);
    textSize(35);
	textStyle(BOLD);
	textAlign(CENTER);
  	text("You keep heading down the path. The woods are deep, and seem to have no end. You come across a tree with a symbol carved into it. The bark is burnt and the branches are little more than ash.", 250, 250, 1000, 1000);
 
     drawSnow();
    }

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

    function drawSnow() {
     for(var i = 0; i < xPosition.length; i++) {
        ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
      if(direction[i] == 0) {
        xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
        xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }
    
      yPosition[i] += flakeSize[i] + direction[i]; 
    
      if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
        xPosition[i] = random(0, width);
        yPosition[i] = -flakeSize[i];
    } 
  }
}
    
