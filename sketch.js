var raindrop = [];



function setup() {
   createCanvas(
     window.innerWidth,
     window.innerHeight
   );

  for (var i = 0; i < 500;  i++){
    raindrop[i] = new Drop();
  }
  
  }
 


function draw() {
  background(228,218,229); 
  for (var i = 0; i < raindrop.length; i++){
    raindrop[i].fall();
    raindrop[i].display();
  }
  
}