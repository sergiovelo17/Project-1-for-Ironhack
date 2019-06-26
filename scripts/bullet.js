class Bullet {
  constructor(xcord, ycord, direction,whoShotMe) {
    this.x = xcord;
    this.y = ycord;
    this.direction = direction;
    this.height = 4;
    this.width = 4;
    this.deathSoundSrc = 'music/Roblox-death-sound.mp3';
  }
  bulletCollision(allBullets) {
    let index = allBullets.indexOf(this);
    allBullets.splice(index, 1);
  }
  checkIfUserIsHit(user,myGame){
    if (
      this.x < user.x + user.width &&
      this.x + this.width > user.x &&
      this.y < user.y + user.height &&
      this.y + this.height > user.y
    ) {
      if(myGame.levelWon === false){
      let health = document.getElementById("health")
      health.value -= myGame.enemyStrength;
      user.health -= myGame.enemyStrength;
    }
  }
    if(user.health <= 0 && myGame.levelWon === false){
      myGame.gameOver();
    }
  }
  checkHit(enemyArr,theCanvas) {
    enemyArr.forEach(theEnemy => {
      if (
        this.x < theEnemy.x + theEnemy.width &&
        this.x + this.width > theEnemy.x &&
        this.y < theEnemy.y + theEnemy.height &&
        this.y + this.height > theEnemy.y
      ) {
        theEnemy.health -= 10;
      }
      if (theEnemy.health === 0) {
        let deathSound = new Audio();
        deathSound.src = this.deathSoundSrc;
        deathSound.play();
        for (let i = 0; i < 5; i++) {
          if (i < 4) {
            setTimeout(function() {
              theCanvas.clearEnemy(theEnemy);
              theCanvas.drawEnemy(theEnemy.enemyDying[i],theEnemy);
              
            }, 500 * i);

            if(i === 3){ 
              setTimeout(function() {
              theCanvas.clearEnemy(theEnemy);
            }, 500 * (i+1));
            }


          }
          else{
            theCanvas.clearEnemy(theEnemy);
            let indexOfEnemy = enemyArr.indexOf(theEnemy);
            enemyArr.splice(indexOfEnemy,1);
          }
        }
      }
    });
  }
  drawEnemyBullet(theCanvas, enemyBullets, theUser, myGame){
    
    theCanvas.clearBullet(this);
    if (this.direction === "N") {
      if (!theCanvas.detectLine(this.x, this.y - 5)) {
        this.y -= 5;
        theCanvas.drawBullet(this);
      } else {
        this.y -= 5;
        this.checkIfUserIsHit(theUser,myGame);
        this.bulletCollision(enemyBullets);
      }
    }
    if (this.direction === "S") {
      if (!theCanvas.detectLine(this.x, this.y + 6)) {
        this.y += 6;
        theCanvas.drawBullet(this);
      } else {
        this.y += 6;
        this.checkIfUserIsHit(theUser,myGame);
        this.bulletCollision(enemyBullets);
      }
    }
    if (this.direction === "E") {
      if (!theCanvas.detectLine(this.x + 6, this.y)) {
        this.x += 6;
        theCanvas.drawBullet(this);
      } else {
        this.x += 6;
        this.checkIfUserIsHit(theUser, myGame);
        this.bulletCollision(enemyBullets);
      }
    }
    if (this.direction === "W") {
      if (!theCanvas.detectLine(this.x - 5, this.y)) {
        this.x -= 5;
        theCanvas.drawBullet(this);
      } else {
        this.x -= 5;
        this.checkIfUserIsHit(theUser, myGame);
        this.bulletCollision(enemyBullets);
      }
    }
  }
  

  drawSelf(theCanvas, allBullets, theEnemies) {
    theCanvas.clearBullet(this);
    if (this.direction === "N") {
      if (!theCanvas.detectLine(this.x, this.y - 4)) {
        this.y -= 4;
        theCanvas.drawBullet(this);
      } else {
        this.y -= 4;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
    if (this.direction === "S") {
      if (!theCanvas.detectLine(this.x, this.y + 5)) {
        this.y += 5;
        theCanvas.drawBullet(this);
      } else {
        this.y += 5;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
    if (this.direction === "E") {
      if (!theCanvas.detectLine(this.x + 5, this.y)) {
        this.x += 5;
        theCanvas.drawBullet(this);
      } else {
        this.x += 5;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
    if (this.direction === "W") {
      if (!theCanvas.detectLine(this.x - 4, this.y)) {
        this.x -= 4;
        theCanvas.drawBullet(this);
      } else {
        this.x -= 4;
        this.checkHit(theEnemies,theCanvas);
        this.bulletCollision(allBullets);
      }
    }
    console.log(allBullets);
  }
}