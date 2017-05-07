(function(){
  //Inicializamos con el constructor las variables a usar
  self.Tablero = function(x,y,ac,al){
    this.x = x;
    this.y = y;
    this.ac = ac;
    this.al = al;
    this.activo = [];
    this.posicionX = [];
    this.posicionY = [];
    this.sitio =[];
    this.res=" ";
    for (var i = 0; i <=32; i++) {
      this.activo[i]=false;
    }

  },//finalizamos el constructor y comenzamos el prototipo
    self.Tablero.prototype = {
      dibujarTablero: function(){
        //capturo el elemento canvas por medio de su id
      var canvas = document.getElementById('canvas');
      var canvas2 = document.getElementById('canvas');
      //le asigno con la funcion que es contenido 2d
      ctx = canvas.getContext("2d");
      ctx2 = canvas2.getContext("2d");
      //le asigno color con el estilo azul
      ctx.fillStyle = "orangeRed";
      //dibujo un rectangulo en la posición x, y con un ancho y alto
      ctx.rect(this.x, this.y, this.ac, this.al);
      //relleno el rectangulo
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.moveTo(0,200);
      ctx.lineTo(600,200);
      ctx.moveTo(0,200);
      ctx.lineTo(400,600);
      ctx.moveTo(0,300);
      ctx.lineTo(600,300);
      ctx.moveTo(0,400);
      ctx.lineTo(400,0);
      ctx.moveTo(0,400);
      ctx.lineTo(600,400);
      ctx.moveTo(100,400);
      ctx.lineTo(100,200);
      ctx.moveTo(200,0);
      ctx.lineTo(600,400);
      ctx.moveTo(200,0);
      ctx.lineTo(200,600);
      ctx.moveTo(200,100);
      ctx.lineTo(400,100);
      ctx.moveTo(200,200);
      ctx.lineTo(400,400);
      ctx.moveTo(200,400);
      ctx.lineTo(400,200);
      ctx.moveTo(200,500);
      ctx.lineTo(400,500);
      ctx.moveTo(200,600);
      ctx.lineTo(600,200);
      ctx.moveTo(300,0);
      ctx.lineTo(300,600);
      ctx.moveTo(400,0);
      ctx.lineTo(400,600);
      ctx.moveTo(500,400);
      ctx.lineTo(500,200);

      ctx.stroke();

//llenamos el arreglo de las zonas
var cero =0;
var cien = 100;
var doscientos = 200;
var trescientos = 300;
var cuatrocientos = 400;
var quinientos = 500;
var seicientos = 600;
var setecientos = 700;

for (var i = 0; i <= 2; i++) {
  this.posicionX[i]=doscientos;
  this.posicionY[i]=cero;

  doscientos+=100;
}

doscientos=200;
for (var i = 3; i <= 5; i++) {
  this.posicionX[i] = doscientos;
  this.posicionY[i] = cien;
  doscientos+=100;
}
doscientos=200;
 for (var i = 6; i <= 12; i++) {
   this.posicionX[i] = cero;
   this.posicionY[i] = doscientos;
   cero+=100;
 }
 cero=0;
 for (var i = 13; i <=19; i++) {
   this.posicionX[i] = cero;
   this.posicionY[i] = trescientos;
   cero+=100;
 }
 cero=0;
 for (var i = 20; i <=26; i++) {
   this.posicionX[i] = cero;
   this.posicionY[i] = cuatrocientos;
   cero+=100;
 }
 cero=0;
 for (var i = 27; i <=29; i++) {
   this.posicionX[i] = doscientos;
   this.posicionY[i] = quinientos;
   doscientos+=100;
 }
 doscientos=200;
 for (var i = 30; i <=32; i++) {
   this.posicionX[i] = doscientos;
   this.posicionY[i] = seicientos;
   doscientos+=100;
 }
 doscientos=200;



//Creamos los zorros
      ctx.fillStyle = "black";
      var const1 = 2*Math.PI;
      var ciro = 0;
      //var dosc = 200;
      var cirtam = 15;
      for (var i = 0; i <= 2; i++){
        ctx2.beginPath();
        ctx2.arc(this.posicionX[i],this.posicionY[i],cirtam,ciro,const1);
        //ctx.rect(this.posicionX[i],this.posicionY[i], cirtam, cirtam);
        this.activo[i]=true;
        this.sitio[i]=this.posicionX[i]+","+this.posicionY[i];
        ctx2.fill();
        ctx2.stroke();
        i++;
        //dosc+=dosc;
      }
this.sitio[1]="300,0";
this.activo[1]=false;
var tn = 200;
var nt = 100;
for (var i = 3; i <=5; i++) {
  this.sitio[i]=tn+","+nt;
  this.activo[i]=false;
tn+=100;
}
var tn = 0;
var nt = 200;
for (var i = 6; i <=12; i++) {
  this.sitio[i]=tn+","+nt;
  this.activo[i]=false;
tn+=100;
}

//Creamos las gallinas
ctx2.fillStyle = "yellow";
for (var i = 13; i <= 32; i++) {
  ctx2.beginPath();
  ctx2.arc(this.posicionX[i],this.posicionY[i],cirtam,cero,const1);
  this.activo[i]=true;
  this.sitio[i]=this.posicionX[i]+","+this.posicionY[i];
  ctx2.fill();
  ctx2.stroke();
}
},
titila: function(ev){

var rect = canvas.getBoundingClientRect();
y=ev.clientY -30;
x=ev.clientX - 300;
if ((x >= -15)&&(x<=30)) {
  x=0;
}else if ((x >=85)&&(x<=115)) {
  x=100;
}else if ((x >=185)&&(x<=215)) {
  x=200;
}else if ((x >=285)&&(x<=315)) {
  x=300;
}else if ((x >=385)&&(x<=415)) {
  x=400;
}else if ((x >=485)&&(x<=515)) {
  x=500;
}else if ((x >=585)&&(x<=615)) {
  x=600;
}else if ((x >=685)&&(x<=715)) {
  x=700;
}

if ((y >= -15)&&(y<=30)) {
  y=0;
}else if ((y >=85)&&(y<=115)) {
  y=100;
}else if ((y >=185)&&(y<=215)) {
  y=200;
}else if ((y >=285)&&(y<=315)) {
  y=300;
}else if ((y >=385)&&(y<=415)) {
  y=400;
}else if ((y >=485)&&(y<=515)) {
  y=500;
}else if ((y >=585)&&(y<=615)) {
  y=600;

}else if ((y >=685)&&(y<=715)) {
  y=700;

}
res =x+","+y;
//alert(res);


},

verificar:function(){
  // funciona
/*  for (var i = 0; i < tablero.sitio.length; i++) {
    if (tablero.sitio[i]==res) {
    var dun = true;
  }
}*/


var pos = tablero.sitio.indexOf(res);
alert(tablero.activo[pos]);
if (tablero.activo[pos]) {
  ctx2.clearRect(tablero.posicionX[pos]-15,tablero.posicionY[pos]-15,30,30);
}else{
//crear nuevo circulo
ctx2.beginPath();
ctx2.arc(tablero.posicionX[pos],tablero.posicionY[pos],15,0,2*Math.PI);
tablero.sitio[pos]=tablero.posicionX[pos]+","+tablero.posicionY[pos];
ctx2.fill();
ctx2.stroke();

}
}

    }//finalizamos el prototipo
})();



var tablero = new Tablero(0,0,600,600);
self.addEventListener("click",tablero.titila);
self.addEventListener("click",tablero.verificar);
