$(document).ready(function (){
  resetGrid(16);
});

var resetGrid = function (){
  $('#sketchpad').empty();
  var gridSize = $('input:text').val()
  var blockSize = 100 / gridSize;
  blockSize = blockSize + '%';
  for(var i=0; i<gridSize; i++){
      for (var j=0; j<gridSize; j++){
        $('#sketchpad').append('<div class="block"></div>')
    }
  }
  $('.block').css({"height": blockSize, "width": blockSize});
}
