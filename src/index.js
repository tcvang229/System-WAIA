const vsr = require("voice-speech-recognition");

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

recognizer.onend = function() {
	console.log("recognizer ending");
}

var resultText = function() {
	recognizer.onresult = () => {
		return recognizer.finalRecognizing;
	}
}

var errorString = function() {
	recognizer.onerror = function(event) {
		return event.error;
	}
}
