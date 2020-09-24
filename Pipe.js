function Pipe() {
    this.top = random(height - 50)
    this.bottom = random(height -50 - this.top)
    this.x = width
    this.w = 20
    this.speed = 2

    this.highlight = false

    this.hits = (bird) => {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true
                return true
            }
        }
    }
    
    this.show = () => {
        fill(255);
        if (this.highlight) {
            fill(255, 0, 0)
        }
        rect(this.x, 0, this.w, this.top)
        rect(this.x, height-this.bottom, this.w, this.bottom)
    }

    this.update = () => {
        if(score > 10) {
            this.speed = 2.5
        } 
        if (score > 20) {
            this.speed = 3.0
        } 
        this.x -= this.speed
    }

    this.offscreen = () => {
        if (this.x < -this.w) {
            return true
        }
        else {
            return false
        }
    }

}