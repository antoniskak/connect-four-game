/*function changeColor will change the color of the button of a given row and col
to the given rgb value color*/
function changeColor(rowIndex, colIndex, color){
  return $('table tr').eq(rowIndex).find('td').eq(colIndex).find('button').css("background-color", color);
}

/*Function returnColor will return the rgb value of the color of a button for a given row and col*/
function returnColor(rowIndex, colIndex){
  return $('table tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}


/*Function checkEmpty will check for the first empty button (rowIndex)
starting from the bottom to the top of a given column*/
function checkEmpty(colIndex){
//Initialize empty chip to the bottom row
  var curCell = returnColor(5, colIndex);
  //Check from the bottom up
  for (var row = 5; row > -1; row--){
    curCell = returnColor(row, colIndex);
    if (curCell === 'rgb(0, 0, 0)') {
      return row;
    }
  }
}
/*//////////////////////////////////////////////////////////////
                           Start Game
/////////////////////////////////////////////////////////////*/
$('#startbtn').on('click', start);

function start(){
  var game_on = true;
  var playerOneColor = 'rgb(255, 0, 0)'; //red
  var playerTwoColor = 'rgb(255, 255, 0)'; //yellow
  var table = $('table tr');

  var playerOne = prompt("Player One: Enter Your Name, you will be Red");
  var playerTwo = prompt("Player Two: Enter Your Name, you will be Yellow");

  // Player 1 starts the game
  var player = 1;
  var curColor = playerOneColor;
  var nowPlaying = playerOne;

  $('#startbtn').toggle();
    $('h3').text("It's "+playerOne+"'s turn. Pick a column to drop a red chip");

  //Attach a click event to the table button elements
  $('table button').on("click", function(){
    //Get column index
    var colIndex = $(this).closest('td').index();
    //Get row index
    var rowIndex = checkEmpty(colIndex);
    //Change color of given row and column
    changeColor(rowIndex, colIndex, curColor);

    //Check if we have a winner
    

    //Change player
    player = player * -1;
    if(player === 1){
      curColor = playerOneColor;
      nowPlaying = playerOne;
      $('h3').text("It's "+playerOne+"'s turn. Pick a column to drop a red chip");
    }
    else{
      curColor = playerTwoColor;
      nowPlaying = playerTwo;
      $('h3').text("It's "+playerTwo+"'s turn. Pick a column to drop a yellow chip");
    }
  })
}
