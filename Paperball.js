class Paperball{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            //'stiffness':0.4,
            'density':1.2,
            'friction':0.5,
            'restitution':0.8,
        }

        this.body = Matter.Bodies.circle(x, y, 40, options);
        this.x = x;
        this.y = y;
        this.radius = 40;

        World.add(world, this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        strokeWeight(7);
        stroke("purple");
        fill("yellow");
        circle(this.x, this.y, this.radius);
        pop();
    }
}