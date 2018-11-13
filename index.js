function speechSynthesisFunction(text) {
  var msg = new SpeechSynthesisUtterance();
  var voices - speechSynthesis.getVoices();

  msg.lang = "en-US";
  msg.voice = voices[3];
  msg.rate = 1;
  msg.volume = 0.7;
  msg.text = text;

  speechSynthesis.speak(msg);
}

function initiateCommand(event) {

  console.log("initiateCommand function is firing");

  var window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  SpeechRecognition.lang = "en-US";
  SpeechRecognition.continuous = false;
  SpeechRecognition.interimResults = false;
  SpeechRecognition.onstart = function() {
    console.log("initiateCommand has STARTED");
  };
  SpeechRecognition.onend = function() {
    console.log("initiateCommand has ENDED");
  }
  SpeechRecognition.onresult = function(event) {
    var transcript = Array.from(events.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
    console.log(transcript);
  }
}
