var bird
var pipes = []
let score = 0

function setup() {
    createCanvas(400, 600)
    resetSketch()
    var button = createButton("reset")
    button.mousePressed(resetSketch)
}

function resetSketch() {
    console.log('hello');
    score = 0
    pipes = []
    bird = new Bird
    //pipes.push(new Pipe())
    loop()
}


function draw() {
    background(0)
    
    bird.show()
    bird.update()
    scoreCard()
    if ( frameCount % 100 == 0) {
        
        score += 1
        pipes.push(new Pipe())
    }

    for (let i = pipes.length -1; i >= 0; i--) {
        pipes[i].show() 
        pipes[i].update()
        
        if (pipes[i].offscreen())  {
            pipes.splice(i, 1)
        } 
        if (pipes[i].hits(bird)) {
            console.log("HIT")
            noLoop()
        }
    }
    
}

function keyPressed() {
    if (key == ' '){
         bird.up()
    }
}

scoreCard = () => {
    let s = 'Score: ' + score;
    fill(235, 64, 52);
    return text(s, 10, 10, 70, 80);
}