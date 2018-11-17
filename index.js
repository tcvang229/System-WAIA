//WAI.js --> Web Speech API on JavaScript
//compatable with Google Chrome & Firefox


//Global variables & objects
var voiceSwitchConfirm;
var voiceSwitch;


//Function edit space
function receiveRandomNumber(min, max) {
  return Math.floor(Math.random()) * (max - min +1) + min;
}


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
    if (voiceSwitch === undefined) {
      recognition.start();
    }
  };

  recognition.onaudiostart = function() {

  };

  recognition.onsoundend = function() {

  };

  recognition.onspeechstart = function() {

  };

  recognition.getDate = function() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var showHour;

    if (hour < 1) {
      showHour = 12;
    } else if (hour <= 12) {
      showHour = hour;
    } else if (hour > 12) {
      showHour = hour - 12;
    }

    var time = showHour + ":" + minute;
  };

  recognition.onresult = function(event) {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var showHour;

    if (hour < 1) {
      showHour = 12;
    } else if (hour <= 12) {
      showHour = hour;
    } else if (hour > 12) {
      showHour = hour - 12;
    }

    var time = showHour + ":" + minute;

    var transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
    console.log(transcript);

    var para = document.createElement("P");
    var t = document.createTextNode(transcript);

    var randomNumber = receiveRandomNumber(0,2);
    var inVoice0 = "";
    var inVoiceX = undefined;
    var inVoice1 = "hello system";

    var outVoice1; //Good morning -- Good evening -> if statement below
    var outVoice2 = "Hello, what can I do for you?";
    var outVoice3 = "Greetings, how can I be of an assistance?";

    if (hour < 12) {
      outVoice1 = "Good morning how can I help you?";
    } else if (hour >= 12) {
      outVoice1 = "Good evening how can I help you?";
    }

    if (randomNumber === 0) {
      randomNumber = outVoice1;
    } else if (randomNumber === 1) {
      randomNumber = outVoice2;
    } else if (randomNumber === 2) {
      randomNumber = outVoice3;
    }

    if(transcript === inVoice1) {
      document.getElementById("out_put_text").innerHTML = randomNumber;
      speechSynthesisFunction(randomNumber);
      recognition.abort();
      recognition.followingCommand();
      voiceSwitch = true;
      voiceSwitchConfirm = undefined;
    }
    para.appendChild(t);
    document.getElementById("transcript").appendChild(para);
  };

  recognition.followingCommand = function() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var nextRecognition = new SpeechRecognition();

    nextRecognition.lang = "en-US";

    nextRecognition.continuous = false;

    nextRecognition.interimResults = false;

    nextRecognition.onstart = function() {
      console.log("followingCommand is listening");
    };

    nextRecognition.onend = function() {
      console.log("followingCommand stopped listening");

      if (voiceSwitchConfirm === undefined) {
        nextRecognition.start();
      }
    };

    nextRecognition.onresult = function(event) {
      var transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join("");

      para = document.createElement("P");
      t = document.createTextNode(transcript);

      var transcriptArray = new Array();

      var transcriptDetect = transcript.substr(7);
      transcriptArray.push(transcriptDetect);
      var transcriptSearchVariable = transcriptArray[0];
      var searchBeginning = "search ";
      var searchEnding = searchBeginning.concat(transcriptArray[0]);
      var _urlSearchBeginning = "https://www.google.com/search?q=";
      var _urlSearchEnding = _urlSearchBeginning.concat(transcriptSearchVariable);

      var transcriptSpecificArray = new Array();
      var transcriptSpecificDetect = transcript.substr(7);
      transcriptSpecificArray.push(transcriptSpecificDetect);
      var transcriptSpecificVariable = transcriptSpecificArray[0];
      var accessUrlBeginning = "access ";
      var accessUrlEnding = accessUrlBeginning.concat(transcriptSpecificArray[0]);
      var _urlAccessBeginning = "https://www.";
      var _urlAccessVariable = transcriptSpecificArray[0];
      var _urlAccessEnding = ".com";
      var _urlAccessFinal = _urlAccessBeginning.concat(_urlAccessVariable);

      var _inVoice1 = "who are you";
      var _inVoice2try = "hello";
      //var _inVoice2 = "what's the weather today";
      //var _inVoice3 = "what time is it";
      //var inVoice10 = "";*/

      var _outVoice1 = "My name is System, my creater is Mr. Vang.";
      var _outVoice2 = "Here is the weather today.";
      var _outVoice2try = "fuck you bitch";
      //var _outVoice3 = "It's " + time;
      var _outVoice9 = "Searching for " + transcriptSearchVariable;
      var _outVoice10 = "Accessing, " + transcriptSpecificVariable;
      //var outVoice9 = "It is " + showHour + ":" + minute;
      //var outVoice10 = "";

      switch (transcript) {
        case _inVoice1:
        document.getElementById("out_put_text").innerHTML = _outVoice1;
        recognition.speechSynthesisFunction(_outVoice1);
        nextRecognition.abort();
        recognition.start();
        voiceSwitch = undefined;
        voiceSwitchConfirm = true;
        break;
        case _inVoice2try:
        document.getElementById("out_put_text").innerHTML = _outVoice2try;
        recognition.speechSynthesisFunction(_outVoice2);
        recognition.start();
        voiceSwitch = undefined;
        voiceSwitchConfirm = true;
        break;
        /*case _inVoice3:
        document.getElementById("out_put_text").innerHTML = _outVoice3;
        recognition.speechSynthesisFunction(time);
        recognition.start();
        voiceSwitch = undefined;
        voiceSwitchConfirm = true;
        break;*/
        case searchEnding:
        document.getElementById("out_put_text").innerHTML = _outVoice9;
        speechSynthesisFunction(_outVoice9);
        window.open(_urlSearchEnding);
        recognition.start();
        voiceSwitch = undefined;
        voiceSwitchConfirm = true;
        break;
        case accessUrlEnding:
        document.getElementById("out_put_text").innerHTML = _outVoice10;
        speechSynthesisFunction(_outVoice10);
        window.open(_urlAccessFinal);
        recognition.start();
        voiceSwitch = undefined;
        voiceSwitchConfirm = true;
        break;
      }

      para.appendChild(t);
      document.getElementById("transcript").appendChild(para);
    };

    nextRecognition.start();
  };

  recognition.onerror = function(event) {
    console.log("Speech Recognition Error: " + event.error);
  };

  recognition.start();
}

initiateCommand();
