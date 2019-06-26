class Player extends Person {
  constructor() {
    super(550, 500, 100, 100);
    this.keyAcquired = false;
    this.currImageOfUser = 4;
    this.playerMovingRight = [];
    this.playerMovingLeft = [];
    this.playerMovingUp = [];
    this.playerMovingDown = [];
    this.playerShooting = [];
    this.lastUserImage;
  }

  gotKey(theCanvas) {
    if (
      this.x < theCanvas.key.x + theCanvas.key.width &&
      this.x + this.width > theCanvas.key.x &&
      this.y < theCanvas.key.y + theCanvas.key.height &&
      this.y + this.height > theCanvas.key.y
    ) {
      this.keyAcquired = true;
    }
  }
  createPlayerMovingRight(url) {
    let playerImage = new Image();
    playerImage.crossOrigin = "Anonymous";
    playerImage.src = url;
    this.playerMovingRight.push(playerImage);
  }
  createPlayerMovingLeft(url) {
    let playerImage = new Image();
    playerImage.crossOrigin = "Anonymous";
    playerImage.src = url;
    this.playerMovingLeft.push(playerImage);
  }
  createPlayerMovingDown(url) {
    let playerImage = new Image();
    playerImage.crossOrigin = "Anonymous";
    playerImage.src = url;
    this.playerMovingDown.push(playerImage);
  }
  createPlayerMovingUp(url) {
    let playerImage = new Image();
    playerImage.crossOrigin = "Anonymous";
    playerImage.src = url;
    this.playerMovingUp.push(playerImage);
  }
  createPlayerShooting(url){
    let playerImage = new Image();
    playerImage.crossOrigin = "Anonymous";
    playerImage.src = url;
    this.playerShooting.push(playerImage);
  }
  moveYourSelf(key, theCanvas, myGame) {
    // if(!theCanvas.detectLine(this.x,this.y)){
    theCanvas.clearUser(this.x, this.y, this.width, this.height);
    if (key === "ArrowDown") {
      if (!theCanvas.detectLine(this.x, this.y + 35)) {
        myGame.lastArrowPressed = "S";
        this.y += 10;
      }
      let indexOfImage = this.currImageOfUser % 4;
      theCanvas.drawUser(this.playerMovingDown[indexOfImage],this);
        this.lastUserImage = this.playerMovingDown[indexOfImage];
      this.currImageOfUser++;
    }
    if (key === "ArrowUp") {
      if (!theCanvas.detectLine(this.x, this.y - 5)) {
        // && !theCanvas.detectLine(this.x+7, this.y - 7) && !theCanvas.detectLine(this.x-7, this.y - 7))
        myGame.lastArrowPressed = "N";
        this.y -= 10;
      }
      let indexOfImage = this.currImageOfUser % 4;
      theCanvas.drawUser(this.playerMovingUp[indexOfImage],this);
        this.lastUserImage = this.playerMovingUp[indexOfImage];
        this.currImageOfUser++;
    }
    if (key === "ArrowRight") {
      if (!theCanvas.detectLine(this.x + 35, this.y) && !theCanvas.detectLine(this.x + 10, this.y)) {
        myGame.lastArrowPressed = "E";
        this.x += 10;
      }
      let indexOfImage = this.currImageOfUser % 4;
      theCanvas.drawUser(this.playerMovingRight[indexOfImage],this);
        this.lastUserImage = this.playerMovingRight[indexOfImage];
      this.currImageOfUser++;
    }
    if (key === "ArrowLeft") {
      if (!theCanvas.detectLine(this.x - 15, this.y) && !theCanvas.detectLine(this.x - 10, this.y) && !theCanvas.detectLine(this.x - 1, this.y)) {
        myGame.lastArrowPressed = "W";
        this.x -= 10;
      }
      let indexOfImage = this.currImageOfUser % 4;
      theCanvas.drawUser(this.playerMovingLeft[indexOfImage],this);
      this.lastUserImage = this.playerMovingLeft[indexOfImage];
      this.currImageOfUser++;
    }
    // theCanvas.walls.forEach((theWall)=>{
    //   if(this.x > theWall.start.x && )
    // })

    // }
    // let indexOfImage = this.currImageOfUser % 4;
    // theCanvas.drawUser(
    //   this.playerMovingRight[indexOfImage],
    //   this.x,
    //   this.y,
    //   this.width,
    //   this.height
    // );
    // this.currImageOfUser++;
  }
}