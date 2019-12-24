function Box(x, y, w, h) {

    this.w = w;
    this.h = h;

    const options = {
        friction: 0.5,
        restitution: 1
    }
   
    const randomNumber = Math.round(random(1, 2));
   
    if(randomNumber === 1) {
        this.body = Bodies.rectangle(x, y, w, h, options);  
    } else {
        this.body = Bodies.circle(x, y, 20, options); 
    }

    World.add(world, this.body);

    const color = random_rgba();

    this.show = function(){

        var pos = this.body.position;
        var angle = this.body.angle;

        fill(color);

        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);   
        
        if(randomNumber === 1) {
            rect(0, 0, this.w, this.h);
        } else if (randomNumber === 2){
            circle(0, 0, 30);
        } 
        
        pop();        

    }

}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}