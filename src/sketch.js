let Engine = Matter.Engine,    
    World = Matter.World,    
    Bodies = Matter.Bodies;

let boxes = [];

let engine;
let world;
let mBox;
let ground;
let background_color = 'rgba(89, 91, 217, 1)';

function setup() {

    createCanvas(800, 600);
    background(background_color);
    engine = Engine.create();
    world = engine.world;

    mBox = new Box(400, 200, 80, 80);

    ground = Bodies.rectangle(400, 600, 810, 60, { isStatic: true });

    World.add(world, ground);
       
    Engine.run(engine); 
    
}

function mousePressed(){
    boxes.push(new Box(mouseX, mouseY, random(20, 40), random(20, 40)));
}

function draw() {  

    background(background_color);

    for(let x = 0; x < boxes.length; x++){
        boxes[x].show();
    }

    noStroke(255);
    fill('rgba(89, 159, 217, 1)');    
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 50);

    if(boxes.length >= 200){
        boxes = [];        
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}