let t = 0; // time variable
var slider;
var shade;
var myFont;
function preload() {
    myFont = loadFont('Fragmentcore.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    textFont(myFont);
      background(0);
      slider = createSlider (0, 255, 255);
       slider.position(670, 750);
  }

function draw() {
      background(10,10);
      noStroke();
  shade = slider.value();
  fill(20,0,shade);// translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 20){
    for (let y = 0; y <= height; y = y + 20) {
      // // starting point of each circle depends on mouse position
      // let xAngle = map(0, 0, width, -4 * PI, 4 * PI, true);
      // let yAngle = map(0, 0, height, -4 * PI, 4 * PI, true);
      // // and also varies based on the particle's location
      // let angle = xAngle * (x / width) + yAngle * (y / height);

      // // each particle moves in a circle
      let myX = x + 20 * sin(2 * PI * t);
      let myY = y + 20 * cos(2 * PI * t);

      ellipse(myX, myY, 5); // draw particle
    }
  }

  t = t + 0.01; // update time
  fill(255);
    textSize(35);
  textStyle(BOLD);
  textAlign(CENTER);
    text("You turn left, and soon come upon a lake. The moon casts her reflection on the water, illuminating a path across the lake to the other side. You take one step in, and then another. Soon you are waist deep in the lake, but it feels like nothing. You turn and stretch your hand towards Alizon. She looks scared, but follows you in. Her hand touches yours. Cold as ice but crumbling at the slightest touch. You close your eyes and submerge yourself.", 250, 250, 1000, 1000);
    
     // drawSnow();
    }

    
    