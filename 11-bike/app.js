var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

/*Sky*/
ctx.beginPath();
ctx.arc(250,250,225,0,7);
ctx.fillStyle = '#68c3d9';
ctx.fill();
ctx.lineWidth = 50;
ctx.strokeStyle = '#86cfe0';
ctx.stroke();
ctx.closePath();

/*Sun*/
ctx.beginPath();
ctx.arc(320,80,40,0,7);
ctx.fillStyle = 'rgba(240,216,76,0.8)';
ctx.fill();
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(242,222,102,0.3)';
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(320,80,25,0,7);
ctx.fillStyle = 'rgba(234,200,0,0.8)';
ctx.fill();
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(238,211,50,0.5)';
ctx.stroke();
ctx.closePath();

/*Hill*/
ctx.beginPath();
ctx.lineJoin = 'round';
ctx.arc(250,250,250,0.3,2.8);
ctx.fillStyle = '#51b432';
ctx.fill();
ctx.quadraticCurveTo(250, 100, 350, 200);
ctx.fill();
ctx.closePath();

/*Ground*/
ctx.beginPath();
ctx.arc(250,250,235,0.5,2.6);
ctx.fillStyle = '#834715';
ctx.fill();
ctx.lineWidth = 30;
ctx.strokeStyle = '#5b310e';
ctx.stroke();
ctx.closePath();

/*Grass*/
ctx.beginPath();
ctx.moveTo(36,360);
ctx.lineTo(469,350);
ctx.lineWidth = 40;
ctx.strokeStyle='#51b432';
ctx.stroke();
ctx.closePath();

/*Bike*/