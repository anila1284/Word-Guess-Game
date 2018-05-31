

$(document).ready(function() {

    var gameStarted = false;
    var gameOver = false;
    var computerPick;
    var placeHolder;

    $(document).on('keypress', function(e) {

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

      console.log(computerPick);

      //console.log(String.fromCharCode(e.keyCode));
      
    }
    else{

        var keynum = String.fromCharCode(e.keyCode);
        //compare

         if(computerPick.includes(keynum)){

          //alert("true: " + keynum);

          var index = computerPick.indexOf(keynum);

          
          console.log(index);

          var guessedWord =  placeHolder.replaceAt(index + 1, keynum); 

          console.log(guessedWord);
          console.log(placeHolder);

          $("#computer-pick").text(guessedWord);
          
          gameStarted = false;
          
         }
         
     

    }
    String.prototype.replaceAt=function(index, replacement) {
      return this.substr(0, index) + replacement+ this.substr(index + replacement.length);

    };


    });

  });





 

 