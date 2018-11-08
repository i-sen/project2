

var phase = 0, speed = 0.07;
var mgr;
var quantity = 300;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;
var myFont;
function preload() {
    myFont = loadFont('Fragmentcore.otf');
}


   
   var snowcolor = 255;
   var slider;

    this.setup = function() {
      createCanvas(windowWidth,windowHeight);
        textFont(myFont);
    slider = createSlider(0, 255, 255);
      slider.position(670, 750);
    
      // frameRate(30);
    	background(0);
    	for(var i = 0; i < quantity; i++) {
          flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
          xPosition[i] = random(0, width);
          yPosition[i] = random(0, height);
          direction[i] = round(random(0, 1));
    }


    //loadJSON('https://www.poemist.com/api/v1/randompoems', showWisdom);

    // $.ajax ({
    //   url: "http://cors-anywhere.herokuapp.com/https://www.poemist.com/api/v1/randompoems", 
    //   type: "GET",
    //   dataType: "json",
    //   error: function (err){
    //     console.log(err);
    //   },
    //   success: function (data){
    //     console.log("Nice!");
    //     console.log(data);
    
    //   }
    // });
  }

    this.draw = function() {
      background(0);
      
	    fill(255);
      textSize(40);
      textStyle(BOLD);
      textAlign(CENTER);
      text("This is a piece of interactive fiction with autoplay sound effects. Play with the slider on the bottom of some scenes to change page elements. Click your option selection at the bottom of the page.", 250, 250, 1000, 1000);
  
      snowcolor = slider.value();

      fill(snowcolor);
  	 
  	  drawSnow();

    }
    
// function showWisdom(wisdom){
//       var speech = wisdom[0].content;
//       textSize(40);
//       textStyle(BOLD);
//       textAlign(CENTER);
//       text("Press the (b)racketed letter to make your choice selection.", 50, 50, 1000, 1000);
//       } 

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




    