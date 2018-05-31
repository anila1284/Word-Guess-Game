
      var letters = ["apple", "banana", "kitten", "bingo", "fish", "mcdonald", "mickey", "jackandjill"]; 
      var indexes = new Array();  

$(document).ready(function() {

    var gameStarted = false;
    var gameOver = false;
    var computerPick;
    var placeHolder;
     

    $(document).on('keypress', function(e) {     



        if(!gameStarted){              
         
          indexes = new Array();  

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

        var keyPressed = String.fromCharCode(e.keyCode);
        //compare

         if(computerPick.includes(keyPressed)){

          //alert("true: " + keynum);

          var index = computerPick.indexOf(keyPressed);

          indexes[keyPressed] = index;

          //indexes.push({keyPressed: index});


          
          //console.log(index);

          var keyExists = isKeyInObject(indexes, keyPressed);
          
             
          console.log(indexes[keyPressed]);        
          
          
          for (var key in indexes) {
            
             
        }
          

         

         $("#computer-pick").text(placeHolder);
          
          
          
         }
         
     

    }
 


    });

  });

  function isKeyInObject(obj, key) {
    var res = Object.keys(obj).some(v => v == key);
    console.log(res);
}





 

 