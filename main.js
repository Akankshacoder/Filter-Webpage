noseX= ""
noseY= ""

function preload(){
i1 = loadImage("https://i.postimg.cc/9MS9Vkyg/360-F-132024502-g-P7-Zgq-WSJn6s-Pc-F5i-DGz-EDzz-KVKEZ9-M6.jpg")
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    vid = createCapture(VIDEO)
    vid.size(300,300)
    vid.hide()
    pn = ml5.poseNet(vid, modelLoaded)
    pn.on('pose', gotPoses)
}

function draw(){
    image(vid,0,0,canvas.width, canvas.height)
    image(i1,noseX - 11,noseY - 11 ,25,25)

}


function SAVE(){
    save("filtered_me.jpg");
}

function modelLoaded(){
    console.log("Model has been loaded succesfully");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        console.log("x :",results[0].pose.nose.x)
        console.log("y :",results[0].pose.nose.y)
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
    }
        
    }

