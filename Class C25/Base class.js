class Base{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1,
            density: 0.7
           }
           this.body=Bodies.rectangle(x,y,width,height,options);
           this.width=width;
           this.height=height;
           this.image=loadImage("sprites/base.png");
           World.add(world,this.body);
           
        }
        
    
    
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ();
        translate (pos.x,pos.y)
        rotate (angle,)
        stroke ("red");
        strokeWeight(2);
        imageMode(CENTER);
       image (this.image,0,0,this.width,this.height);
        pop ();
        
    }
    }