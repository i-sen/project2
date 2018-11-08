 
var phase = 0, speed = 0.07;
var quantity = 300;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;
var snowcolor = 255;
var slider;
var myFont;
function preload() {
    myFont = loadFont('Fragmentcore.otf');
}

function setup() {
   createCanvas(windowWidth,windowHeight);
   textFont(myFont);
    	background(0);
      slider = createSlider(0, 10, 5);
      slider.position(670, 750);
      for(var i = 0; i < quantity; i++) {
          flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
          xPosition[i] = random(0, width);
          yPosition[i] = random(0, height);
          direction[i] = round(random(0, 1));
    }
  }

function draw() {
    	background(0);
	fill(255);
    textSize(35);
	textStyle(BOLD);
	textAlign(CENTER);
  	text("You trace your finger along the sharp points and crossing lines. ‘That’s mine.’ You turn. Behind you, a young girl, no older than ten or eleven, but her eyes look centuries older. That makes you sad. She starts walking alongside you. Her gossamer hair glinting in the moonlight, her skin as pale the snow around her. She clutches on to your cloak, as though she’s afraid you’ll vanish if she lets go.", 250, 250, 1000, 1000);
    // snowcolor = slider.value();
    fill(snowcolor);
     drawSnow();
    }

    function drawSnow() {
      maxFlakeSize = slider.value();
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
     