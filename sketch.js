const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1,ground;
var ball2,ball3,ball4,ball5 ;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball (200,200,20)
    ball2= new Ball (230,200,20)
    ball3 = new Ball (260,200,20)
    ball4 = new Ball (290,200,20)
    ball5 = new Ball (320,200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
   
}
