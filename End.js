
var slider;
var myFont;
function preload() {
    myFont = loadFont('Fragmentcore.otf');
}
function setup() {
       createCanvas(windowWidth,windowHeight);
         textFont(myFont);
      background(0);
      colorMode(HSB, 255);
  //slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 127);
   slider.position(670, 750);
    }

function draw() {
      background(slider.value(), 255,255);
      fill(255);
      textSize(35);
      textStyle(BOLD);
      textAlign(CENTER);
      text("You bring your head slowly above the water, savoring the feeling. The scent of burning wood is gone, just like Alizon. You wade out of the pool, not even damp. The moon is obscured by clouds and the woods are dark again. Walking back through to the abandoned town, you mentally check off another box. But the list is nowhere near finished.      the end", 250, 250, 1000, 1000);

    }


   