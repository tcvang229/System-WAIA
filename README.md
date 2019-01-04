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

##### SpeechSynthesisUttereance()


SpeechRecognition object provides methods that will allow voice to interact with the program.
Different attributes such as the language used, continuous mic control (mic is on continuously), interim result
(machine wll guess what you said and then finalize the text), on start, on end, and much more.
For the SpeechRecognition object, we do need to check if the browser has the object built in.

