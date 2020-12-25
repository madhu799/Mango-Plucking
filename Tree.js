class Tree{
constructor(x,y,height, width){

    var options={
    isStatic:false,
    restituition: 0,
    friction:1,
    density:1.2,
    }
    this.x=x;
    this.y=y;
    this.height=height;
    this.width=width;
    this.image=loadImage("tree.png")
    this.body= Bodies.rectangle(this.x,this.y,this.height,this.width);
    World.add(world, this.body);
    }
    
    }