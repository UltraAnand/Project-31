const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  base = new Ground(0,795,1000,10)
  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }

  for(var j = 15; j<=width- 10 ; j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }

  for(var j = 15; j<=width- 10 ; j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }
  

 // plinkos[0]
  //plinkos[plinkos.length-1]

  
  //for(var i = 0; i<plinkos.length; i++){
  //  console.log(plinkos[i].body.position.x + "," + plinkos[i].body.position.y );
  //  
  //}
  

}


function draw() {
  background("black");
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10, width/2+10),10,10 ));
  }
    
  Engine.update(engine);
  base.display();
  for(var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for(var i = 0; i<plinkos.length; i++){
   plinkos[i].display();
    
  }
  for(var i = 0; i<particles.length; i++){
    particles[i].display();
     
   }
  
}