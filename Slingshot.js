class Slingshot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.07,
            length:7
        }
        this.pointB=pointB
        this.sling= Constraint.create(options)
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        if(this.sling.bodyA){
            var point1=this.sling.bodyA.position
            var point2=this.pointB
    
            strokeWeight(4);
            line(point1.x,point1.y,point2.x,point2.y)
        }
    }
}