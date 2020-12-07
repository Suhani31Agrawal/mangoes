
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree;
var ground,stoneobj;

function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneobj=new Stone (235,420,25)
	ground=new Ground (400,690,800,20)

	mango1=new Mango(465,300,25)
	mango2=new Mango(700,280,25)
	mango3=new Mango(500,200,25)
	mango4=new Mango(561,250,25)
	mango5=new Mango(585,203,25)
	mango6=new Mango(523,340,25)
	mango7=new Mango(605,307,25)
	mango8=new Mango(675,368,25)

	sling=new Slingshot(stoneobj.body,{x:130,y:580})

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(200);

  image(boy,170,635,120,200);
  image(tree,550,400,450,600);
  ground.display();
  stoneobj.display();

  mango1.display();
  mango2.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango3.display();

  sling.display();

    detectollision(stoneobj,mango1); 
    detectollision(stoneobj,mango2);
    detectollision(stoneobj,mango3);
	detectollision(stoneobj,mango4); 
	detectollision(stoneobj,mango5);
	detectollision(stoneobj,mango6);
	detectollision(stoneobj,mango7);
    detectollision(stoneobj,mango8)
  
  //drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function detectollision(lstone,lmango)
{  mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position 
 var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r)
{ Matter.Body.setStatic(lmango.body,false); } 
}

function keyPressed(){
	if(keyCode===32){
		sling.attach(stoneobj.body)
	}
}
