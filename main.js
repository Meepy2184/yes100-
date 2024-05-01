var speechrecognition = window.webkitSpeechRecognition
var Recognition = new speechrecognition()
function start() {
    document.getElementById("textbox").innerHTML=""
    Recognition.start()
}

Recognition.onresult=function(event) {
    console.log(event)
    content=event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML=content
    if(content==" selfie ") {
        speak()
    }
} 

function speak() {
    var synth = window.speechSynthesis
    var speakdata = "Taking your selfie in 3 seconds"
    var utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function(){
        takesnapshot()
        save()
    },3000)
}

Webcam.set({
    width: 360,
    height:250,
    image_format:'png',
    png_quality: 90
})

var camera = document.getElementById("camera")

function takesnapshot() {
    Webcam.snap(function (data_uri){
       document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">' 
    })
}

function save() {
    link= document.getElementById("link")
imag= document.getElementById("selfie_img").src 
link.href= imag
link.click()
}