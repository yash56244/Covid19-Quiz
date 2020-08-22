var questions = [
    {
        question : "During 1919-20, immediately after the WW1, a deadly pandemic killed millions of people . What was it called?",
        choices : ["Bird Flu", "Swine Flu", "Bubonic Plague", "Spanish Flue"],
        answer : "Spanish Flue",
        marked : false,
        correct : false
    },
    {
        question : "Which of the following diseases are caused due to a virus?",
        choices : ["Ebola", "SARS", "Covid-19", "All of the Above"],
        answer : "All of the Above",
        marked : false,
        correct : false
    },
    {
        question : "A virus is made up of a DNA or RNA genome inside a protein shell known as what?",
        choices : ["Capsid", "Enzymes", "Follicles", "Membrane"],
        answer : "Capsid",
        marked : false,
        correct : false
    },
    {
        question : "What is the normal body temperature of a human?",
        choices : ["36 Degree Celcius", "37 Degree Celcius", "35 Degree Celcius", "40 Degree Celcius"],
        answer : "37 Degree Celcius",
        marked : false,
        correct : false
    },
    {
        question : "Through which of these the Novel Corona virus get transmitted?",
        choices : ["Respiratory Droplets", "Talking", "Both A and B", "None of these"],
        answer : "Respiratory Droplets",
        marked : false,
        correct : false
    },
    {
        question : "In which of the following place the first case of novel coronavirus was identified?",
        choices : ["Beijing", "Wuhan", "Shangai", "Tiajin"],
        answer : "Wuhan",
        marked : false,
        correct : false
    },
    {
        question : "From where did coronavirus get its name?",
        choices : ["Due to their Crown like projectios", "Due to leaf like projections", "A person named Corona identified it", "Corona of the Sun"],
        answer : "Due to their Crown like projectios",
        marked : false,
        correct : false
    },
    {
        question : "Which Indian organisation has given its approval to Diagnostic machines used to test drug-resistant tuberculosis (TB) for conducting Covid-19 tests?",
        choices : ["All India Institute of Medical Sciences (AIIMS)", "Indian Council of Medical Research (ICMR)", "Medical Council of India (MCI)", "Indian Council of Agricultural Research (ICAR)"],
        answer : "Indian Council of Medical Research (ICMR)",
        marked : false,
        correct : false
    },
    {
        question : "Aerobiosys Innovations, a start-up has developed low cost ventilator called Jeevan Lite? Where was this start-up incubated?",
        choices : ["IIT Madras", "IIT Banglore", "IIT Hyderabad", "IIT Bombay"],
        answer : "IIT Hyderabad",
        marked : false,
        correct : false
    },
    {
        question : "Name the ICMR approved company which has launched India’s 1st home screening kit for covid-19?",
        choices : ["Piramal", "Bione", "GSK India", "Bharat Infotech"],
        answer : "Bione",
        marked : false,
        correct : false
    },
    {
        question : "How long is the Incubation period of COVID - 19",
        choices : ["1 - 14 Days", "5 - 25 Days", "10 - 15 Days", "40 - 50 Days"],
        answer : "1 - 14 Days",
        marked : false,
        correct : false
    },
    {
        question : "Which of the following is NOT a common symptom of the coronavirus?",
        choices : ["Dry Cough", "Fever", "Rash", "Shortness of breath"],
        answer : "Rash",
        marked : false,
        correct : false
    },
    {
        question : "Coronavirus cases in children have been ___________.",
        choices : ["as common as elderly cases", "non-existent", "rapidly rising", "rare, as of now"],
        answer : "rare, as of now",
        marked : false,
        correct : false
    },
    {
        question : "By maintaining a distance of _________ from others when possible, people may limit the spread of the virus.",
        choices : ["12 inches", "two feet", "four feet", "six feet"],
        answer : "six feet",
        marked : false,
        correct : false
    },
    {
        question : "A vaccine for the coronavirus will take at least ________ to become available to the public.",
        choices : ["six weeks", "three months", "six months", "one year"],
        answer : "one year",
        marked : false,
        correct : false
    }
];

var score = 0;
var quizObject = {};
var quizDuration = 0;
var quizSecondElapsed = 0;
var quizInterval;
var currentQuestion = 0;
var highScore = document.getElementById("highScore");
var quizTimer = document.getElementById("quizTimer");
var questionTimer = document.getElementById("questionTimer");
var quiz = document.getElementById("quiz");
var timerTable = document.getElementById("timer");

init();

function init() {
    clear();
    reset();
    let heading = document.createElement("p");
    heading.setAttribute("id", "heading");
    heading.textContent = "This is a COVID-19 based general Quiz!";
    quiz.appendChild(heading);
    let instructions = document.createElement("p");
    instructions.setAttribute("id", "instructions")
    instructions.textContent = "If you answer correctly you will score points.";
    quiz.appendChild(instructions);
    let startQuiz = document.createElement("button");
    startQuiz.setAttribute("id", "startQuiz");
    quiz.appendChild(startQuiz);
    startQuiz.addEventListener("click", function(){
        startquiz(questions);
    })
}

function clear() {
    quiz.innerHTML = "";
}

function reset() {
    score = 0;
    quizDuration = 0;
    quizSecondElapsed = 0;
    quizInterval;
}

function startquiz(questions){
    timerTable.style.visibility = "visible";
    quizDuration = questions.length * 10;
    startTimer();
    time();
    question();
}

function startTimer() {
    clearInterval(quizInterval);
    quizSeconds = quizDuration;
    quizInterval = setInterval(function() {
        quizSecondElapsed++;
        time();
    }, 1000);
}

function time() {
    quizTimer.textContent = quizDuration - quizSecondElapsed;
    if((quizDuration - quizSecondElapsed) < 1){
        endQuiz();
    }
}

function question() {
    showQuestion(currentQuestion);

    currentQuestion++;
}

function showQuestion(i) {
    clear();
    let question = document.createElement("h1");
    question.setAttribute("question", questions[i].question);
    question.textContent = questions[i].question;
    quiz.appendChild(question);
    let choicebox = document.createElement("ul");
    choicebox.setAttribute("id", "choicebox");
    quiz.append(choicebox);
    for(let j = 0; j < questions[i].choices.length; j++){
        let listchoice = document.createElement("li");
        listchoice.setAttribute("choice-value", questions[i].choices[j]);
        listchoice.setAttribute("id","questionNum-" + j);
        listchoice.textContent = questions[i].choices[j];
        choicebox.appendChild(listChoice);
    }
    choicebox.addEventListener("click", function () {
        scoreAnswer(questions[i]);
    })
}

function scoreAnswer(current) {
    var e = event.target;
    if(e.matches("li")){
        let selectedItem = e.textContent;
        if(selectedItem == current.answer){
            score++;
        }else{
            quizDuration -= 5;
        }
        showAnswer(current);
    }
}

function showAnswer(current) {
    for(let i = 0; i < current.choices.length; i++){
        let questionid = "#questionNum-" + i;
        let questionrow = document.querySelector(questionid);
        if(current.choices[i] != current.answer){
            questionrow.setAttribute("style", "background-color: red");
        }else{
            questionrow.setAttribute("style", "background-color: green");
        }
    }
}