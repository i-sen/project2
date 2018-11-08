


  var angle = PI/4;
  var slider;
  var myFont;
  function preload() {
    myFont = loadFont('Fragmentcore.otf');
}

function setup () {
      createCanvas(windowWidth,windowHeight);
        textFont(myFont);
      slider = createSlider(0, TWO_PI, PI/4, 0.01);
      slider.position(670, 750);
      
    	background(0);
  //   	for(var i = 0; i < quantity; i++) {
  //   flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
  //   xPosition[i] = random(0, width);
  //   yPosition[i] = random(0, height);
  //   direction[i] = round(random(0, 1));
    
  // }
    }

function draw() {

    	background(0);
  
     
	  fill(255);
    textSize(35);
	textStyle(BOLD);
  // textFont(myFont);
	textAlign(CENTER);
  	text("You’ve been walking in the woods for what seems like an eternity. The snow is falling lightly on your shoulders, covering any tracks you make. The moon shines brightly through the trees, its light guiding your path. It’s eerily quiet, though every so often you hear the cracking of branches behind you. It’s been following you ever since you set foot in this abandoned town.", 250, 250, 1000, 1000);
    
  	 // fill(snowColor);
  	 // drawSnow();

    angle = slider.value();
    translate (700, height);
    stroke('rgba(255,255,255,0.5)');
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

    
