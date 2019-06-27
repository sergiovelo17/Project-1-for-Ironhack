class Map3Canvas{

  constructor(){
    this.ctx = document.getElementById('map3').getContext("2d");
    this.key = {
      x: 600,
      y: 500,
      width: 10,
      height: 10,
    }
    this.releaseTheGuards = false;
  }

  drawKey(player){
    if(player.keyAcquired == false){
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffff00";
    this.ctx.fillRect(this.key.x,this.key.y, this.key.width,this.key.height);
    this.ctx.closePath();
    } else{
      this.ctx.font = "20px Copperplate";
      this.ctx.fillStyle = "#ff0000";
      this.ctx.fillText("EXIT->",260,20);
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
    this.ctx.drawImage(img,enemy.x,enemy.y,enemy.width,enemy.height);
  }
  drawMap(){
    this.ctx.clearRect(0, 0, 750, 600);
    this.ctx.globalAlpha = 1;
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#ff0000";
    this.ctx.fillStyle = "#ff0000";
    if(this.releaseTheGuards === false){
    this.ctx.moveTo(0,200)
    this.ctx.lineTo(750,200);
    }
    this.ctx.moveTo(750,200);
    this.ctx.lineTo(750,0);
    this.ctx.lineTo(0,0);
    this.ctx.lineTo(0,200);
    this.ctx.lineTo(0,600);
    this.ctx.lineTo(750,600);
    this.ctx.lineTo(750,200);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(420,320);
    this.ctx.arc(420, 320, 75, 1*Math.PI, 2.5*Math.PI);
    this.ctx.fill();
    this.ctx.moveTo(260,515);
    this.ctx.lineTo(320,500);
    this.ctx.lineTo(330,420);
    this.ctx.moveTo(260,515);
    this.ctx.lineTo(190,500);
    this.ctx.lineTo(180,420);
    this.ctx.lineTo(230,370);
    this.ctx.lineTo(300,375);
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
    // console.log("Detect line function called")
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