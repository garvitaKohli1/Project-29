class SlingShot{
    constructor(bodyA,PointB){
        var options={
            bodyA:bodyA,
            PointB:PointB,
            stiffness:0.04,
            length:1

        }
        this.sling=Constraint.create(options);
        this.PointB=PointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(5);
            stroke("blue");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}