class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    text("Result of the Quiz",450,50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant Who Anwered Correct is in Green Color!*",650,100);
    }

    //write code to highlight contest who answered correctly
    for (var plr in allContestants) {
      var displayPosition = 130;
      var correctAns = 3;
        if(CorrectAns === allContestants[plr].answer) {
            fill ("green");
          }
          else {
            fill ("red");
          }
          displayPosition+=20;
          textSize(15);
          text(allContestants[plr].name+  ":" + allPlayers[plr].answer,120,displayPosition);
      }
    
  }

}
