
var xoff1 = 0;
var xoff2 = 10000;
var inc= 0.01;
var start = 0;
var myFont;
function preload() {
    myFont = loadFont('Fragmentcore.otf');
}



      function setup() {
      createCanvas(1500,3000);
      textFont(myFont);
    	background(0);
  }

  // loadJSON('https://www.poemist.com/api/v1/randompoems', showWisdom);

    $.ajax ({
      url: "https://www.poemist.com/api/v1/randompoems", 
      type: "GET",
      dataType: "json",
      error: function (err){
        console.log(err);
      },
      success: function (data){
        console.log("Nice!");
        console.log(data);

        poem = data[0].content;
        console.log(poem);
        // var htmlString = "<p>" + poem + "</h1>"; 
        // $('#poem').html(htmlString);
    
      }
    });

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

      stroke(255);
	   fill(255);
    textSize(35);
	    textStyle(BOLD);
	textAlign(CENTER);
	// textSize(20);
	// text(poem, 100, 100, 1000,1000);
	textSize(25);
  	text(" ‘What’s your name?’ you ask gently. ‘Alizon.’ Her voice shakes a little. 'That reminds me of a poem. Would you like to hear it? She nods shortly.        " + poem +  "        The smell of a burning fire fills the air around you. You come upon a crossroads.", 250, 250,1000,2000); 

    }

    
