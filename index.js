var readLineSync = require('readline-sync');

var score =  0;

var highScore = [
  {
    name : "Rushikesh",
    score: 3
  },
  {
    name: "RK",
    score: 1
  }
]

var questions = [
  {
    question: "What is my favourite Superhero? ",
    answer : "iron man"
  },
  {
    question: "Where do I live? ",
    answer : "kolhapur"
  },
  {
    question: "What is my Favourite sport? ",
    answer: "cricket"
  }
]

function welcome() {
  var userName = readLineSync.question("What is your name? ");
  console.log("Welcome " + userName + " to DO YOU KNOW RUSHI!!");
}

function play(question, answer) {
  var userAnswer  = readLineSync.question(question);

  if(userAnswer.toLowerCase() === answer) {
    console.log("You are Right!");
    score += 1;
  } else {
    console.log("You are wrong!");
    score -= 1;
  }

  console.log("You current score is: " + score);
}

function game() {
  for(let i=0; i<questions.length;i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log('YAY! You have completed the quiz.');

  highScore.map(score => console.log(score.name, ":", score.score))
}

welcome();
game();
showScores();