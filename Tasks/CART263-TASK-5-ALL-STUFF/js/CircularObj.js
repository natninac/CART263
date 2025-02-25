class CircularObj {
  constructor(x, y, radius, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.aniSpeed = 0.3; //animation speed
    this.growing = true;
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      true
    );
    this.context.fill(); // set the fill
    this.context.lineWidth = 2; //change stroke
    this.context.closePath();
    this.context.stroke();
  }


  animate() {

    console.log("animating");

    if (this.growing === true) {
      this.radius += this.aniSpeed;

      if (this.radius >= 30) {
        this.growing = false;
      }

    } else if (this.growing === false) {
      this.radius -= this.aniSpeed;

      if (this.radius <= 20) {
        this.growing = true;
      }
    }

    window.requestAnimationFrame(() => this.animate());
  }

  update() {
    this.display();
  }
}