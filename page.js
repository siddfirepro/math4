var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1name").innerHTML=player1_name +":";
document.getElementById("player2name").innerHTML=player2_name +":";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn- " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn- " + player1_name;
function send(){
    var getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("wordinlowercase="+word);
    Charat1=word.CharAt(1);
     console.log(Charat1);
     lenght_divide_2 = Math.floor(word.length/2);
      charAt2 = word.charAt(lenght_divide_2);
       console.log(charAt2);
       lenght_minus_1 = word.length - 1;
        charAt3 = word.charAt(lenght_minus_1);
         console.log(charAt3);
         remove_charAt1 = word.replace(charAt1, "_");
         remove_charAt2 =  remove_charAt2.replace(charAt2, "_");
         remove_charAt3 =  remove_charAt3.replace(charAt3, "_"); 
         question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
          input_box = "<br>Answer : <input type='text' id='input_check_box'>";
           check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
            row = question_word + input_box + check_button ;
             document.getElementById("output").innerHTML = row;
              document.getElementById("word").value = "";     
}
question_turn="player1";
answer_turn="player2";
function check(){
   get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
     if(answer == word){
     if(answer_turn == "player1"){
         player1_score =player1_score+1;
         document.getElementById("player1score").innerHTML=player1_score;
         else{
           player2_score =player1_score+1;
           document.getElementById("player2score").innerHTML=player2_score; 
         }
     }
     if(question_turn="player1"){
         question_turn="player2";
         document.getElementById("player_question").innerHTML="question-turn"+player2_name;
         else{
           question_turn="player1";
           document.getElementById("player_question").innerHTML="question-turn"+player1_name; 
         }
     }
     if(answer_turn="player1"){
       answer_turn="player2";
       document.getElementById("player_answer").innerHTML="answer-turn"+player2_name;
       else{
         answer_turn="player1";
         document.getElementById("player_answer").innerHTML="answer-turn"+player1_name; 
       }
       document.getElementById("output").innerHTML = "";
   }
     }
}