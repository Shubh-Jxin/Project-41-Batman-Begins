class Drop {
    constructor(x,y){
        this.body= Bodies.circle(x,y,3);
        this.r=3
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y > 600){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:0});
            Matter.Body.setVelocity(this.body,{x:(0,2),y:random(5,15)})
        }
    }
    display(){
        var pos= this.body.position;
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}