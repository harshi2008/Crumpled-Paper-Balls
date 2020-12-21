class Ground{
constructor(x, y, width, height){
    var options={
        isStatic:true,
       'stiffness': 0.8,
    }
    
    this.body = Bodies.rectangle(x, y, 1500, 20, options);
    this.x = x;
    this.y = y;
    this.width = 1500;
    this.height = 20;
    
    World.add(world, this.body);
}

display(){
    var pos =this.body.position;

    push();
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue");
    fill("red");
    rect(this.x, this.y, this.width, this.height);
    pop();
}
}