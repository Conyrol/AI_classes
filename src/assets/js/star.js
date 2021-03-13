function starOrbit(distance, beginAngle, endAngle, width, color, speedAngle) {
  this.distance = distance;
  this.beginAngle = beginAngle;
  this.endAngle = endAngle;
  this.width = width;
  this.color = color;
  this.speedAngle = speedAngle;

  this.drawStarOrbit = function(x, y, ctx){
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = this.styleStarOrbit(x, y, ctx);
    ctx.lineWidth = this.width;
    ctx.arc(x, y, this.distance, this.beginAngle * Math.PI, this.endAngle * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }

  this.changeStarOrbit = function(){
    this.beginAngle += this.speedAngle;
    this.endAngle += this.speedAngle;
  }

  this.styleStarOrbit = function(x, y, ctx){
    let x1 = distance * Math.cos(this.beginAngle * Math.PI) + x;
    let y1 = distance * Math.sin(this.beginAngle * Math.PI) + y;
    let x2 = distance * Math.cos(this.endAngle * Math.PI) + x;
    let y2 = distance * Math.sin(this.endAngle * Math.PI) + y;
    let r = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    let radiusgrad = ctx.createRadialGradient(x2, y2, 0, x2, y2, r);
    radiusgrad.addColorStop(0, this.color);
    radiusgrad.addColorStop(1, 'rgba(255,255,255,0)');
    return radiusgrad;
  }
}

var color = ['rgb(249,205,173)', 'rgb(200,200,169)',  'rgb(29,131,8)', 'rgb(38,188,213)', 'rgb(226,17,0)', 'rgb(180,141,1)', 'rgb(204,202,169)', 'rgb(248,147,29)'];

function starOrbitMove(object) {
  var width = window.screen.width;
  var height = window.screen.height;
  console.log(width, height);
  object.attr('width', width);
  object.attr('height', height);
  console.log(width, height);
  var canvas = object[0];
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    var starOrbitList = new Array();
    var x = width/2, y = height/2;
    var maxWidth = Math.min(canvas.width - x, x);
    var maxHeight = Math.min(canvas.height - y, y);
    var maxR = Math.max(maxWidth, maxHeight);
    var number = Math.min(width*height/20000, 100);
    for(var i = 0; i < number; i++){
      var begin = Math.random()*2;
      starOrbitList.push(
        new starOrbit(
          30 + Math.floor(Math.random()*(maxR-30)),
          begin,
          begin + 0.3 + Math.max(Math.random()-0.3, 0),
          Math.ceil(Math.random()*4),
          color[Math.floor(Math.random()*color.length)],
          Math.min(Math.random()*0.02, 0.015)
        )
      );
    }
    function change(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for(var k = 0; k < starOrbitList.length; k++){
        var i = starOrbitList[k];
        i.changeStarOrbit();
        i.drawStarOrbit(x, y, ctx);
      }
      window.requestAnimationFrame(change);
    }
    window.requestAnimationFrame(change);  //调用
  }
  else alert("你的浏览器不支持canvas");
}

export default starOrbitMove