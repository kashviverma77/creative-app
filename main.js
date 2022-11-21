img = "";
objects = [];
status = "";


function preload()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if(status ="")
    {
        for(1=0; 1< objects.length; 1++) 
        {
            document.getElementById("status").innerHTML = "status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+ " " + percent +"", objects[i].x +15, objects[1].y + 15);
            noFill();
            stroke("#FF0000");
            Rect(objects[i].x, objects[i].y, objects[1].width, objects[i].height);

        }
    }
}

