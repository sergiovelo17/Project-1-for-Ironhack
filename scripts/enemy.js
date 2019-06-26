class Enemy extends Person {
  constructor(xcord, ycord, power, health, id) {
    super(xcord, ycord, power, health);
    this.id = id;
    this.direction = id;
    this.indexOfImage = 4;
    this.enemyMovingRight = [];
    this.enemyMovingDown = [];
    this.enemyMovingLeft = [];
    this.enemyMovingUp = [];
    this.enemyDying = [];
    this.currDirection = "N";
    this.enemyBulletCordX = 1;
    this.enemyBulletCordY = 1;
    this.playerIsSeen = false;
    this.shotSoundSrc = 'music/8d82b5_doom_shotgun_firing_sound_effect.mp3'
  }
  createEnemyDying(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyDying.push(enemyImage);
  }
  createEnemyMovingRight(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingRight.push(enemyImage);
  }
  createEnemyMovingDown(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingDown.push(enemyImage);
  }
  createEnemyMovingLeft(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingLeft.push(enemyImage);
  }
  createEnemyMovingUp(url) {
    let enemyImage = new Image();
    enemyImage.crossOrigin = "Anonymous";
    enemyImage.src = url;
    this.enemyMovingUp.push(enemyImage);
  }
  

  

  attackPlayer(user, theGame) {
     
    // if(!this.wallInFront(user,theGame)){
    theGame.enemyBulletCoordinates(this);
   if(Math.floor(Math.random() * 7) == 5 && theGame.levelWon == false){
     let shotSound = new Audio();
     shotSound.src  = this.shotSoundSrc;
     shotSound.play();
    let currBullet = new Bullet(
      this.enemyBulletCordX,
      this.enemyBulletCordY,
      this.currDirection,
    );
    theGame.enemyBullets.push(currBullet);
    }
  // }
  }
  playerInVicinity(user) {
    if (user.x - this.x < 100 && user.y - this.y < 100) {
      this.playerIsSeen = true;
    }
  }

  drawSelf(theCanvas, user, theGame) {
    theCanvas.clearEnemy(this);
    this.playerInVicinity(user);
    if (!this.playerIsSeen) {
      let enemyDirection = this.direction % 4;
      if (enemyDirection === 0 && (this.id === 0 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x, this.y + 35)) {
          this.y += 5;
          this.currDirection = "S";
        } else {
          if (this.id === 0) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingDown[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      } else if (enemyDirection === 1 && (this.id === 5 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x + 35, this.y)) {
          this.x += 5;
          this.currDirection = "E";
        } else {
          if (this.id === 5) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingRight[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      } else if (enemyDirection === 2 && (this.id === 0 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x, this.y - 15)) {
          this.y -= 5;
          this.currDirection = "N";
        } else {
          if (this.id === 0) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingUp[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      } else if (enemyDirection === 3 && (this.id === 5 || this.id === 4)) {
        if (!theCanvas.detectLine(this.x - 15, this.y)) {
          this.x -= 5;
          this.currDirection = "W";
        } else {
          if (this.id === 5) {
            this.direction += 2;
          } else {
            this.direction++;
          }
        }
        let currIndexOfEnemy = this.indexOfImage % 4;
        let img = this.enemyMovingLeft[currIndexOfEnemy];
        theCanvas.drawEnemy(img, this);
      }

      // theCanvas.drawEnemy(this);
    } else {
      if (user.x === this.x || user.x === this.x + 5 || user.x === this.x - 5) {
        if(user.y > this.y){
          this.currDirection = 'S';
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingDown[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
        }else{
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingUp[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
          this.currDirection = 'N'
        }
          this.attackPlayer(user, theGame);
      
      } else if(user.y === this.y || user.y === this.y + 5 || user.y === this.y - 5){
        if(user.x > this.x){
          this.currDirection = 'E';
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingRight[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
        }else{
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingLeft[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
          this.currDirection = 'W'
        }
          this.attackPlayer(user, theGame);
      }else{
        if (user.x > this.x && !theCanvas.detectLine(this.x + 35, this.y) && !theCanvas.detectLine(this.x, this.y + 40) && !theCanvas.detectLine(this.x, this.y + 45)) {
          this.x += 5;
          this.currDirection = "E";
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingRight[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
        } else if (
          user.y < this.y &&
          !theCanvas.detectLine(this.x, this.y - 15)
        ) {
          this.y -= 5;
          this.currDirection = "N";
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingUp[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
        }else if (
          user.x < this.x &&
          !theCanvas.detectLine(this.x - 15, this.y)
        ) {
          this.x -= 5;
          this.currDirection = "W";
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingLeft[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
        } else if (
          user.y > this.y &&
          !theCanvas.detectLine(this.x, this.y + 35) && !theCanvas.detectLine(this.x, this.y + 40) && !theCanvas.detectLine(this.x, this.y + 45)
        ) {
          this.y += 5;
          this.currDirection = "S";
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingDown[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
        }else{
          let currIndexOfEnemy = this.indexOfImage % 4;
          let img = this.enemyMovingDown[currIndexOfEnemy];
          theCanvas.drawEnemy(img, this);
        }
      }
    }
  }
}
