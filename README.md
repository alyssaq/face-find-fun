#Face Find Fun

Access webcam through the browser with [navigator.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia)   

Face detection and tracking with [headtrackr](https://github.com/auduno/headtrackr)  

Drawing with [HTML5 canvas](http://www.html5canvastutorials.com/tutorials/html5-canvas-tutorials-introduction/)

Current version tracks your face via webcam and places a party hat on top of your head.
Moving your head to the right corner changes the visual CSS webkit-filter

##Demo##
<https://alyssaq.github.io/face-find-fun>

##Usage
1) Install nodejs. The only node module dependency is express.   
2) To grab node dependencies, run:

    > npm install  

3) Enable getUserMedia() in chrome.   
In the URL, type: chrome://flags and search and enable: 
   
> **Enable screen capture support in getUserMedia()**
       
4) To run the web server, in the project folder:

    > node app.js

5) View the party hat on top of your head at: <http://localhost:8080/>

6) Have fun! Draw more shapes!
