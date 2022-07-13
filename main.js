img="";
status="";
objects = [];

function preload(){
    img=loadImage("dog_cat.jpg");
    
}

function setup(){
    canvas=createCanvas(800, 600);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelloaded(){
    console.log("model loaded");
    status=true;
    object_detector.detect(img, gotresult);
}

function gotresult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(img, 0, 0, 800, 600);
    
    if(status != ""){
       for (i=0; i < objects.length; i++){
        document.getElementById("status").innerHTML="Status: Object detected!";
        fill("#FF0000");
        percent=floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + " %", objects[i].x+5, objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width-60, objects[i].height);
       } 
    }

    
    
    
}