//#pragma
//				Copyright 2012 Felipe Echeverria Bennett       
//
// 			        administrator@quickapp.com.mx                  
// 			  ___        _      _       _                
// 			 / _ \ _   _(_) ___| | __  / \   _ __  _ __    
// 			| | | | | | | |/ __| |/ / / _ \ | '_ \| '_ \   
// 			| |_| | |_| | | (__|   < / ___ \| |_) | |_) |  
// 			 \__\_\\__,_|_|\___|_|\_|_/   \_\ .__/| .__/   
// 								                			|_|   |_|      
// 											.COM.MX   
// 					February 29, 2012 1:11:11 PM CST
//            
// 							        Version: ArcherScore
//

//DECLARACIONES

var target= new Image();
var installArrow= new Image();
var flechaIZQ= new Image();
var flechaDER= new Image();
var regalo= new Image();
var pointers= new Image();
var logo= new Image();
var flecha= new Image();

flecha.src = "flecha.png";
logo.src = "text.png";
pointers.src = "pointers.png";
target.src = "target.png";
installArrow.src = "installArrow.png";
flechaIZQ.src = "flechaizq.png";
flechaDER.src = "flechader.png";
regalo.src = "regalo.png";

var canvas = document.getElementById("canvas");  
var ctx = canvas.getContext("2d");
var anglePos;

var fechaObj = new Date();
var Fecha = fechaObj.getDate()+"/"+fechaObj.getMonth()+"/"+fechaObj.getYear();

var TargetsVar;
var SHts=new Array();
var Targets=new Array();
var ShotsVar;
var Shots=new Array();
var outPData=new Array();
var inPData=new Array();

var pasObj=localStorage.pasObj;
var highscores=localStorage.highscores;


document.addEventListener("touchstart",touchStart,false);
document.addEventListener("touchmove",touchMove,false);
document.addEventListener("touchend",touchEnd,false);

var MyApp = new App();

//INICIO
function Init()
{
	if (navigator.userAgent.match(/iPhone/i)) 
	{
		if (window.navigator.standalone==true)
		{
			setInterval("MyApp.LoadiPhone();",20);
		}
		else
		{
			setInterval("MyApp.LoadInstall();",20);
		}
	}
	else
	{
			setInterval("MyApp.LoadElse();", 20);
	}
	
};

function App()
{
	this.LoadiPhone=LoadiPhone;
	this.LoadInstall=LoadInstall;
	this.LoadElse=LoadElse;
	
	var textoCentral= new actorObject("Hay hay hay...","text",50,0,220,400);
	
	function LoadiPhone()  //iPHONE
	{

		draw();
		
		function draw()
		{

	        orientacion();
	        
			if (anglePos==true) //NO VERT
            {
            canvas.height=320;
	        canvas.width=480;
	        ctx.drawImage(logo,60,40);
	        ctx.drawImage(pointers,30,150);
	        ctx.font="30pt Arial";
			ctx.fillStyle = "rgb(000,000,000)"; 
			ctx.fillText("rotado",200,100);
			}
			
			else // VERT
			{
			canvas.height=480;
	        canvas.width=320;
	        
	        ctx.fillStyle = "rgb(999,999,999)";  
			ctx.fillRect (0,0,320,480);
			
			ctx.drawImage(target,10,25);
			
			for (i in Shots)
			{
			SHts=Shots[i].split("x");
			ctx.drawImage(SHts[0],SHts[1])
			}

			ctx.fillStyle = "rgb(222,222,222)";  
			ctx.fillRect (0,420,320,60);
			
			ctx.fillStyle = "rgb(111,111,111)";  
			ctx.fillRect (0,400,320,20);

			ctx.font="24pt Arial";
			ctx.fillStyle = "rgb(000,000,000)"; 
			//animObject(textoCentral);
			//textoCentral.name= "We make web apps like this for customers...";
			ctx.fillText(localStorage.length,40,460);
			
			ctx.font="42pt Arial";
			ctx.fillText("40yd",20,380);
			ctx.fillText("100pt",165,380);
			
			ctx.fillStyle = "rgb(999,999,999)";
			ctx.font="12pt Arial";
			ctx.fillText(Fecha,128,417);
			
			ctx.fillStyle = "rgb(0,168,0)";
			ctx.font="24pt Arial";
			ctx.fillText("Clear",100,460);
			ctx.fillStyle = "rgb(255,0,0)";
			ctx.fillText("Save",200,460);
			
			
			ctx.drawImage(flechaIZQ,10,435);
			ctx.drawImage(flechaDER,300,435);
			
			ctx.fillStyle = "rgb(000,000,000)";
			ctx.font="12pt Arial";
			ctx.strokeRect(toque.pageX,toque.pageY,50,50);
			ctx.fillText(toque.pageX+" x "+toque.pageY,toque.pageX,toque.pageY+60);
			
			}
	        
		};
	};

	function LoadElse() //ELSE
	{	
		
		draw();
		
		function draw()
		{
			//baseDatosOUT();
			canvas.height=550;
			canvas.width=700;
	
			ctx.fillStyle = "rgb(999,999,999)";  
			ctx.fillRect (0,0,700,550);
			
			ctx.font=textoCentral.w+"pt Arial";
			ctx.fillStyle = "rgb(000,000,000)"; 
			
			//animObject(textoCentral);
		
			
	    	//	var storedNames=JSON.parse(localStorage['names']);

			ctx.fillText(localStorage.length,textoCentral.x,textoCentral.y);

			//baseDatosIN();
		};
	};

	function LoadInstall()  //INSTALL
	{
		draw();
		
		function draw()
		{
			canvas.height=1000;
			canvas.width=700;
			
			ctx.fillStyle = "rgb(777,777,777)";  
			ctx.fillRect (0,0,700,550); 
		
		    ctx.drawImage(regalo,140,50);
			ctx.fillStyle = "rgb(000,000,000)"; 

			ctx.font = "40pt Arial";
			ctx.fillStyle = "rgb(080,080,080)"; 
			ctx.fillText("Para abrir tu regalo...",120,450);
			ctx.fillText("Add to Home Screen",120,530);
			ctx.drawImage(installArrow,205,600);
		};
	};
};

function brain() // BRAIN
{
	this.name=name;
	this.type=type;
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
};

function actorObject(name, type, w, h, x, y) // FABRICA OBJETOS
{
	this.name=name;
	this.type=type;
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
};

function animObject(animate)       // ANIMATION
{
	var S = animate.name.length*30;
	
	if (animate.x <= -S)
	{
		animate.x=320;
	}
	else
	{
		animate.x= animate.x-2;
	}
	
	return animate;
};


function orientacion()         //ORIENTACION
{
	switch(window.orientation)
	{
		case 0:
anglePos=false
		break;

		case -90:
anglePos=true
		break;

		case 90:
anglePos= true    //hola esta es una prueba
		break;

		case 180:
anglePos=false
		break;	
};

	
//**Acciones de orientacion finales
};

function touchStart(event)                   //TOUCH EVENTS
	{
	toque=event.touches[0]
	Shots.push(toque.pageX+"x"+toque.pageY);
	;
	event.preventDefault();
	};
	
function touchEnd(event)
	{

	};

function touchMove()
	{

	//posicion=toque.target
	};
	

	
function baseDatosIN() 							//DATABASE
{

Shots.push(56+"x"+67);
ShotsVar = Shots.join(":")
Targets.push("Origen",ShotsVar);
TargetsVar=Targets.join(";");
localStorage.setItem(Fecha,TargetsVar);

};

function baseDatosOUT() 							//DATABASE
{
TargetsVar=localStorage.getItem(localStorage.key(5));
Targets=TargetsVar.split(";");
Shots=Targets[1].split(":");

};
//hola
