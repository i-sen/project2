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
      
      slider = createSlider(0, 255, 255);
       slider.position(700, 750);
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
  	text("You turn around. One hand on your hip, one foot pulled back slightly – fighting stance. As far as you can see, there’s nothing but more snow. You wait for a few moments. Then you see it – moving so slowly that it’s almost still.", 250, 250, 1000, 1000);
     snowcolor = slider.value();
     fill(snowcolor);
     drawSnow();
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

     