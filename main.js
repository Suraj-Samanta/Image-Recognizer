
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });

}
console.log('ml5 version', ml5.version);
sorter= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UO4sWTla6/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model is loaded");
}
function modelLoaded(){
    console.log('Model Loaded');
}
function identify(){
    img = document.getElementById('captured_image');
    sorter.classify(img, gotResult);

}
function gotResult(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById ("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
    }

 
