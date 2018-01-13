

var motor1Position = 
{
	x: 500,
    y: 400,
    deg: 0,
	
    
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
             stopMotor(); 
         } 
   
        if((motor1Position.y > 120 && motor1Position.y < 317) && (motor1Position.x > 251 && motor1Position.x < 751))
        {
            stopMotor(); 
        }

        if(Math.pow((motor1Position.x-225),2) + Math.pow((motor1Position.y-225),2) > Math.pow(225,2) && motor1Position.x<225 )
        {stopMotor();}

        if(Math.pow((motor1Position.x-775),2) + Math.pow((motor1Position.y-225),2) > Math.pow(225,2) && motor1Position.x>775 )
            {stopMotor();}

        if(Math.pow((motor1Position.x-241),2) + Math.pow((motor1Position.y-215),2) < Math.pow(97,2) && motor1Position.x<241 )
            {stopMotor();}

        if(Math.pow((motor1Position.x-760),2) + Math.pow((motor1Position.y-215),2) < Math.pow(95,2) && motor1Position.x>760 )
            {stopMotor();}

    var motor1 = document.getElementById('background');
    var motor1Text = Mustache.render("<div id='motor1' class='motor1' style='left:{{x}}px; top:{{y}}px; transform: rotate({{deg1}}deg'></div>",  motor1Position);
    motor1.innerHTML = motor1Text; 
	i+=0.0012;
	
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
    motor1Position.deg = 0;
    startInterval = setInterval(start, 1000/60);
		 
}


function stearMotor()
{ 
    motor1Position.deg+= Math.PI/10;
  
}

	
function stopMotor()
{
    clearInterval(startInterval); 
    motor1Position.x= 500;
    motor1Position.y= 400;
    i = 1;
    motor1Position.deg= 0; 

}      



