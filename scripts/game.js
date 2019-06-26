window.onload = function() {
  $('#prepare-player').toggle();
  $('#game-screen').toggle();
  $('#game-over').toggle();
  $('#map2').toggle();
  class Game {
    constructor(id) {
      if(id === 0){
        this.theCanvas = new MapCanvas();
      }else if(id = 1){
        this.theCanvas = new Map2Canvas();
      }
      this.user = new Player();
      this.enemies = [];
      this.bullets = [];
      this.enemyBullets = [];
      this.lastArrowPressed = "N";
      this.bulletCordinateX = 1;
      this.bulletCordinateY = 1;
      this.myId;
      this.nextId;
      this.levelOneWon = false;
      this.levelTwoWon = false;
    }

    drawGame1() {
      this.theCanvas.drawMap();
    }
    drawGame2(){
      this.theCanvas.drawMap();
    }

    playerShoot(){
      if(this.lastArrowPressed === "N"){
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[0],this.user);
      }else  if(this.lastArrowPressed === "S"){
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[1],this.user);
      }else  if(this.lastArrowPressed === "E"){
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[2],this.user);
      }else{
        this.theCanvas.clearUser(this.user.x,this.user.y,this.user.width,this.user.height);
        this.theCanvas.drawUser(this.user.playerShooting[3],this.user);
      }
    }

    bulletCordinates(){
      if(this.lastArrowPressed === 'N'){
        this.bulletCordinateX += 14;
      }else if(this.lastArrowPressed === 'S'){
        this.bulletCordinateX+=14;
        this.bulletCordinateY+=  30;
      }else if(this.lastArrowPressed === 'E'){
        this.bulletCordinateX += 30;
        this.bulletCordinateY +=14;
      }else{
        this.bulletCordinateY+=14;
      }
    }
    enemyBulletCoordinates(theEnemy){
      if(theEnemy.currDirection === 'N'){
        theEnemy.enemyBulletCordX = theEnemy.x + 19;
        theEnemy.enemyBulletCordY = theEnemy.y + 5;
      }else if(theEnemy.currDirection === 'S'){
        theEnemy.enemyBulletCordX = theEnemy.x + 19;
        theEnemy.enemyBulletCordY = theEnemy.y + 35;
      }else if(theEnemy.currDirection === 'E'){
        theEnemy.enemyBulletCordX = theEnemy.x + 35;
        theEnemy.enemyBulletCordY = theEnemy.y + 19;
      }else{
        theEnemy.enemyBulletCordX = theEnemy.x + 5;
        theEnemy.enemyBulletCordY = theEnemy.y + 19;

      }
    }

    gameOver(){
      $('#game-screen').toggle();
      $('#game-over').toggle();
      this.user = undefined;

    }

    switchFromLevelOneToLevelTwo(){
      $(`${this.myId}`).toggle();
      $(`${this.nextId}`).toggle();
    }

    isWinner(leftx,rightx,topy,bottomy) {
      if (
        this.user.keyAcquired === true &&
        this.user.x > leftx &&
        this.user.x < rightx &&
        this.user.y < topy &&
        this.user.y > bottomy
      ) {
        this.levelOneWon=  true;
        return true;
      }
      this.levelOneWon =  false;
      return false;
    }
    createEnemies(){
      this.enemies.forEach(theEnemy => {
        theEnemy.drawSelf(this.theCanvas, this);
      });
    }
    animate() {
      let num = 0;
      setInterval(() => {
        if(num % 15 === 0){
          this.theCanvas.drawMap();
          this.theCanvas.drawUser(this.user.lastUserImage,this.user);
        }
        this.enemies.forEach(theEnemy => {
          theEnemy.drawSelf(this.theCanvas, this.user, this);
        });
        this.theCanvas.drawKey(this.user);
        num++;
      }, 100);
    }
    shoot() {
      setInterval(() => {
        this.bullets.forEach(theBullet => {
          theBullet.drawSelf(this.theCanvas, this.bullets, this.enemies);
        });
      }, 20);
    }
    enemyShoot(){
      setInterval(() => {
        this.enemyBullets.forEach(theBullet => {
          theBullet.drawEnemyBullet(this.theCanvas, this.enemyBullets, this.user, this);
        });
      }, 20);
    }
    createEveryoneMovement() {
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/1sg6rtrx73bi2mr/THISright%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/rhsz9u9zxn10zlb/THISright%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/1sg6rtrx73bi2mr/THISright%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingRight(
        "https://dl.dropboxusercontent.com/s/2prv8n20gbcnjek/THISright%5B2%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/v2s58p86mq7cca0/usethisleft%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/3dxkd2awjq32zpu/usethisleft%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/v2s58p86mq7cca0/usethisleft%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingLeft(
        "https://dl.dropboxusercontent.com/s/72czb2f81texmve/usethisleft%5B2%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/gnjf9gqemch77ns/thisup%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/fhfhd5mw0a04bbd/thisup%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/gnjf9gqemch77ns/thisup%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingUp(
        "https://dl.dropboxusercontent.com/s/720j5ujjfidb6ii/thisup%5B2%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/zmszifl5lx9i41m/usethisdown%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/qr4x4q73exloj9e/usethisdown%5B1%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/zmszifl5lx9i41m/usethisdown%5B0%5D.png?dl=0"
      );
      this.user.createPlayerMovingDown(
        "https://dl.dropboxusercontent.com/s/wzhw7q21y2zrwk2/usethisdown%5B2%5D.png?dl=0"
      );
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/xno7iufod79xsuu/playershoot%5BN%5D.png?dl=0');
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/7jxaoi5tmub81ch/playershoot%5BS%5D.png?dl=0');
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/hi0rpf85koeeo0z/playerShoot%5BR%5D.png?dl=0');
      this.user.createPlayerShooting('https://dl.dropboxusercontent.com/s/er03360l3vob3y6/playershoot%5Bw%5D.png?dl=0');
      this.enemies.forEach(theEnemy => {
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/sj93q5n2jzzmp9k/enemy%5B1%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/qoutemvnrw7bkgx/enemy%5B0%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/sj93q5n2jzzmp9k/enemy%5B1%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingRight(
          "https://dl.dropboxusercontent.com/s/wzlomyr67cq4lnm/enemy%5B2%5D.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/go0eb1gkv11ytd3/enemy%5B0%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/5yj1kvs3daiqvcl/enemy%5B1%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/go0eb1gkv11ytd3/enemy%5B0%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingDown(
          "https://dl.dropboxusercontent.com/s/z87n9hedlz5knbt/enemy%5B2%5Ddown.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/f16q6xwlh89nnq2/enemy%5B0%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/qzwrkdfly1ss1j7/enemy%5B1%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/f16q6xwlh89nnq2/enemy%5B0%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingLeft(
          "https://dl.dropboxusercontent.com/s/xngonyedqwo5btn/enemy%5B2%5Dleft.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/0lc97eshc9o1f82/enemy%5B0%5DUp.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/tscu1avdk2yvove/enemy%5B1%5Dup.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/0lc97eshc9o1f82/enemy%5B0%5DUp.png?dl=0"
        );
        theEnemy.createEnemyMovingUp(
          "https://dl.dropboxusercontent.com/s/dq5w0pk62t081l9/enemy%5B2%5Dup.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/ouy685v2dk9sjr2/offdead%5B0%5D.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/xwphtq53xlwiuce/offdead%5B1%5D.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/8s2yhgen8e4lpv0/offdead%5B2%5D.png?dl=0"
        );
        theEnemy.createEnemyDying(
          "https://dl.dropboxusercontent.com/s/ls9slr58r8lyfg8/offdead%5B3%5D.png?dl=0"
        );
      });
    }
  }

  $('#user-is-ready').click(()=>{
    let usersName = $('#userName')[0].value;
    $('#Players-name')[0].innerHTML = usersName;
  });
  let switchToTwo = 0;
  let oneLifeBoost = 0;
  $(document).keydown(function(e) {
    
    let directions = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    if(myGame.levelOneWon === true && switchToTwo === 0){
      myGame.switchFromLevelOneToLevelTwo();
      switchToTwo++;
    }
    if(!myGame.levelOneWon){
    if (directions.includes(e.key)) {
      e.preventDefault();
      myGame.user.moveYourSelf(e.key, myGame.theCanvas, myGame);
      myGame.user.gotKey(myGame.theCanvas);
      // myGame.theCanvas.drawKey(myGame.user);
    
      if (myGame.isWinner(130,160,160,130)) {
        alert("winner");
      }
    }
  

    if (e.code === "Space") {
      e.preventDefault();
      if(myGame.bullets.length < 2){
      myGame.playerShoot();
      myGame.bulletCordinateX = myGame.user.x;
      myGame.bulletCordinateY = myGame.user.y;
      myGame.bulletCordinates();
      let currBullet = new Bullet(
        myGame.bulletCordinateX,
        myGame.bulletCordinateY,
        myGame.lastArrowPressed
      );
      myGame.bullets.push(currBullet);
      }
    }
  } else if(!myGame2.levelTwoWon){
    
    if(oneLifeBoost==0){
      let health = document.getElementById("health")
      health.value = 100;
      oneLifeBoost++;
    }
    if (directions.includes(e.key)) {
      e.preventDefault();
      myGame2.user.moveYourSelf(e.key, myGame2.theCanvas, myGame2);
      myGame2.user.gotKey(myGame2.theCanvas);
      // myGame.theCanvas.drawKey(myGame.user);
      if (myGame2.isWinner(680,720,130,90)) {
        alert("winner");
      }
    }
  
    if (e.code === "Space") {
      e.preventDefault();
      if(myGame2.bullets.length < 2){
      myGame2.playerShoot();
      myGame2.bulletCordinateX = myGame2.user.x;
      myGame2.bulletCordinateY = myGame2.user.y;
      myGame2.bulletCordinates();
      let currBullet = new Bullet(
        myGame2.bulletCordinateX,
        myGame2.bulletCordinateY,
        myGame2.lastArrowPressed
      );
      myGame2.bullets.push(currBullet);
      }
    }
  }
  });
  $('#start-game').click(()=>{
  $('#starting-page').toggle();
  $('#prepare-player').toggle();
  });
  $('#user-is-ready').click(()=>{
    $('#prepare-player').toggle();
    $('#game-screen').toggle(); 
    })
  let myGame = new Game(0);
  myGame.myId = '#map';
  myGame.nextId = '#map2';
  myGame.drawGame1();
  myGame.enemies = [new Enemy(150, 150, 20, 20, 4),new Enemy(280, 150, 20, 20, 4),new Enemy(50, 250, 20, 20, 4),new Enemy(350, 300, 20, 20, 5),new Enemy(490, 160, 20, 20, 4),new Enemy(360, 380, 20, 20, 0),new Enemy(155, 500, 20, 20, 4)];
  myGame.createEveryoneMovement();
  myGame.theCanvas.drawKey(myGame.user);
  myGame.theCanvas.drawUser(myGame.user.playerMovingUp[0],myGame.user);
  myGame.user.lastUserImage = myGame.user.playerMovingUp[0];
  myGame.animate();
  myGame.shoot();
  myGame.enemyShoot();
  let myGame2 = new Game(1);
  myGame2.myId ='#map2';
  myGame2.drawGame2();
  myGame2.enemies = [new Enemy(150, 150, 20, 20, 5),new Enemy(250, 150, 20, 20, 0),new Enemy(50, 250, 20, 20, 0),new Enemy(280, 300, 20, 40, 0),new Enemy(530, 160, 20, 40, 0),new Enemy(350, 380, 20, 40, 5),new Enemy(170, 460, 20, 40, 5),new Enemy(150, 400, 20, 40, 0)];
  myGame2.createEveryoneMovement();
  myGame2.theCanvas.drawKey(myGame2.user);
  myGame2.theCanvas.drawUser(myGame2.user.playerMovingUp[0],myGame2.user);
  myGame2.user.lastUserImage = myGame2.user.playerMovingUp[0];
  myGame2.animate();
  myGame2.shoot();
  myGame2.enemyShoot();
};
