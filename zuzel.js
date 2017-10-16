
var motor1Position = 
{
	x: 500,
    y: 400,
    deg: 0,
	deg1: 0
    
}
 var i = 1;
 

function start()
{
    motor1Position.x+= i*Math.cos(motor1Position.deg);
    motor1Position.y-= i*Math.sin(motor1Position.deg);
	var speed = Math.sqrt(Math.pow(motor1Position.x,2)+ Math.pow(motor1Position.y,2));
		
    var motor1 = document.getElementById('background');
    var motor1Text = Mustache.render("<div id='motor1' class='motor1' style='left:{{x}}px; top:{{y}}px; transform: rotate({{deg1}}deg'></div>",  motor1Position);
    motor1.innerHTML = motor1Text; 
	i+=0.0007;
	
}



document.addEventListener("keydown", keyDownTextField, true);

function keyDownTextField(e) 
{
  console.log(e.keyCode);
  if(e.keyCode==17)
  {
	  stearMotor();
  }
  
}	




function timeout()
{	
start();

setTimeout(timeout, 10);
}



function startMotor()
{
    startInterval = setInterval(start, 1000/60);
	//timeout();

	 
}


function stearMotor()
{ 
    motor1Position.deg+= Math.PI/10;

	
}


function stopMotor()
{
	



    clearInterval(startInterval);  
}      



