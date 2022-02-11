var image;
function upload(){
 var fileInput = document.getElementById("finput");
  image = new SimpleImage(fileInput);
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
  
}

function makeGray(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function makeRed(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(255);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function makeGreen(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(255);
  }
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function reset(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}