
var angle = PI/4;
  var slider;
  var myFont;
  function preload() {
    myFont = loadFont('Fragmentcore.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    textFont(myFont);
   slider = createSlider(0, TWO_PI, PI/4, 0.01);
   slider.position(670, 750);
    	background(0);
      
  }

function draw() {

    	background(0);
	fill(255);
    textSize(35);
	textStyle(BOLD);
	textAlign(CENTER);
  	text("You head right but the path seems to have no end. The woods are getting thicker, and the scent of burnt wood and flesh is now stronger. The further you walk, the worse it gets. You turn to the girl, but she is gone. In her place, a shred of burnt cloth.", 250, 250, 1000, 1000);
   angle = slider.value();
    translate (700, height);
    stroke('rgba(255,255,255,0.25)');
    branch(300);
    	
    }
function branch(len){
      line (0,0,0,-len);
      translate (0,-len);
      
      if (len > 4) {
        push();
        rotate (angle);
        branch(len * 0.67);
        pop();
        push();
        rotate (-angle);
        branch(len * 0.67);
        pop();
    }

      // line (0,0,0,-len*0.67);

    }

    