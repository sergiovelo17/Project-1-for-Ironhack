class Map2Canvas{

  constructor(){
    this.ctx = document.getElementById('map2').getContext("2d");
    this.key = {
      x: 100,
      y: 80,
      width: 10,
      height: 10,
    }
  }

  drawKey(player){
    if(player.keyAcquired == false){
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffff00";
    this.ctx.fillRect(this.key.x,this.key.y, this.key.width,this.key.height);
    this.ctx.closePath();
    } else{
      this.ctx.font = "20px Copperplate";
      this.ctx.fillStyle = "#000000";
      this.ctx.fillText("EXIT->",690,90);
    }
  }
  drawBullet(theBullet){
    this.ctx.fillStyle = "#ff0000";
    this.ctx.fillRect(theBullet.x,theBullet.y,theBullet.width,theBullet.height);
  }
  clearBullet(theBullet){
    this.ctx.clearRect(theBullet.x,theBullet.y,theBullet.width,theBullet.height);
  }
  clearEnemy(enemy){
    this.ctx.clearRect(enemy.x,enemy.y,enemy.width,enemy.height);
  }
  drawEnemy(img,enemy){
    // this.ctx.fillStyle = "#ff0000";
    this.ctx.drawImage(img,enemy.x,enemy.y,enemy.width,enemy.height);
  }
  drawMap(){
    this.ctx.clearRect(0, 0, 750, 600);
    this.ctx.globalAlpha = 1;
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#ff0000";
    this.ctx.fillStyle = "#ff0000";
    this.ctx.moveTo(0,65);
    this.ctx.lineTo(750,65);
    this.ctx.moveTo(0,570);
    this.ctx.lineTo(750,570);
    this.ctx.moveTo(580,200);
    this.ctx.lineTo(700,200);
    this.ctx.rotate(23 * Math.PI / 180);
    this.ctx.fillRect(580,40,70,250);
    this.ctx.resetTransform();
    this.ctx.rotate(320 * Math.PI / 180);
    this.ctx.fillRect(310,520,140,250);
    this.ctx.resetTransform();
    this.ctx.rotate(26 * Math.PI / 180);
    this.ctx.fillRect(460,-90,70,250);
    this.ctx.resetTransform();
    this.ctx.rotate(316 * Math.PI / 180);
    this.ctx.fillRect(-180,290,140,270);
    this.ctx.resetTransform();
    this.ctx.moveTo(2,65);
    this.ctx.lineTo(2,570);
    this.ctx.moveTo(748,65);
    this.ctx.lineTo(748,570);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  clearUser(x,y,width,height){
    this.ctx.clearRect(x,y,width,height);
  }
  drawUser(img,user){
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(img,user.x,user.y,user.width,user.height);
  }

  detectLine(x, y) {
    var imageData = this.ctx.getImageData(0, 0, 750, 600),
        inputData = imageData.data,
        pData = (~~x + (~~y * 750)) * 4;

    if (inputData[pData + 3]) {
        return true;
    }

    return false;
}






}
// let theCanvas = new MapCanvas();
// theCanvas.drawMap();