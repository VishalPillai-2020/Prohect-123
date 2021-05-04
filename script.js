difference =0;
leftwristx=0;
rightwristx=0;

function setup (){
    video = createCapture(VIDEO);
    video.size(500,400);
    video.position(150,175);
    canvas = createCanvas(500,400);
    canvas.position(700,175);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", getPoses);

}
function modelLoaded(){
    console.log("The Model is Loaded");
}
function getPoses(results){
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftwristX - rightwristX);
        console.log('left wrist x = ' + leftwristX + 'right wrist x = ' + rightwristX + 'Difference' + difference);
    }
}
function draw(){
    noStroke();
    background("white");
    textSize(difference);
    document.getElementById("info").innerHTML = "The current font size is "+ difference+"px";
    
    fill("rgb(48,48,48)");
    text("Vishal", 10, 10 );

}
