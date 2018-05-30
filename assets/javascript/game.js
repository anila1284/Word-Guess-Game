

$(document).ready(function() {

    var gameStarted = false;
    var gameOver = false;
    var computerPick;
    var placeHolder;

    $(document).keyup(function(e) {

        var letters = ["Apple", "Banana", "Kitten", "Bingo", "Fish", "McDonald", "Mickey", "JackAndJill"];     

        if(!gameStarted){
        //generate a new random number between 1 and 8.
        var random = Math.floor(Math.random() * 8) + 1;

        computerPick = letters[random];

        placeHolder = "";

        for(var i = 0; i < computerPick.length; i ++){

              placeHolder = placeHolder + " _ ";                       
        }     
     
      $("#computer-pick").text(placeHolder);
      gameStarted = true;

      console.log(String.fromCharCode(e.keyCode));
      
    }
    else{

        var keynum = String.fromCharCode(e.keyCode);
        //compare


         
        gameStarted = false;

    }

    });

  });