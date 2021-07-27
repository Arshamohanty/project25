class Paper{
    constructor(x,y,r){
		var options={
            isStatic:false,
			density:1.5,
            friction:0,
            restitution:0.3,

			}

		this.y = y;
		this.x = x
		this.r = r
		this.image = loadImage("paper.png")
		this.body = Bodies.circle(this.x, this.y, this.r, options);
 		World.add(world, this.body);
        }
display()
	{
			var pos = this.body.position;		

			push()
			translate(pos.x, pos.y);
			rotate (this.body.angle)
			rectMode(CENTER)
            image (this.image,0,0,this.r,this.r)
			pop()
    }
}