var body = document.body;

var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var quizDiv = document.querySelector(".quiz-div");
var questionsDiv = document.querySelector(".questions-div");
var initialDiv = document.querySelector(".initial-div");
var startQuizBtn = document.querySelector("#start-quiz");
var scoreEl = document.querySelector(".score");
var submitScoreBtn = document.querySelector("#submit");
var initialInput = document.querySelector("#initial");

var correctAnsSound = new Audio("file.wav");
var wrongeAnsSound = new Audio("file.wav");

var score = 0;
var question = 0;
var setTimer;
var totalQuestions = 5;
var timeInterval;

var questionsArray = [
    {   
        q: "Philology is the",
        a: "Science of languages",
        options: [
            "Study of bones",
            "Study of muscles",
            "Study of architecture",
            "Science of languages"
        ]
    },
    {   
        q: "The 'Black flag' signifies",
        a: "Protest",
        options: [
            "Revolution/danger",
            "Peace",
            "Protest",
            "Truce"
        ]
    },
    {   
        q: "Thomas Cup is associated with",
        a: "Badminton",
        options: [
            "Badminton",
            "Billiards",
            "Lawn tennis",
            "Table tennis"
        ]
    },
    {   
        q: "Grand Central Terminal, Park Avenue, New York is the world's",
        a: "Largest railway station",
        options: [
            "Largest railway station",
            "Highest railway station",
            "Longest railway station",
            "None of the above"
        ]
    },
    {   
        q: "The 2006 World Cup Football Tournament held in",
        a: "Germany",
        options: [
            "France",
            "China",
            "Germany",
            "Brazil"
        ]
    }
];

//View Highscores Link
highscore.addEventListener("click", redirectToHighscorePage);

//Start Quiz onClick Listener
startQuizBtn.addEventListener("click", startQuiz);

//Start Quiz function
function startQuiz() {

    quizDiv.style.display = "none";
    questionsDiv.style.display = "block";

    askQuestion();
}

//Ask Question function
function askQuestion() {

    if (totalQuestions === question) {

        questionsDiv.style.display = "none";

        initialDiv.style.display = "block";

        scoreEl.textContent = score;
        initialInput.focus();
        initialInput.value = '';
        return;
    }

    questionsDiv.innerHTML = "";

    var h3El = document.createElement("h3");
    h3El.textContent = questionsArray[question].q;

    var olEl = document.createElement("ol");
    var arrOptions = questionsArray[question].options;
    
    for(var i = 0; i < arrOptions.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = questionsArray[question].options[i];
        liEl.id = questionsArray[question].options[i];
        liEl.style.textAlign = "left";
        // liEl.setAttribute("style", "background-color: blue; text-align:left; color:white; margin: 2px;")
        liEl.onclick = function() {
            if (this.id === questionsArray[question].a) {
                score += 5;
                // correctAnsSound.play();
            } else {
                // wrongeAnsSound.play();
            }
            clearInterval(timeInterval);
            question++;
            askQuestion();
        }
        olEl.appendChild(liEl);
    }

    questionsDiv.append(h3El, olEl);

    setTimer();
}

function setTimer() {
    
    var timeLeft = 5;
    timeInterval = setInterval(function() {
        timer.textContent = "Time : " + timeLeft;
        timeLeft--;

        if(timeLeft == -1) {
            timeLeft.textContent = "Time : 5";
            clearInterval(timeInterval);
            question++;
            askQuestion();
        }
    }, 1000);
}

submitScoreBtn.addEventListener("click", function(event) {

    var initialText = initialInput.value.trim();

    if (initialText === "") {
        return;
    }

    // event.preventDefault();    
    var oldScores = JSON.parse(localStorage.getItem("scoresObject")) || [];

    var newScore = {
        'name' : initialText,
        'score' : score
    };
    oldScores.push(newScore);

    localStorage.setItem("scoresObject", JSON.stringify(oldScores));

    redirectToHighscorePage();
});

function redirectToHighscorePage() {
    window.location.href = "highScore.html";
}