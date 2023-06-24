difference= 0;
rightWristx= 0;
leftWristx= 0;
function setup() {
 video = createCapture(VIDEO);
 video.size(550,550);
 canvas= createCanvas(550,550);
 canvas.position(560,150);
  poseNet= m15.poseNet(video, modeloaded);
  poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.lenght>0)
{
 console.log(results);
 leftWristx = results[0].pose.leftWristx;
 rightWristx= results[0].pose.rightWristx;
 difference = floor(leftWristX - rightWristX);

 console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
}
}

function draw() {
background('#6C91C2');

document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
textSize(difference);
fill('#FFE787');
text('Peter', 50, 400);
}

{
    
}

