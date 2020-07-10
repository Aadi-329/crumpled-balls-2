class dustbin{
    constructor(x,y,width,height){
    this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
   // this.image=loadImage("dustbingreen.png")
    this.width=width
    this.height=height
    World.add(world,this.body);
    
    
    }
    display(){
    var pos=this.body.position
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height)
    //image(this.image,pos.x,pos.y,200,250);
    //fill("green")
    }
    
    } 