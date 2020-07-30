
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball1, rec1;

function preload()
{
	paperImg = loadImage("sprites/paper.png");
	dustbinImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    

	
	 
	boxleftSprite=createSprite(500,590, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(500,590 , 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(600,640 , 200,20);
	boxBase.shapeColor=color(255,0,0);
	boxBase.loadImage=("sprites/dustbingreen.png");
	boxBase.Img=rectMode(top); 

 	boxBottomBody = Bodies.rectangle(600, 640, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite=createSprite(700, 590, 20,100);
	boxRightSprite.shapeColor=color(255,0,0);
	 

 	boxRightBody = Bodies.rectangle( 700,590 , 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);
	 
	ball1 = new paperObject(200,630);
	
	//ball1 = Bodies.circle(200,630,20);
	//ball1.shapeColor=color(255,182,193);
	//World.add(world, ball1);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  keyPressed();
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}

