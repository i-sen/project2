
var xoff1 = 0;
var xoff2 = 10000;
var inc= 0.01;
var start = 0;
var slider;
var color;
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
  }

    function draw() {
    	background(0);
      stroke(255);
      noFill();
      beginShape();
      var xoff = start;


      for (var x = 0; x < width; x++){
        stroke (255);
        // var y = random(height);
        var y = noise(xoff) * height;
        vertex (x, y);
        // inc = slider.value();
         xoff += inc;
      }  
      endShape();
      // inc = slider.value();
      start += inc;

      // noLoop();    
      // var x = map (noise(xoff1), 0, 1, 0, width);
      // var y = map (noise(xoff2), 0, 1, 0, height);
      // xoff1 += 0.01; 
      // xoff2 += 0.01; 
      // ellipse (x, y, 24, 24);
      color= slider.value();
      stroke(color);
	   fill(0,color);
    textSize(35);
	    textStyle(BOLD);
	textAlign(CENTER);
  	text("‘I can see you, you know? Don’t follow me. Come walk with me.’ It comes closer, and you see. A young girl, no older than ten or eleven. but her eyes look centuries older. That makes you sad. She starts walking alongside you. Her gossamer hair glinting in the moonlight, her skin as pale the snow around her. She clutches on to your cloak, as though she’s afraid you’ll vanish if she lets go.", 250, 250, 1000, 1000);

    }

    