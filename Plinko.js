class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = 10
        this.color = color(random(0,255),   random(0,255),   random(0,255))
        World.add(world,this.body)
    }
display(){
    var pos = this.body.position;
    //var angle = this.body.angle;
    //push();
    //translate(pos.x,  pos.y)
    //0rotate(angle)
    fill(this.color)
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.r,this.r)
    //pop();
    }
    
}