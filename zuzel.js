
var motor1Position = 
{
	x: 500,
    y: 400,
    deg: 0,
	deg1: 0
    
}
 var i = 1;
 var a = 1;
 
 function start()
 {
    var d = Math.PI/2;
    motor1Position.x+= i*Math.cos(motor1Position.deg);
    motor1Position.y-= i*Math.sin(motor1Position.deg);
    
    
    
    if(motor1Position.y < 2 || motor1Position.y > 445)
    {
        clearInterval(startInterval); 
    } 
   
    console.log(Math.round(Math.pow((motor1Position.x-225),2) + Math.pow((motor1Position.y-225),2)));

       // if(motor1Position.x ==  225*Math.cos(d)+225 || motor1Position.y == 225*Math.sin(d)+225)
        if(Math.pow((motor1Position.x-225),2) + Math.pow((motor1Position.y-225),2) > Math.pow(225,2) && motor1Position.x<225 )
        {clearInterval(startInterval);}






    var motor1 = document.getElementById('background');
    var motor1Text = Mustache.render("<div id='motor1' class='motor1' style='left:{{x}}px; top:{{y}}px; transform: rotate({{deg1}}deg'></div>",  motor1Position);
    motor1.innerHTML = motor1Text; 
	i+=0.0009;
	
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



