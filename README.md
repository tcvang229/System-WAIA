# System-Web Speec API Assistant (W.A.I.A)
Web Speech API for Google Chrome -- voice commands for web page accessibility or generic Google searches

# Motivation
System-WAIA is the evolutionized product of my first real web page. The main reason why I developed the web
page was to give me better accessiblity to the places I wanted to go on the web. Soon, I realized that buttons
with hyperlinks is as limited as to the specific URL that it takes you to-- I'd have to create a new button
every time I wanted a new link. System-WAIA doesn't require that.

System-WAIA is able to connect the user to a URL without having to create buttons that will stain the web page.
It allows dynamic searches, unlike my original web page.

# Web Speech API
System-WAIA is built upon JavaScript. It uses the browser's built in Web Speech API.
The Web Speech API branches into main objects: SpeechSynthesisUtterance() and SpeechRecognition().

SpeechSynthesisUtterance object provides methods that will take text and have a voice read it. 
Different attributes such as the voice, language, rate, volume, and text can be changed.

Ex. (lines 16, index.js)
var msg  = new SpeechSynthesisUtterance();
var voices = speechSynthesis.getVoices();

msg.lang = "en-US";
msg.voice =  voices[3]; //voices are chosen from an array
msg.rate = 1;
msg.volume = 0.7; // values 0 - 1
msg.text = text;

speechSynthesis.speak(msg);

SpeechRecognition object provides methods that will allow voice to interact with the program.
Different attributes such as the language used, continuous mic control (mic is on continuously), interim result
(machine wll guess what you said and then finalize the text), on start, on end, and much more.
For the SpeechRecognition object, we do need to check if the browser has the object built in.

Ex. (lines 34, index.js)
window.SPeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //window.SpeechRecognition is for FireFox
//window.webkitSpeechRecognition is for Google Chrome

var recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;
recognition.onstart = function () {
  console.log("initiateCommand has STARTED");
);
recognition.onend = function () {
  console.log("initiateCommand has ENDED");
  //there's code missing in this example when comparing to index.js
  //the missing code is detailed for another function of the web app
}
