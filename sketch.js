const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,obj1;

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

  var options = {
    isStatic:true
  }

  
 obj1 = Bodies.rectangle(5,390,800,10,options);
 World.add(world , obj1);
console.log(obj1);

box1 = new Box(200,100,50,50);
box2 = new Box(100,100,50,50);




}
function draw() {
  Engine.update(engine);
  background(155,55,125);  
  rect (obj1.position.x,obj1.position.y,800,10)
  box1.display();
  box2.display();
}

