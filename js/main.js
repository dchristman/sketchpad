$(document).ready(function (){
  //Create initial grid
  resetGrid();

});

var resetGrid = function (){
  //clear grid
  $('#sketchpad').empty();
  //set the grid dimensions, use it to set the block dimensions
  var gridSize = $('input:text').val()
  var blockSize = 100 / gridSize;
  blockSize = blockSize + '%';
  //loop to create grid
  for(var i=0; i<gridSize; i++){
      for (var j=0; j<gridSize; j++){
        $('#sketchpad').append('<div class="block"></div>')
    }
  }
  //set size of grid blocks
  $('.block').css({"height": blockSize, "width": blockSize});
  //create function to draw on the grid
  $('.block').mouseenter(function (){
    $(this).css('background-color','black');
  });
};
