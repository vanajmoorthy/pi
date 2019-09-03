class Block {
    constructor(x, w, m, v, xConstraint) {
        this.x = x;
        this.y = height - w;
        this.w = w;
        this.v = v;
        this.m = m;
        this.xConstraint = xConstraint;
    } // Because variable names should be hard to understand.
    
    // Why use one function when many do trick?

    update() {
        this.x += this.v;
    }

    collide(other) { // Collision logic right
        return !(this.x + this.w < other.x || this.x > other.x + other.w);
    }

    hitWall() { 
        return this.x <= 0;
    }

    reverse() {
        this.v *= -1;
    }

    bounce(other) {
        let sumOfMass = this.m + other.m;
        let newVelocity = (this.m - other.m) / sumOfMass * this.v + (2 * other.m / sumOfMass) * other.v;
        return newVelocity;

        // Law of conservation of energy and momentum yeet.
    }

    show() {
        fill(240, 52, 38); // Colours!
        const x = constrain(this.x, this.xConstraint, windowWidth);
        rect(x, this.y, this.w, this.w);
    }
}
