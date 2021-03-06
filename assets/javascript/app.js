$(document).ready(function() {


// Answers
var RoomQuestions = {
    Question1: {
        Question: 'Who is Lisa having an affair with?',
        Answer: {
            Answer1: {
                Answer: "Mark",
                Correct: 1
            },
            Answer2: {
                Answer: "Johnny",
                Correct: 0
            },
            Answer3: {
                Answer: "Denny",
                Correct: 0
            },
            Answer4: {
                Answer: "Peter",
                Correct: 0
            }
        },
        Image: "assets/images/1.gif"
    },
    Question2: {
        Question: 'Why does Chris R come looking for money from Denny?',
        Answer: {
            Answer1: {
                Answer: "Denny used the money to buy drugs",
                Correct: 1
            },
            Answer2: {
                Answer: "What kind of money?",
                Correct: 0
            },
            Answer3: {
                Answer: "He thought Denny stole his money",
                Correct: 0
            },
            Answer4: {
                Answer: "He borrowed some to pay off a student loan",
                Correct: 0
            }
        },
        Image: "assets/images/2.gif"
    },
    Question3: {
        Question: 'Who plays Tommy Wiseau in the 2017 biography/comedy of The Room, The Disaster Artist?',
        Answer: {
            Answer1: {
                Answer: "James Franco",
                Correct: 1
            },
            Answer2: {
                Answer: "Johnny Depp",
                Correct: 0
            },
            Answer3: {
                Answer: "Hugh Jackman",
                Correct: 0
            },
            Answer4: {
                Answer: "Greg Sestero",
                Correct: 0
            }
        },
        Image: "assets/images/3.webp"
    },
    Question4: {
        Question: 'Why did Johnny not get the promotion?',
        Answer: {
            Answer1: {
                Answer: "He was betrayed and tricked although he worked very hard",
                Correct: 1
            },
            Answer2: {
                Answer: "He was caught cheating on Lisa",
                Correct: 0
            },
            Answer3: {
                Answer: "Mark was promoted instead",
                Correct: 0
            },
            Answer4: {
                Answer: "He decided to retire to take care of Lisa",
                Correct: 0
            }
        },
        Image: "assets/images/4.gif"
    },
    Question5: {
        Question: 'What sport does Johnny and friends play?',
        Answer: {
            Answer1: {
                Answer: "Football",
                Correct: 1
            },
            Answer2: {
                Answer: "Catch",
                Correct: 0
            },
            Answer3: {
                Answer: "Rugby",
                Correct: 0
            },
            Answer4: {
                Answer: "Tag",
                Correct: 0
            }
        },
        Image: "assets/images/5.gif"
    },
    Question6: {
        Question: 'What sound does a chicken make?',
        Answer: {
            Answer1: {
                Answer: "Cheep Cheep Cheep",
                Correct: 1
            },
            Answer2: {
                Answer: "Bark",
                Correct: 0
            },
            Answer3: {
                Answer: "Cluck cluck cluck",
                Correct: 0
            },
            Answer4: {
                Answer: "Meoooow",
                Correct: 0
            }
        },
        Image: "assets/images/6.webp"
    },
    Question7: {
        Question: 'Did Johnny hit Lisa?',
        Answer: {
            Answer1: {
                Answer: "It's B.S. He did not hit her. He did noooot.",
                Correct: 1
            },
            Answer2: {
                Answer: "Oh, Hi Mark.",
                Correct: 0
            },
            Answer3: {
                Answer: "Yes he hit her.",
                Correct: 0
            },
            Answer4: {
                Answer: "No he was too busy at his job at the computer business.",
                Correct: 0
            }
        },
        Image: "assets/images/7.webp"
    },
    Question8: {
        Question: "Why did Johnny not get the promotion?",
        Answer: {
            Answer1: {
                Answer: "He was betrayed and tricked although he worked very hard",
                Correct: 1
            },
            Answer2: {
                Answer: "He was caught cheating on Lisa",
                Correct: 0
            },
            Answer3: {
                Answer: "Mark was promoted instead",
                Correct: 0
            },
            Answer4: {
                Answer: "He decided to retire to take care of Lisa",
                Correct: 0
            }
        },
        Image: "assets/images/8.gif"
    },
    Question9: {
        Question: "Who directed, produced, wrote and starred in cult classic 'The Room'?",
        Answer: {
            Answer1: {
                Answer: "Tommy Wiseau",
                Correct: 1
            },
            Answer2: {
                Answer: "Amari Cooper, Saquaon Barkley, Marshawn Lynch, and Jesse James",
                Correct: 0
            },
            Answer3: {
                Answer: "Tom Hanks",
                Correct: 0
            },
            Answer4: {
                Answer: "Lizzy McGuire",
                Correct: 0
            }
        },
        Image: "assets/images/9.webp"
    },
    Question10: {
        Question: "What is Lisa's mother suffering from?",
        Answer: {
            Answer1: {
                Answer: "Breast Cancer",
                Correct: 1
            },
            Answer2: {
                Answer: "Alcholism",
                Correct: 0
            },
            Answer3: {
                Answer: "Steroid Abuse",
                Correct: 0
            },
            Answer4: {
                Answer: "All of the Above",
                Correct: 0
            }
        },
        Image: "assets/images/10.gif"
    },
    Question11: {
        Question: "When Johnny walks into the flower shop, who does he say hello to?",
        Answer: {
            Answer1: {
                Answer: "The florist and dog",
                Correct: 1
            },
            Answer2: {
                Answer: "The dog",
                Correct: 0
            },
            Answer3: {
                Answer: "The florist only",
                Correct: 0
            },
            Answer4: {
                Answer: "Neither",
                Correct: 0
            }
        },
        Image: "assets/images/11.webp"
    }
}

// Count Totals
var Correct = 0;
var Incorrect = 0;
var Unanswered = 0;
var QuestionsArrayGameDefault = [RoomQuestions.Question1,RoomQuestions.Question2,RoomQuestions.Question3,RoomQuestions.Question4,RoomQuestions.Question5,RoomQuestions.Question6,RoomQuestions.Question7,RoomQuestions.Question8,RoomQuestions.Question9,RoomQuestions.Question10,RoomQuestions.Question11];
var QuestionsArrayGame = QuestionsArrayGameDefault;
var QuestionsArrayLength = QuestionsArrayGame.length;
var SetTimer = 5;
var QuestionTimer;
var DisplayTimer;
var CorrectTimer;
var AnswersArrayGame;
var StoreCorrectAnswer;
var StoreCorrectImage;
var valid;

//Display Start Button
var startButton = $("<button>");
    startButton.text("Start Game");
    startButton.addClass("StartClass");
    $(".DisplayStart").append(startButton);



//DisplayTimer
function DTimer() {
    SetTimer = 15;
    var timer = $(".DisplayTimer")

    function timeIt () {
        SetTimer--;
    timer.text("Time Remaining: " + SetTimer)
    }

    DisplayTimer = setInterval(timeIt,1000);
    }

function QTimer() {
    QuestionTimer = setInterval(function()
    { 
        
    Unanswered ++;
    var DisplayCorrectImg  = $("<p>");
    var DisplayImg = $("<img>")
    $(".EachAnswer").remove()
    DisplayCorrectImg.text("Too Late! The answer was: " + StoreCorrectAnswer);
    DisplayCorrectImg.addClass("TxtQuestionClass");
    $(".QuestionTxt").append(DisplayCorrectImg);
    DisplayImg.addClass("ImgClass");
    DisplayImg.attr("src",StoreCorrectImage);
    $(".QuestionTxt").append(DisplayImg);
    
    clearTimers();

    CATimer();


    }, 15000); 
    }

function CATimer() {
    CorrectTimer = setInterval(function()
    {
    QuestionAnswer();
    }, 5000);
}

function resetTimer() {
    DTimer();
    QTimer();
}

function clearTimers() {
    clearTimeout(QuestionTimer);
    clearTimeout(DisplayTimer);
    }

//RandomizeQuestions
function resetGame() {

// Set Totals to 0
    Correct = 0;
    Incorrect = 0;
    Unanswered = 0;

// Randomize Questions
    QuestionsArrayGame = [RoomQuestions.Question1,RoomQuestions.Question2,RoomQuestions.Question3,RoomQuestions.Question4,RoomQuestions.Question5,RoomQuestions.Question6,RoomQuestions.Question7,RoomQuestions.Question8,RoomQuestions.Question9,RoomQuestions.Question10,RoomQuestions.Question11];
    QuestionsArrayLength = QuestionsArrayGame.length;

    for (var i = 1; i < QuestionsArrayGame.length; i++) {
        var index = Math.floor(Math.random() * QuestionsArrayLength);
        QuestionsArrayLength --;

        var temp = QuestionsArrayGame[QuestionsArrayLength];
        QuestionsArrayGame[QuestionsArrayLength] = QuestionsArrayGame[index];
        QuestionsArrayGame[index] = temp;
    }
    }

resetGame();

// Randomize Answers
function randomizeAnswers() {
    var AnswersArrayGameDefault = [QuestionsArrayGame[0].Answer.Answer1,QuestionsArrayGame[0].Answer.Answer2,QuestionsArrayGame[0].Answer.Answer3,QuestionsArrayGame[0].Answer.Answer4];
    AnswersArrayGame = AnswersArrayGameDefault;
    AnswersArrayLength = AnswersArrayGame.length;
    StoreCorrectAnswer = QuestionsArrayGame[0].Answer.Answer1.Answer;
    StoreCorrectImage = QuestionsArrayGame[0].Image;

    AnswersArrayLength = AnswersArrayGame.length;

    for (var i = 1; i < AnswersArrayGame.length; i++) {
        var index = Math.floor(Math.random() * AnswersArrayLength);
        AnswersArrayLength --;

        var temp = AnswersArrayGame[AnswersArrayLength];
        AnswersArrayGame[AnswersArrayLength] = AnswersArrayGame[index];
        AnswersArrayGame[index] = temp;
    }
}
    
// Display Question and Answers

function QuestionAnswer() {
    if (Correct + Incorrect + Unanswered < 10) {
        // Randomize Answers
        randomizeAnswers();
        // Remove Questions and Answers
        $(".QuestionTxt").remove();
        $(".EachAnswer").remove();

        // Clear CorrectTimer
        clearTimeout(CorrectTimer);

        // Reset Timer
        resetTimer()

        // Display Question
        var QuestionText = $("<p>");
        QuestionText.text(QuestionsArrayGame[0]["Question"]);
        QuestionText.addClass("QuestionTxt")
        $(".DisplayQuestion").append(QuestionText);


        // Display Answers
            for (var j = 0; j < 4; j++) {
                var DisplayQuestions = [AnswersArrayGame[0].Answer,AnswersArrayGame[1].Answer,AnswersArrayGame[2].Answer,AnswersArrayGame[3].Answer];
                var StoreCorrectAnswer = [AnswersArrayGame[0].Correct,AnswersArrayGame[1].Correct,AnswersArrayGame[2].Correct,AnswersArrayGame[3].Correct];
                var DisplayButton = $("<button>");
                    DisplayButton.attr("type", "button");
                    DisplayButton.text(DisplayQuestions[j]);
                    DisplayButton.attr("Valid",StoreCorrectAnswer[j]);
                    DisplayButton.addClass("EachAnswer")
                    $(".AnswerButton").append(DisplayButton);
            }

        QuestionsArrayGame.shift();

        selectAnswer();
    }

    else {
        clearTimers();
        clearTimeout(CorrectTimer);
        tryAgain();
    }
}


$(".StartClass").click(function() {
$(".StartClass").remove();
QuestionAnswer();

});

function selectAnswer() {
    $(".EachAnswer").click(function() {
        valid = ($(this).attr("valid"));
        
    if (valid == 1) {
        Correct ++;
        clearTimers();
        DisplayCorrectImage();
        CATimer();
    }
    else {
        Incorrect ++;
        clearTimers();
        DisplayCorrectImage();
        CATimer();
    }

    });
}

function DisplayCorrectImage() {
    $(".EachAnswer").remove();
    var DisplayCorrectImg  = $("<p>");
    var DisplayImg = $("<img>")
    if (valid == 1) {
            DisplayCorrectImg.text("Correct! The answer was: " + StoreCorrectAnswer);
        }
        else {
            DisplayCorrectImg.text("Incorrect! The answer was: " + StoreCorrectAnswer);
        }
    DisplayCorrectImg.addClass("TxtQuestionClass");
    $(".QuestionTxt").append(DisplayCorrectImg);
    
    DisplayImg.addClass("ImgClass");
    DisplayImg.attr("src",StoreCorrectImage);
    $(".QuestionTxt").append(DisplayImg);

}

function tryAgain() {
    $(".QuestionTxt").remove();
    $(".EachAnswer").remove();
    var DisplayCorrect = $("<p>");
        DisplayCorrect.addClass("CorrectClass");
        DisplayCorrect.text("Correct: " + Correct);
    $(".DisplayStart").append(DisplayCorrect);
    
    var DisplayIncorrect = $("<p>");
        DisplayIncorrect.addClass("IncorrectClass");
        DisplayIncorrect.text("Incorrect: " + Incorrect);
    $(".DisplayStart").append(DisplayIncorrect);

        var DisplayUnanswered = $("<p>");
        DisplayUnanswered.addClass("UnansweredClass");
        DisplayUnanswered.text("Unanswered: " + Unanswered);
    $(".DisplayStart").append(DisplayUnanswered);

    var restartGame = $("<button>");
        restartGame.text("Let's Play Again!");
        restartGame.addClass("RestartClass");
        $(".DisplayQuestion").append(restartGame);

    $(".RestartClass").click(function() {
    $(".CorrectClass").remove();
    $(".IncorrectClass").remove();
    $(".UnansweredClass").remove();
    $(".RestartClass").remove();
    resetGame();
    QuestionAnswer();
    });

    }

  $(document).ready(function() {
  var obj = document.createElement("audio");
  obj.src = "assets/images/soundtrack.mp3";
  obj.volume = 1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $(".StartClass").click(function() {
    obj.play();
    // obj.pause();
  });
});

});