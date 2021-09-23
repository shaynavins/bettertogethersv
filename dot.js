
class Person {
  
    constructor(canvas, size, infected) {
      
      this.pos = startLocation(canvas.x, canvas.y)
      
      this.speed = randCoordinate()
      this.direction = randCoordinate() 
      this.colour = infected ? color(255, 0, 0) : color(255, 255, 255)
      this.canvas = canvas
      this.size = size 
      this.infected = infected
    }
    
    
    move() {
      this.Bounce()
      this.pos = new Coordinate(this.pos.x + this.speed.x * this.direction.x, this.pos.y + this.speed.y * this.direction.y)
    }
    
    Bounce() {
      if (edgeTouched(this, 'x')) {
        this.direction.x *= -1
      }
      
      if (edgeTouched(this, 'y')) {
        this.direction.y *= -1
  
    }
   }
    
    make() {
      ellipse(this.pos.x, this.pos.y, this.size)
    }
    
    infect() {
      this.infected = true
      this.colour = color(255, 0, 0)
    }
    
    clicked(infected){
      var d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
      if (d < this.size) {
        this.colour = color('green')
      }
      
      
      //console.log("coming here");
      //this.colour = color('green')
    }
  }
  
  /*this.clicked = function () {
    console.log("coming here");
    this.colour = color('green')
  }*/
  
  
  
  
  function edgeTouched(dot, axis) {
    return dot.pos[axis] > dot.canvas[axis] - dot.size || dot.pos[axis] < dot.size
  }
  
  function startLocation(x,y) {
    return new Coordinate(randRange(x, 5), randRange(y,5))
  }
  
  function randRange(max, min) {
    return Math.ceil(Math.random() * (max-min) + min)
  }
  
  function rand(constraint) {
    return Math.ceil(Math.random() * constraint) 
  }
  
  function randCoordinate() {
    return new Coordinate(rand(1), rand(1))
  }
  