# System-Web Speec API Assistant (W.A.I.A)
Web Speech API for Google Chrome -- voice commands for web page accessibility or generic Google searches

# Motivation
System-WAIA is the evolutionized product of my first real web page. The main reason why I developed the web
page was to give me better accessiblity to the places I wanted to go on the web. Soon, I realized that buttons
with hyperlinks is as limited as to the specific URL that it takes you to-- I'd have to create a new button
every time I wanted a new link. System-WAIA doesn't require that.

System-WAIA is able to connect the user to a URL without having to create buttons that will stain the web page.
It allows dynamic searches, unlike my original web page.

# Tools
#### HTML
#### CSS
#### JavaScript

# Web Speech API
It uses the browser's built in Web Speech API.
The Web Speech API branches into main objects: SpeechSynthesisUtterance() and SpeechRecognition().

#### SpeechSynthesisUttereance methods and attributes used
##### lang = en-US
##### continuous = true/false
##### interimResults = true/false
##### speechSynthesis.speak(x) = reads text of values x

#### SpeechRecognition methods and attributes used
##### onstart = function / value 
##### onend = function / value
##### onaudiostart = function / value
##### onsoundend = function / value
##### onspeechstart = function / value
##### onresult = function / value (shows the result of what is being spoken through the mic)
##### recognition.start() = starts the action that allows user's voice to be taken into consideration
##### recognition.stop() = stops the action that allows the user's voice to be taken into consideration

# Credit
Developer: Tswjfwmeng Vang
