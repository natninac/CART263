class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY =10;
    this.shapeCol = "#000000";

 
 

    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");
    this.userProvidedBlur  = 0;
    let self = this;

    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;
      console.log(self.userProvidedBlur);
    });

    let filterButton_sepia = document.getElementById("filter_button_sepia");
    let sepiaInput = document.getElementById("sepianum");
    this.userProvidedSepia  = 0;

    filterButton_sepia.addEventListener("click", function () {
      //get value from input field divided by 100 to get a value between 0 and 1
      self.userProvidedSepia = sepiaInput.value / 100;
      console.log(self.userProvidedSepia);
    });

    let filterButton_hue = document.getElementById("filter_button_hue");
    let hueInput = document.getElementById("huenum");
    this.userProvidedHue  = 0;

    filterButton_hue.addEventListener("click", function () {
      self.userProvidedHue = hueInput.value;
      console.log(self.userProvidedHue);
    });

    let filterButton_invert = document.getElementById("filter_button_invert");
    let invertInput = document.getElementById("invertnum");
    this.userProvidedInvert  = 0;

    filterButton_invert.addEventListener("click", function () {
      //get value from input field divided by 100 to get a value between 0 and 1
      //This is the exact same logic as sepia/
      self.userProvidedInvert = invertInput.value / 100;
      console.log(self.userProvidedInvert);
    });
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; 
  }
  
  display() {
    this.context.save();
    this.context.filter = `blur(${this.userProvidedBlur}px)`;
//+= otherwise they fight for dominance for some reason./
    this.context.filter += `sepia(${this.userProvidedSepia})`;

    this.context.filter += `hue-rotate(${this.userProvidedHue}deg)`;
    
    this.context.filter += `invert(${this.userProvidedInvert})`;
    
  
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50,50)

    
    this.context.restore();
  
  }

    //called when rectangle color is to be updated
  changeColor(newCol){
   /** FILL IN */

   this.shapeCol = this.getRandomColor();
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx,my){
    
     /** FILL IN */
    //  this.overCanvas(e);
     

     this.shapeX = mx - 870;
     this.shapeY = my - 500;

     this.context.fillRect(this.shapeX, this.shapeY, 50,50)

     console.log(this.shapeX, this.shapeY);

  }
  update(videoElement) {
    this.videoElement = videoElement;
  }
}