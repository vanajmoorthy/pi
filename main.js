let block1; // yes
let block2;

let count = 0;
let digits = 7; // number of digits of pi you want to calculate.
const timeSteps = 100000;

function preload() {
	clack = loadSound("clack.wav"); // Weird pool cue noise.
}

function setup() {
	createCanvas(800, 400);
	block1 = new Block(100, 20, 1, 0, 0);
	const m2 = pow(100, digits - 1);
    block2 = new Block(200, 50, m2, -2 / timeSteps, 20);
}

function draw() {
	background(51);
    strokeWeight(1);
    let clackSound = false;

	for (let i = 0; i < timeSteps; i++) {
		if (block1.collide(block2)) {
			// If blocks collide --> do things
			const v1 = block1.bounce(block2);
			const v2 = block2.bounce(block1);
			block1.v = v1;
			block2.v = v2;
            clackSound = true;
			count++;
		}

		if (block1.hitWall()) {
			// if block hits wall --> do things
			block1.reverse();
			clackSound = true;
			count++;
		}

		block1.update();
		block2.update();
    }
    
    if (clackSound) {
        clack.play();
    }

	block1.show();
	block2.show();

	fill(255);
	textSize(20);
	text(count, 10, 27); // show pi
}
