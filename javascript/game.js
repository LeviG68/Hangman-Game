

// document.onkeyup = fucntion(event)
  //variable wins, losses, blanks,
  var wins = 0;
  var losses = 0;
  var answer =[];
  var guessremain = 10;
  var remainingtries = 0;
  var letterkeyed = "";


  // array for words to chose from
  var wordsarray=["iron-man", "deadpool", "captain-america", "hulk", "thor", "groot", "star-lord"];

  // choose words randomly
  var word = wordsarray[Math.floor(Math.random() * wordsarray.length)];
  // console.log(word)
  // array for answers
  for (var i = 0; i < word.length; i++){
      answer[i] = "_";
      if (word[i] === "-"){
        answer[i] = "-";
      }
      else {answer[i] = "_"};
      // console.log(answer);
    }

  // letter that have been choosen
  document.onkeyup = function(event){

     letterkeyed = event.key;
     // console.log(letterkeyed);
     for (var j = 0; j < word.length; j++){

      if (letterkeyed == word[j]){
         answer.splice(j, 1, letterkeyed);
         console.log(answer);
       }

         // # of remaining trys counter
      else{ guessremain = guessremain -1;}
        console.log();
      }

      document.getElementById("blankarray").innerHTML = answer.join(" ");


  // logging and displaying wins and losses
    if (answer.indexOf("_", 0 ) == -1){
      wins = wins + 1 ;
      document.getElementById('answer').innerHTML = html;
        document.getElementById("game").innerHTML = (answer.join(" "));
        // + "<p>" + win + "</p>");
        // wins = wins + 1;
        resetGame();
      } else if ((remainingtries == 0)) {
      // && (answer.includes("_"))) {
        losses = losses + 1;
        document.getElementById("game").innerHTML = (rand);
          // + "<p>" + loss + "</p>");
        // losses = losses + 1;
    }

  };

    var html =
      "<p>You chose: " + letterkeyed + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>answer: " + answer + "</p>";



  // reset Game


  // once letter guessed cant repeat letter showed.

  // Set the inner HTML contents of the #game div to our html string
