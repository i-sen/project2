
var phase = 0, speed = 0.07;
var mgr;
var quantity = 300;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;
var snowColor = 255;
// var myFont;

// function preload() {
//   myFont = loadFont('Fragmentcore.otf');
// }


// function Intro(){
function setup(){
	
	createCanvas(windowWidth,windowHeight);

  mgr = new SceneManager();
  mgr.addScene ( Main );
   mgr.addScene ( Instructions );
  mgr.addScene ( BeginAgain );
  mgr.addScene ( TurnAround );
  mgr.addScene ( KeepGoing );
  mgr.addScene ( CallOut );
  mgr.addScene ( Feel );
  mgr.addScene ( SpeakToHer );
  mgr.addScene ( HoldStill );
  mgr.addScene ( Gaze );
  mgr.addScene ( IgnoreHer );
  mgr.addScene ( Dive );
  mgr.addScene ( Left );
  mgr.addScene ( Right );
  mgr.addScene ( Wait );
  mgr.addScene ( End );
  mgr.showNextScene();
}

function draw(){
    mgr.draw();
}
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
function keyPressed(){
   
    switch(key)
    {
        case 'B':
            mgr.showScene( BeginAgain );
            break;
        case 'T':
            mgr.showScene( TurnAround );
            break;
        case 'K':
            mgr.showScene( KeepGoing );
            break;
        case 'C':
            mgr.showScene( CallOut );
            break;
        case 'F':
            mgr.showScene( Feel );
            break;
        case 'S':
            mgr.showScene( SpeakToHer );
            break;
        case 'H':
            mgr.showScene( HoldStill );
            break;
        case 'G':
            mgr.showScene( Gaze );
            break;
        case 'I':
            mgr.showScene( IgnoreHer );
            break;
        case 'D':
            mgr.showScene( Dive );
            break;
        case 'R':
            mgr.showScene( Right );
            break;
        case 'L':
            mgr.showScene( Left );
            break;
        case 'W':
            mgr.showScene( Wait );
            break;
         case 'b':
            mgr.showScene( BeginAgain );
            break;
        case 't':
            mgr.showScene( TurnAround );
            break;
        case 'k':
            mgr.showScene( KeepGoing );
            break;
        case 'c':
            mgr.showScene( CallOut );
            break;
        case 'f':
            mgr.showScene( Feel );
            break;
        case 's':
            mgr.showScene( SpeakToHer );
            break;
        case 'h':
            mgr.showScene( HoldStill );
            break;
        case 'g':
            mgr.showScene( Gaze );
            break;
        case 'i':
            mgr.showScene( IgnoreHer );
            break;
        case 'd':
            mgr.showScene( Dive );
            break;
        case 'r':
            mgr.showScene( Right );
            break;
        case 'l':
            mgr.showScene( Left );
            break;
        case 'w':
            mgr.showScene( Wait );
            break;
        case ' ':
            mgr.showScene( Instructions );
            break;
        case 'e':
            mgr.showScene( End );
            break;
        case 'E':
            mgr.showScene( End );
            break;

    }
    mgr.keyPressed();
    remove();
}


//START MAIN
function Main(){

	this.setup = function(){
	createCanvas(windowWidth,windowHeight);
  noStroke;
  a = height / 2;
  phase = 0;
  speed = 0.1;
  maxCircleSize = 9;
  numRows = 30;
  numCols = 30;
  numStrands = 1;
  colorA = color(253, 174, 120, 60);
  colorB = color(210, 100, 123);
}

this.draw = function(){
	background(0);
	fill(255);
  textSize(60);
  // textFont(myFont);
  text("ABSOLUTION", windowWidth/2 , windowHeight/2.7);
  fill(240);
  textSize(40);
  // textFont(myFont);
  text("press space to continue", windowWidth/2, windowHeight/2.4);
  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 2) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);
      for(var row = 0; row < numRows; row += 1) {
        var y = height/2 + row * 10 + cos(strandPhase + colOffset) * 50;
        var sizeOffset = (sin(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}

this.keyPressed = function() {
        this.sceneManager.showScene();
}
}
//END MAIN

//START INSTRUCTIONS
// function Instructions(){
   
//    var snowcolor = 255;
//    var slider;

//     this.setup = function() {
//     slider = createSlider(0, 255, 255);
//       slider.position(670, 750);
    
//       // frameRate(30);
//     	background(0);
//     	for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }


//     //loadJSON('https://www.poemist.com/api/v1/randompoems', showWisdom);

//     // $.ajax ({
//     //   url: "http://cors-anywhere.herokuapp.com/https://www.poemist.com/api/v1/randompoems", 
//     //   type: "GET",
//     //   dataType: "json",
//     //   error: function (err){
//     //     console.log(err);
//     //   },
//     //   success: function (data){
//     //     console.log("Nice!");
//     //     console.log(data);
    
//     //   }
//     // });
//   }

//     this.draw = function() {
//       background(0);
      
// 	    fill(255);
//       textSize(40);
//       textStyle(BOLD);
//       textAlign(CENTER);
//       text("This is a piece of interactive fiction. Headphones are recommended. Play with the slider on the bottom of the screen to change page elements. Click your option selection at the bottom of the page.", 250, 250, 1000, 1000);
//   	  textStyle(BOLD);
// 	    textAlign(CENTER);
//   	  text("(B)egin", 730, 700);
//       snowcolor = slider.value();

//       fill(snowcolor);
  	 
//   	  drawSnow();

//     }
    
// // function showWisdom(wisdom){
// //       var speech = wisdom[0].content;
// //       textSize(40);
// //       textStyle(BOLD);
// //       textAlign(CENTER);
// //       text("Press the (b)racketed letter to make your choice selection.", 50, 50, 1000, 1000);
// //       } 

//     function drawSnow() {
// 	   for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }




//      this.keyPressed = function() {
//         // slider.remove();
//         this.sceneManager.showScene();
//         // slider.remove();
// }
// }
//END INSTRUCTIONS





//START BEGIN AGAIN
// function BeginAgain()
// {


//   var angle = PI/4;
//   var slider;
  

//     this.setup = function() {
//     	// frameRate(30);
//       slider = createSlider(0, TWO_PI, PI/4, 0.01);
      
//     	background(0);
//   //   	for(var i = 0; i < quantity; i++) {
//   //   flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//   //   xPosition[i] = random(0, width);
//   //   yPosition[i] = random(0, height);
//   //   direction[i] = round(random(0, 1));
    
//   // }
//     }

//     this.draw = function() {

//     	background(0);
//       slider.position(650, 750);
     
// 	  fill(255);
//     textSize(35);
// 	textStyle(BOLD);
//   // textFont(myFont);
// 	textAlign(CENTER);
//   	text("You’ve been walking in the woods for what seems like an eternity. The snow is falling lightly on your shoulders, covering any tracks you make. The moon shines brightly through the trees, its light guiding your path. It’s eerily quiet, though every so often you hear the cracking of branches behind you. It’s been following you ever since you set foot in this god-forsaken mining town.", 250, 250, 1000, 1000);
//     textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(T)urn around", 730, 650);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(K)eep going", 730, 700);
//   	 // fill(snowColor);
//   	 // drawSnow();

//     angle = slider.value();
//     translate (700, height);
//     stroke('rgba(255,255,255,0.25)');
//     branch(300);
  	
//     }

//     function branch(len){
//       line (0,0,0,-len);
//       translate (0,-len);
      
//       if (len > 4) {
//         push();
//         rotate (angle);
//         branch(len * 0.67);
//         pop();
//         push();
//         rotate (-angle);
//         branch(len * 0.67);
//         pop();
//     }

//       // line (0,0,0,-len*0.67);

//     }

    


//   function drawSnow() {
// 	for(var i = 0; i < xPosition.length; i++) {
    
//     ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
    
//     if(direction[i] == 0) {
//       xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//       xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//     yPosition[i] += flakeSize[i] + direction[i]; 
    
//     if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//       xPosition[i] = random(0, width);
//       yPosition[i] = -flakeSize[i];
//     } 
//   }
// }

//      this.keyPressed = function() {

//         this.sceneManager.showScene();
        
// }
// }

// function TurnAround()
// {
//   var snowcolor = 255;
//   var slider;
//     this.setup = function() {
//     	background(0);
//       slider = createSlider(0, 255, 255);
//        slider.position(650, 750);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You turn around. One hand on your hip, one foot pulled back slightly – fighting stance. As far as you can see, there’s nothing but more snow. You wait for a few moments. Then you see it – moving so slowly that it’s almost still.", 250, 250, 1000, 1000);
//     textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(C)all out", 730, 650);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(H)old still", 730, 700);
//      snowcolor = slider.value();
//      fill(snowcolor);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
// function mousePressed() {
//   slider.remove();
// }

//      this.keyPressed = function() {

//         this.sceneManager.showScene();

// }
// }

// function KeepGoing()
// {
//     this.setup = function() {
    	 
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You keep heading down the path. The woods are deep, and seem to have no end. You come across a tree with a symbol carved into it. The bark is burnt and the branches are little more than ash.", 250, 250, 1000, 1000);
//     textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(F)eel", 730, 650);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(G)aze", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function CallOut()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("‘I can see you, you know? Don’t follow me. Come walk with me.’ It comes closer, and you see. A young girl, no older than ten or eleven. but her eyes look centuries older. That makes you sad. She starts walking alongside you. Her gossamer hair glinting in the moonlight, her skin as pale the snow around her. She clutches on to your cloak, as though she’s afraid you’ll vanish if she lets go.", 250, 250, 1000, 1000);
//     textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(I)gnore her", 730, 650);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(S)peak to her", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function SpeakToHer()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text(" ‘What’s your name?’ you ask gently. ‘Alizon.’ Her voice shakes a little. 'That reminds me of a poem. Would you like to hear it? She nods shortly. (API HERE) The smell of a burning fire fills the air around you. You come upon a crossroads.", 250, 250, 1000, 1000);
//     textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(L)eft", 730, 650);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(R)ight", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function Left()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You turn left, and soon come upon a lake. The moon castS her reflection on the water, illuminating a path across the lake to the other side. You take one step in, and then another. Soon you are waist deep in the lake, but it feels like nothing. You turn and stretch your hand towards Alizon. She looks scared, but follows you in. Her hand touches yours. Cold as ice but crumbling at the slightest touch. You close your eyes and submerge yourself.", 250, 250, 1000, 1000);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(E)nd", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function Right()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You head right but the path seems to have no end. The scent of burnt wood and flesh is now stronger. The further you walk, the worse it gets. You turn to Alizon, but she is gone. In her place, a shred of burnt cloth.", 250, 250, 1000, 1000);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(B)egin again", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function IgnoreHer()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You keep walking in silence. She easily keeps up with you. The smell of a burning fire fills the air around you. You see a clearing, and in the distance, water.", 250, 250, 1000, 1000);
//     textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(D)ive", 730, 650);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(W)ait", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function Dive()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("The moon casts her reflection on the water, illuminating a path across the lake to the other side. You take one step in, and then another. Soon you are waist deep in the lake, but it feels like nothing. You turn and stretch your hand towards Alizon. She looks scared, but follows you in. Her hand touches yours. Cold as ice but crumbling at the slightest touch. You close your eyes and submerge yourself.", 250, 250, 1000, 1000);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(E)nd", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function Wait()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text(" You sit by the lakeside. The water is still. The scent of burnt wood and flesh is now stronger. The longer you wait, the worse it gets. You turn to Alizon, but she is gone. In her place, a shred of burnt cloth.", 250, 250, 1000, 1000);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(B)egin again", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function Feel()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You trace your finger along the sharp points and crossing lines. ‘That’s mine.’ You turn. Behind you, a young girl, no older than ten or eleven, but her eyes look centuries older. That makes you sad. She starts walking alongside you. Her gossamer hair glinting in the moonlight, her skin as pale the snow around her. She clutches on to your cloak, as though she’s afraid you’ll vanish if she lets go.", 250, 250, 1000, 1000);
//     textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(S)peak to her", 730, 650);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(I)gnore her", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function HoldStill()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You stand still. As you wait, the figure moves closer, infuriatingly slow. The snowfall is becoming heavier, obscuring your vision. You stand rooted to the spot – movement means death in a whiteout.", 250, 250, 1000, 1000);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(B)egin again", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
// }
// }

// function Gaze()
// {
//     this.setup = function() {
//     	background(0);
//       for(var i = 0; i < quantity; i++) {
//           flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
//           xPosition[i] = random(0, width);
//           yPosition[i] = random(0, height);
//           direction[i] = round(random(0, 1));
//     }
//   }

//     this.draw = function() {
//     	background(0);
// 	fill(255);
//     textSize(35);
// 	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("You peer closely at the symbol in the bark. The smell of a burning fire fills the air around you. It becomes thicker. You can’t see any smoke, but soon you start to suffocate.", 250, 250, 1000, 1000);
//   	textStyle(BOLD);
// 	textAlign(CENTER);
//   	text("(B)egin again", 730, 700);
//      drawSnow();
//     }

//     function drawSnow() {
//      for(var i = 0; i < xPosition.length; i++) {
//         ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
//       if(direction[i] == 0) {
//         xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     } else {
//         xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
//     }
    
//       yPosition[i] += flakeSize[i] + direction[i]; 
    
//       if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
//         xPosition[i] = random(0, width);
//         yPosition[i] = -flakeSize[i];
//     } 
//   }
// }
//      this.keyPressed = function() {

//         this.sceneManager.showScene();
//   }
// }

// function End(){
//     this.setup = function() {
//       background(0);
      
//     }

//     this.draw = function() {
//       background(0);
//       fill(255);
//       textSize(35);
//       textStyle(BOLD);
//       textAlign(CENTER);
//       text("You bring your head slowly above the water, savoring the feeling. The scent of burning wood is gone, just like Alizon. You wade out of the pool, not even damp. The moon is obscured by clouds and the woods are dark again. Walking back through to the abandoned town, you mentally check off another box. But the list is nowhere near finished.", 250, 250, 1000, 1000);
//       textStyle(BOLD);
//       textAlign(CENTER);
//       text("The End", 730, 700);
//     }


//     this.keyPressed = function() {
//       this.sceneManager.showScene();
//     }
// }


