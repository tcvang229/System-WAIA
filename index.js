function speechSynthesisFunction(text) {
  var msg = new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();

  msg.lang = "en-US";
  msg.voice = voices[3];
  msg.rate = 1;
  msg.volume = 0.7;
  msg.text = text;

  speechSynthesis.speak(msg);
}

function initiateCommand(event) {

  console.log("initiateCommand function is firing");

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onstart = function() {
    console.log("initiateCommand has STARTED");
  };
  recognition.onend = function() {
    console.log("initiateCommand has ENDED");
  }
  recognition.onresult = function(event) {
    var transcript = Array.from(events.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
    console.log(transcript);
  }
}
