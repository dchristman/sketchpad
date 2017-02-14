$(document).ready(function (){
  var blockSize = 550/(16);
  blockSize = blockSize + "px";
  console.log(blockSize);
  $('.block').css({"height": blockSize, "width": blockSize});
  for(var i=0; i<16; i++){
    $('#sketchpad').append('<div class="line"></div>');
      for (var j=0; j<16; j++){
        $('.line:last-child').append('<div class="block"></div>')
    }
  }
  $('.block').css({"height": blockSize, "width": blockSize});
});
