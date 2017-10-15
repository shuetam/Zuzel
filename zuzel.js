
var motor1Position = 
{
	x: 500,
    y: 400,
    deg: 0,
    
}


function start()
{
    
    motor1Position.x+= Math.cos(motor1Position.deg);
    motor1Position.y-= Math.sin(motor1Position.deg);
    var motor1 = document.getElementById('background');
    var motor1Text = Mustache.render("<div id='motor1' class='motor1' style='left:{{x}}px; top:{{y}}px; transform: rotate({{deg}}deg'></div>",  motor1Position);
    motor1.innerHTML += motor1Text;
    
}

function startMotor()
{
     startInterval = setInterval(start, 10/120 );

}

function stearMotor()
{ 
    motor1Position.deg+= Math.PI/10;
}

function stopMotor()
{
    clearInterval(startInterval);  
}      



