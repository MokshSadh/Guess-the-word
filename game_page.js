    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0;
    player2_score = 0;

    document.getElementById("player1_name").innerHTML=player1_name +" : ";
    document.getElementById("player2_name").innerHTML=player2_name +" : ";

    document.getElementById("player1_score").innerHTML=player1_score ;
    document.getElementById("player2_score").innerHTML=player2_score ;

    document.getElementById("player_question").innerHTML="Question turn - "+player1_name ;
    document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name ;

    function send(){
        get_word= document.getElementById("word").value;
        word=get_word.toLowerCase();
        console.log("word entered is ", word);

        CharAt1=word.charAt(1);
        console.log(CharAt1);

        center=Math.floor(word.length/2);
        CharAt2=word.charAt(center);
        console.log(CharAt2);

        last_value=word.length-1;
        CharAt3=word.charAt(last_value);
         console.log(CharAt3);
        
         remove_1=word.replace(CharAt1 , "_");
         remove_2=remove_1.replace(CharAt2 , "_");
         remove_3=remove_2.replace(CharAt3 , "_");

         question_word="<h4 id='word_display'>Q. "+remove_3+"</h4>";
         input="<br> Answer: <input type='text' id='input_check_box'>";
         Check="<br><br> <button onclick='check()' class='btn btn-info'>Check</button>";
         row=question_word+input+Check;
         document.getElementById("output").innerHTML=row;
         document.getElementById("word").value="";
    }
    answer_turn="player2";
    question_turn="player1";

    function check(){
        get_answer=document.getElementById("input_check_box").value;
        answer=get_answer.toLowerCase();

        if(answer==word){
            if(answer_turn=="player1"){
                player1_score=player1_score+1;
                document.getElementById("player1_score").innerHTML=player1_score;
            }
            else{
                player2_score=player2_score+1;
                document.getElementById("player2_score").innerHTML=player2_score;
            }
        }

        if (question_turn=="player1"){
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
        }
        else{
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
        }
        if (answer_turn=="player1"){
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
        }
        else{
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
        }

        document.getElementById("output").innerHTML="";
    }