noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(600, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Model Is Loaded");
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "diffference = " + difference);
    }
}

function draw()
{
    document.getElementById("info").innerHTML = "Width And Length Of The Font Will Be = " + difference + "px";
    background("#ADD8E6");
    fill('orange');
    stroke('orange');
    text("Mohith", noseX, noseY);
    textSize(difference);
}