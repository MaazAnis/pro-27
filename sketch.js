
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bobobj1 = new Bob (200,300,50,50)
	bobobj2 = new Bob (200,300,60,60)
	bobobj3 = new Bob (200,300,70,70)
	bobobj4 = new Bob (200,300,80,80)
    bobobj5 = new Bob (200,300,90,90)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



