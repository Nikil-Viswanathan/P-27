
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob , bob2 , bob3, bob4 ,bob5;
var roof;
var bobDiameter = 80;
function preload()
{
	
}

function setup() {
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400 , 100 , 800 , 30);
bob = new Bob(200 , 400 , 40 );
bob2 = new Bob(280 , 400 , 40 );
bob3 = new Bob(360 , 400 , 40 );
bob4 = new Bob(440 , 400 , 40 );
bob5 = new Bob(520 , 400 , 40 );
rope1 = new Rope(bob.body , roof.body,-bobDiameter*2 , 0);
rope2 = new Rope(bob2.body , roof.body,-bobDiameter*1 , 0);
rope3 = new Rope(bob3.body , roof.body,0, 0);
rope4 = new Rope(bob4.body , roof.body,bobDiameter*1 , 0);
rope5 = new Rope(bob5.body , roof.body,bobDiameter*2 , 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.applyForce(bob.body , bob.body.position , {x:-100 , y:-100});
  }
}

