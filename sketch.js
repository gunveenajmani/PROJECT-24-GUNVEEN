const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall1, wall2, wall3;
var ball;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(400,680,width, 40);
	wall1= new Dustbin(650,650,200,20);
	wall2 = new Dustbin(540,560,20,200);
	wall3 = new Dustbin(760,560,20,200);

	ball= new Paper(50,620,20);
  
}

function draw() {
  background(0);

  Engine.run(engine);

  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85});
	}
}