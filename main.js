canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var mars_image_array = ["mars1.jpeg", "mars2.jpg", "mars3.jpg", "mars4.jpg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
//Define the width & height of the rover image.
var rover_width = 100;
var rover_height = 90;


background_image = mars_image_array[random_number];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add()
 {
     background_img = new Image();
     background_img.onload = uploadBackground;
     background_img.src = background_image;
     rover_img = new Image();
     rover_img.onload = uploadrover;
     rover_img.src = rover_image;
 }
 
	                                     //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

                                         //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

//Create "uploadBackground()" function.
      function uploadBackground()
      {
        ctx.drawImage(background_img , 0,0,canvas.width,canvas.height);
      }                        
                                         //Draw image of background

//Create "uploadrover()" function.

       function uploadrover()
       {
        ctx.drawImage(rover_img,rover_x , rover_y,rover_width,rover_height);
       }                                 //Draw image of rover


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
	 if (keyPressed=='38')
     {
        up();
        console.log("up arrow is key pressed");
     }	
    if (keyPressed=='40')
    {
        down();
        console.log("down arrow key is pressed");
    }
    if (keyPressed=='37')
    {
        left();
        console.log("left arrow key is pressed");
    }
    if (keyPressed=='39')
    {
        right();
        console.log("right arrow key is pressed");
    }



     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
if (rover_y>=0)
{
    rover_y = rover_y-10;
    console.log("when up arrow is pressed, X = "+ rover_x + "and y is ="+ rover_y);
    uploadBackground();
    uploadrover();
}
}
function down(){
	if (rover_y<= 500)
    {
        rover_y = rover_y + 10;
        console.log("when down arrow key is pressed , X = " + rover_x + "and y is =" + rover_y);
        uploadBackground();
    uploadrover();
    }
}
function right(){
    if (rover_x<=700)
    {
        rover_x= rover_x+10;
        console.log("when right arrow is pressed, X = "+ rover_x + "and y is ="+ rover_y);
        uploadBackground();
        uploadrover();
    }	
}
function left(){
	if (rover_x>=0)
{
    rover_x = rover_x-10;
    console.log("when left arrow is pressed, X = "+ rover_x + "and y is ="+ rover_y);
    uploadBackground();
    uploadrover();
}
}