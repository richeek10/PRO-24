class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          
      }
     
      this.width = width;
      this.height = height;

      this.bottom= Bodies.rectangle(x,y,width,height,options);
      this.left= Bodies.rectangle(x-65,y-30,20,150,options);
      this.right= Bodies.rectangle(x+65,y-30,20,150,options);
      this.image=loadImage("dustbingreen.png");


      
      World.add(world, this.bottom);
      World.add(world, this.left);
      World.add(world, this.right);
    }
    display(){
      var bottompos=this.bottom.position;
      var leftpos=this.left.position;
      var rightpos=this.right.position;

      push()
      translate(leftpos.x,leftpos.y);
      rotate(this.left.angle);
      fill("pink");
      stroke("blue");
      rectMode(CENTER);
      rect(0,0,20,150);
      pop();

      push()
      translate(rightpos.x,rightpos.y);
      rotate(this.right.angle);
      fill("pink");
      stroke("blue");
      rectMode(CENTER);
      rect(0,0,20,150);
      pop();

      push()
      translate(bottompos.x,bottompos.y);
      rotate(this.bottom.angle);
      
      imageMode(CENTER);
      image(this.image,this.width-150,this.height-50,this.width+20,this.height+140);
      pop();
    }
  };