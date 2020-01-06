
/*const vsr = require("voice-speech-recognition");

const vsrConfig = {
	continuous: true,
	interimResults: false,
	maxAlternatives: 1,
	lang: "en-us"
}

const recognizer = vsr.voiceSpeechRecognition(vsrConfig);

recognizer.startRecognition();

recognizer.onstart = function() {
	console.log("recognizer starting");
}

recognizer.onresult = () => {
	console.log("result:" + recognizer.finalRecognizing);
	var patt = /my name+/g;
	var r = recognizer.finalRecognizing.match(patt);
	if (r == "my name") {
		window.open("https://youtube.com");		
	}
	recognizer.resetRecognition();
}

recognizer.onerror = (event) => {
	console.log("error: " + event.error);
}

recognizer.onend = function() {
	console.log("recognizer ending");
}*/

const speech = require("speech-js");

//speech.synthesis("Hello", "en-US");
const recognition = speech.recognition("en-US");
recognition.start();
recognition.onresult = (e) => {
	var result = e.results[0][0].transcript
	speech.synthesis(result, "en-US");
}
