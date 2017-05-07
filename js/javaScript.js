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
    this.movetoX=[];
    this.movetoY=[];
    this.linetoX=[];
    this.linetoY=[];
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
      ctx.fillStyle = "LightBlue";
      //dibujo un rectangulo en la posición x, y con un ancho y alto
      ctx.rect(this.x, this.y, this.ac, this.al);
      //relleno el rectangulo
      ctx.fill();
      ctx.lineWidth = 2;
      //trazamos las lineas
      //document.write("{0,0,0,0,0,100,200,200,200,200,200,200,200,300,400,500}");
      //this.movetoX.fill(0, 0, 4);
      for (var i = 0; i <=15;i++){
        if ((i>=0)&&(i<=4)) {
          this.movetoX[i]=0;
        }else if (i==5) {
          this.movetoX[i]=100;
        }else if ((i>=6)&&(i<=12)) {
          this.movetoX[i]=200;
        }else if (i===13) {
          this.movetoX[i]=300;
        }else if (i==14) {
          this.movetoX[i]=400;
        }else {
          this.movetoX[i]=500;
        }//document.write("<br>"+this.movetoX[i]);
      }
      //document.write("{200,200,300,400,400,400,0,0,100,200,400,500,600,0,0,400}");

      for (var j = 0; j <=15; j++) {
        if ((j>=0)&&(j<=1)) {
        this.movetoY[j]=200;
      }else if (j==2) {
        this.movetoY[j]=300;
      }else if ((j>=3)&&(j<=5)) {
        this.movetoY[j]=400;
      }else if ((j>=6)&&(j<=7)) {
        this.movetoY[j]=0;
      }else if (j==8) {
        this.movetoY[j]=100;
      }else if (j==9) {
        this.movetoY[j]=200;
      }else if (j==10) {
        this.movetoY[j]=400;
      }else if (j==11) {
        this.movetoY[j]=500;
      }else if (j==12) {
        this.movetoY[j]=600;
      }else if ((j>=13)&&(j<=14)) {
        this.movetoY[j]=0;
      }else {
        this.movetoY[j]=400;
      }//document.write("<br>"+this.movetoY[j]);
      }
//document.write("600,400,600,400,600,100,600,200,400,400,400,400,600,300,400,500<br>");
      //this.linetoX={600,400,600,400,600,100,600,200,400,400,400,400,600,300,400,500}
      for (var k = 0; k <=15; k++) {
        if ((k==0)||(k==2)||(k==4)||(k==6)||(k==12)) {
        this.linetoX[k]=600;
      }else if ((k==1)||(k==3)||(k==8)||(k==9)||(k==10)||(k==11)||(k==14)) {
        this.linetoX[k]=400;
      }else if (k==5) {
        this.linetoX[k]=100;
      }else if (k==7) {
        this.linetoX[k]=200;
      }else if (k==13) {
        this.linetoX[k]=300;
      }else {
        this.linetoX[k]=500;
      }
      //document.write("<br>"+this.linetoX[k]);
      }
      //document.write("{200,600,300,0,400,200,400,600,100,400,200,500,200,600,600,200};");
      for (var m = 0; m <=15; m++) {
        if ((m==0)||(m==5)||(m==10)||(m==12)||(m==15)) {
          this.linetoY[m]=200;
        }else if ((m==1)||(m==7)||(m==13)||(m==14)) {
          this.linetoY[m]=600;
        }else if (m==2) {
          this.linetoY[m]=300;
        }else if ((m==4)||(m==6)||(m==9)) {
          this.linetoY[m]=400;
        }else if (m==8) {
          this.linetoY[m]=100;
        }else if (m==11) {
          this.linetoY[m]=500;
        }else {
          this.linetoY[m]=0;
        }
      //  document.write("<br>"+this.linetoY[m]);
    }
    for (var w = 0; w < this.movetoX.length; w++) {
      ctx.moveTo(this.movetoX[w],this.movetoY[w]);
      ctx.lineTo(this.linetoX[w],this.linetoY[w]);
    }
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
      ctx.lineWidth = 0;
      var const1 = 2*Math.PI;
      var ciro = 0;
      //var dosc = 200;
      var cirtam = 15;
      for (var i = 0; i <= 2; i++){
        ctx2.beginPath();
        ctx2.rect(this.posicionX[i]-15,this.posicionY[i]-15,30,30);
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
ctx2.beginPath();
ctx2.clearRect(300-15,-15,30,30);
ctx2.fill();
ctx2.stroke();

var tn = 200;
var nt = 100;
for (var i = 3; i <=5; i++) {
  ctx2.clearRect(tn-15,nt-15,30,30);
  this.sitio[i]=tn+","+nt;
  this.activo[i]=false;
tn+=100;
}
var tn = 0;
var nt = 200;
for (var i = 6; i <=12; i++) {
  ctx2.clearRect(tn-15,nt-15,30,30);
  this.sitio[i]=tn+","+nt;
  this.activo[i]=false;
tn+=100;
}

//Creamos las gallinas
ctx2.fillStyle = "yellow";
for (var i = 13; i <= 32; i++) {
  ctx2.beginPath();
  ctx2.rect(this.posicionX[i]-15,this.posicionY[i]-15,30,30);
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

if (tablero.activo[pos]) {
  ctx2.clearRect(tablero.posicionX[pos]-15,tablero.posicionY[pos]-15,30,30);
  tablero.activo[pos]=false;
  //ctx2.style="background-color:green;";
}else{
//crear nuevo circulo
ctx2.beginPath();
ctx2.rect(tablero.posicionX[pos]-15,tablero.posicionY[pos]-15,30,30);
tablero.sitio[pos]=tablero.posicionX[pos]+","+tablero.posicionY[pos];
ctx2.fill();
ctx2.stroke();
tablero.activo[pos]=true;

}

function titilando(){
  ctx2.clearRect(tablero.posicionX[pos]-15,tablero.posicionY[pos]-15,30,30);
  //  window.requestAnimationFrame(titilando2);
//juega=setInterval(titilando2,1000);
}
function titilando2(){
  ctx2.clearRect(tablero.posicionX[pos]-15,tablero.posicionY[pos]-15,30,30);
  ctx2.beginPath();
  ctx.fillStyle = "yellow";
  ctx2.rect(tablero.posicionX[pos]-15,tablero.posicionY[pos]-15,30,30);
  tablero.sitio[pos]=tablero.posicionX[pos]+","+tablero.posicionY[pos];
  ctx2.fill();
  ctx2.stroke();
//juega=setInterval(titilando,1000);
  //  window.requestAnimationFrame(titilando);


}

}

    }//finalizamos el prototipo
})();



var tablero = new Tablero(0,0,600,600);
//tablero.dibujarTablero();
self.addEventListener("click",tablero.titila);
self.addEventListener("click",tablero.verificar);
