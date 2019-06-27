class MapCanvas {
  constructor() {
    this.ctx = document.getElementById("map").getContext("2d");
    this.key = {
      x: 390,
      y: 280,
      width: 10,
      height: 10
    };
  }

  drawKey(player) {
    if (player.keyAcquired == false) {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#ffff00";
      this.ctx.fillRect(
        this.key.x,
        this.key.y,
        this.key.width,
        this.key.height
      );
      this.ctx.closePath();
    } else {
      this.ctx.font = "20px Copperplate";
      this.ctx.fillStyle = "#ff0000";
      this.ctx.fillText("EXIT->", 55, 150);
    }
  }
  drawBullet(theBullet) {
    this.ctx.fillStyle = "#ff0000";
    this.ctx.fillRect(
      theBullet.x,
      theBullet.y,
      theBullet.width,
      theBullet.height
    );
  }
  clearBullet(theBullet) {
    this.ctx.clearRect(
      theBullet.x,
      theBullet.y,
      theBullet.width,
      theBullet.height
    );
  }
  clearEnemy(enemy) {
    this.ctx.clearRect(enemy.x, enemy.y, enemy.width, enemy.height);
  }
  drawEnemy(img, enemy) {
    // this.ctx.fillStyle = "#ff0000";
    this.ctx.drawImage(img, enemy.x, enemy.y, enemy.width, enemy.height);
  }
  drawMap() {
    this.ctx.clearRect(0, 0, 750, 600);
    this.ctx.globalAlpha = 0.01;
    this.ctx.lineWidth = 8;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#ff0000";
    this.ctx.fillStyle = "#ff0000";
    this.ctx.moveTo(130, 30);
    this.ctx.lineTo(330, 30);
    this.ctx.lineTo(330, 190);
    this.ctx.lineTo(220, 190);
    this.ctx.lineTo(220, 435);
    this.ctx.lineTo(250, 435);
    this.ctx.lineTo(250, 500);
    this.ctx.lineTo(250, 435);
    this.ctx.lineTo(310, 435);
    this.ctx.moveTo(350, 435);
    this.ctx.lineTo(420, 435);
    this.ctx.moveTo(460, 435);
    this.ctx.lineTo(525, 435);
    this.ctx.lineTo(525, 195);
    this.ctx.lineTo(475, 195);
    this.ctx.moveTo(440, 195);
    this.ctx.lineTo(420, 195);
    this.ctx.lineTo(420, 30);
    this.ctx.lineTo(625, 30);
    this.ctx.lineTo(625, 190);
    this.ctx.lineTo(550, 190);
    this.ctx.stroke();
    this.ctx.moveTo(550, 182);
    this.ctx.fillRect(575, 185, 15, 130);
    this.ctx.fillRect(555, 185, 170, 15);
    this.ctx.fillRect(710, 197, 10, 230);
    this.ctx.fillRect(720, 430, -160, 10);
    this.ctx.fillRect(595, 430, -18, -95);
    this.ctx.moveTo(635, 425);
    this.ctx.lineTo(635, 585);
    this.ctx.lineTo(465, 585);
    this.ctx.lineTo(465, 475);
    this.ctx.lineTo(440, 475);
    this.ctx.moveTo(415, 475);
    this.ctx.lineTo(370, 475);
    this.ctx.lineTo(370, 585);
    this.ctx.lineTo(455, 585);
    this.ctx.lineTo(250, 585);
    this.ctx.lineTo(250, 515);
    this.ctx.moveTo(245, 585);
    this.ctx.lineTo(110, 585);
    this.ctx.lineTo(110, 425);
    this.ctx.stroke();
    this.ctx.fillRect(35, 435, 145, -15);
    this.ctx.fillRect(35, 435, -15, -225);
    this.ctx.fillRect(160, 415, 20, -80);
    this.ctx.fillRect(22, 205, 110, -20);
    this.ctx.moveTo(135, 200);
    this.ctx.lineTo(160, 200);
    this.ctx.lineTo(160, 240);
    this.ctx.lineTo(180, 200);
    this.ctx.lineTo(180, 190);
    this.ctx.lineTo(130, 190);
    this.ctx.lineTo(130, 30);
    this.ctx.moveTo(415, 190);
    this.ctx.lineTo(415, 260);
    this.ctx.lineTo(340, 260);
    this.ctx.lineTo(340, 190);
    this.ctx.moveTo(220, 425);
    this.ctx.lineTo(210, 425);
    this.ctx.stroke();
    this.ctx.moveTo(510, 189);
    this.ctx.fillRect(510, 189, 15, 230);
    this.ctx.fillRect(510, 196, -30, -10);
    this.ctx.closePath();
  }
  clearUser(x, y, width, height) {
    this.ctx.clearRect(x, y, width, height);
  }
  drawUser(img, user) {
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(img, user.x, user.y, user.width, user.height);
   
  }

  detectLine(x, y) {
    var imageData = this.ctx.getImageData(0, 0, 750, 600),
      inputData = imageData.data,
      pData = (~~x + ~~y * 750) * 4;
    if (inputData[pData + 3]) {
      return true;
    }
    return false;
  }
}
