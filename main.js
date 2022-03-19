https://teachablemachine.withgoogle.com/models/tn4z1zbUS/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tn4z1zbUS/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    console.log('gotresults');
    if (error){
        console.error(error);
    }
    
}