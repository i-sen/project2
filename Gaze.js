

var slider;
var eyeColor;
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
eyeColor = slider.value();
  fill(255,255,eyeColor,50);//colour and shading of ellipse
  stroke(5);
  strokeWeight(10);
  ellipse (width/2,height/2,300,300);
//sets size and position, middle of page and half the size of the canvas
  fill(0,0,200,100);
  stroke(3);
  strokeWeight(5);//thickness of outline of 'eye'
  ellipse(width/2,height/2,100,100);//sets size of inner circle but makes movement based on mouse position
  fill(0);//black
  ellipse(width/2,height/2,50,50);//eye pupil
  fill(255);
    textSize(35);
  textStyle(BOLD);
  textAlign(CENTER);
    text("You peer closely at the symbol in the bark. The smell of a burning fire fills the air around you. It becomes thicker. You can’t see any smoke, but soon you start to suffocate.", 250, 250, 1000, 1000);
    
    }

   