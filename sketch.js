
const width = 800
const height = 800

const population = 100

const people = []
const infected = []

function setup() {
	createCanvas(width, height)
	makePeople()
}

function draw() {
	background(51)
	checkComplete()
	moveDots()
	updateText()
}

 

function mousePressed () {
  //this.colour = color('green')  
  console.log('clicked')
  for (const dot of people) {
    dot.clicked(infected);
  }
}
  

function updateText() {
	select('#virus').html(`Infected: ${infected.length}`)
	select('#healthy').html(`Healthy: ${people.length - infected.length}`)
	select('#total').html(`Total: ${people.length}`)
}

function checkComplete() {
	if (people.length - infected.length == 0) {
		noLoop()
        
    }
}

function changeCanvas() {
  background('white')
  remove(dot);  
  
}


function moveDots() {
	for (const dot of people) {
		dot.move()
		fill(dot.colour)
		dot.make()
		for (const dot2 of people) {
			checkCollision(dot, dot2)
		}
	}
}

function checkCollision(dot, dot2) {
	if (dist(dot.pos.x, dot.pos.y, dot2.pos.x, dot2.pos.y) < dot.size && isOneInfected(dot, dot2)) {
		dot.infect()
	 	dot2.infect()
		infected.push(dot.infected)
	}
}

function isOneInfected(dot, dot2) {
	return (dot.infected || dot2.infected) && !areBothInfected(dot, dot2)
}

function areBothInfected(dot, dot2) {
	return dot.infected && dot2.infected
}

function makePeople() {
 	for (let i = 1; i < population; i++) {
		people.push(new Person(new Coordinate(width, height), 16, false))
	}
	createCarrier()
}

function createCarrier() {
	const infectedperson = new Person(new Coordinate(width, height), 16, true)
	people.push(infectedperson)
	infected.push(infectedperson)
}
