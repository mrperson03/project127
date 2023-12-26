sound1 = "music.mp3";
sound2 = "music2.mp3";

function preload() {
    song = loadSound('music.mp3');
    song = loadSound('music2.mp3');
  }
  
  function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
  
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
      background("white")
      image(video, 0, 0, 350, 350)
  }
