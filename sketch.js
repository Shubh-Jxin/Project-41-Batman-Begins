const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var rainDrop=[];

var engine, world;

var thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1=loadImage("thunder1.png");
    thunder2=loadImage("thunder2.png");
    thunder3=loadImage("thunder3.png");
    thunder4=loadImage("thunder4.png");
}

function setup(){
   createCanvas(500,600);
    engine=Engine.create();
    world= engine.world;

    umbrella= new Umbrella(250,530);
}

function draw(){
    Engine.update(engine);  
    background(0);  

    if(frameCount%5===0){
        spawnDrops();
    }

    
        createThunder();

    for(i=0;i<rainDrop.length;i++){
        rainDrop[i].update();
        rainDrop[i].display();
    }

    umbrella.display();

    drawSprites();
}   

function spawnDrops(){
    drop= new Drop(random(0,500),0);
    rainDrop.push(drop);

}
function createThunder(){
    if(frameCount%100===0){
        var thunder= createSprite(random(1,500),100);
        rand= Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;

            case 2: thunder.addImage(thunder2);
            break;

            case 3: thunder.addImage(thunder3);
            break;

            case 4: thunder.addImage(thunder4);
            break;
        }
        thunder.scale=0.5;
        thunder.lifetime=15;
    }
}
