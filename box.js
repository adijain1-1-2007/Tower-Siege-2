class Box  {
    constructor(x, y, width, height){
      var options={
        restitutuion:0.4,
        friction:0

      }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        this.Visiblity=255;
    }
    display(){
      var angle=this.body.angle
      var pos=this.body.position
      push()
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity);
      translate(pos.x,pos.y)
      rotate(angle)
      rect(0,0,this.width,this.height)
      pop()
    }
  }