function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LYLXCLuHb/model.json",handle);
}
function handle(){
    classifier.classify(view);
}
function view(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
    }
}
