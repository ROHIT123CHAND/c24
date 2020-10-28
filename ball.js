class Ball {
    constructor(x,y,r)  {
        var option={
           restitution:0.1,
           density:1.5,
           friction:0.4
        }
   this.body=Bodies.circle(x,y,r/2,option)
   this.radius=r
   World.add(world,this.body)
    } 
    display(){
   var pos=this.body.position
   //pos.x=mouseX
   var angle=this.body.angle
   push()
   translate(pos.x,pos.y)
   rotate(angle)
   rectMode(CENTER)
   fill("red")
   ellipse(0,0,this.radius,this.radius)
   pop()
    }
   }