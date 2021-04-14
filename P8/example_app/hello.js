var STOR = require("Storage");
//eval(STOR.read("widgets.js"));
var fontsize = 3;
var marginTop = 40;
var flag = false;
var WeekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function drawAll(){
  updateTime();
  updateRest(new Date());
  //P8.loadWidgets();
  //P8.drawWidgets();
}

function updateRest(now){
  var d = new Date();
  let date = d.toISOString().substr(0,10);
  writeLine(WeekDays[now.getDay()],1);
  writeLine(date,2);
}
function updateTime(){
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  h = h>=10?h:"0"+h;
  m = m>=10?m:"0"+m;
  s = s>=10?s:"0"+s;
  writeLine(h+":"+m+":"+s,0);
  writeLine(flag?" ":"_",3);
  flag = !flag;
  if(now.getMinutes() == 0)
    updateRest(now);
}
function writeLineStart(line){
  g.drawString(">",4,marginTop+line*30);
}
function writeLine(str,line){
  g.setFont("6x8",fontsize);
  //g.setColor(0,1,0);
  g.setColor(0,0x07E0,0);
  g.setFontAlign(-1,-1);
  g.clearRect(0,marginTop+line*30,((str.length+1)*20),marginTop+25+line*30);
  writeLineStart(line);
  g.drawString(str,25,marginTop+line*30);
} 

TC.on('swipe',(dir)=>{
    if (dir ==TC.RIGHT) ; 
    else if (dir == TC.UP) load("launch.js");
});

setInterval(updateTime, 1000);
setTimeout(()=>{
  g.clear();
  drawAll();
},500);
