var questions = [
    {
        question : "During 1919-20, immediately after the WW1, a deadly pandemic killed millions of people . What was it called?",
        choices : ["Bird Flu", "Swine Flu", "Bubonic Plague", "Spanish Flue"],
        answer : "Spanish Flue"
    },
    {
        question : "Which of the following diseases are caused due to a virus?",
        choices : ["Ebola", "SARS", "Covid-19", "All of the Above"],
        answer : "All of the Above"
    },
    {
        question : "A virus is made up of a DNA or RNA genome inside a protein shell known as what?",
        choices : ["Capsid", "Enzymes", "Follicles", "Membrane"],
        answer : "Capsid"
    },
    {
        question : "What is the normal body temperature of a human?",
        choices : ["36 Degree Celcius", "37 Degree Celcius", "35 Degree Celcius", "40 Degree Celcius"],
        answer : "37 Degree Celcius"
    },
    {
        question : "Through which of these the Novel Corona virus get transmitted?",
        choices : ["Respiratory Droplets", "Talking", "Both A and B", "None of these"],
        answer : "Respiratory Droplets"
    },
    {
        question : "In which of the following place the first case of novel coronavirus was identified?",
        choices : ["Beijing", "Wuhan", "Shangai", "Tiajin"],
        answer : "Wuhan"
    },
    {
        question : "From where did coronavirus get its name?",
        choices : ["Due to their Crown like projectios", "Due to leaf like projections", "A person named Corona identified it", "Corona of the Sun"],
        answer : "Due to their Crown like projectios"
    },
    {
        question : "Which Indian organisation has given its approval to Diagnostic machines used to test drug-resistant tuberculosis (TB) for conducting Covid-19 tests?",
        choices : ["All India Institute of Medical Sciences (AIIMS)", "Indian Council of Medical Research (ICMR)", "Medical Council of India (MCI)", "Indian Council of Agricultural Research (ICAR)"],
        answer : "Indian Council of Medical Research (ICMR)"
    },
    {
        question : "Aerobiosys Innovations, a start-up has developed low cost ventilator called "Jeevan Lite"? Where was this start-up incubated?",
        choices : ["IIT Madras", "IIT Banglore", "IIT Hyderabad", "IIT Bombay"],
        answer : "IIT Hyderabad"
    },
    {
        question : "Name the ICMR approved company which has launched India’s 1st home screening kit for covid-19?",
        choices : ["Piramal", "Bione", "GSK India", "Bharat Infotech"],
        answer : "Bione"
    },
    {
        question : "How long is the Incubation period of COVID - 19",
        choices : ["1 - 14 Days", "5 - 25 Days", "10 - 15 Days", "40 - 50 Days"],
        answer : "1 - 14 Days"
    },
    {
        question : "Which of the following is NOT a common symptom of the coronavirus?",
        choices : ["Dry Cough", "Fever", "Rash", "Shortness of breath"],
        answer : "Rash"
    },
    {
        question : "Coronavirus cases in children have been ___________.",
        choices : ["as common as elderly cases", "non-existent", "rapidly rising", "rare, as of now"],
        answer : "rare, as of now"
    },
    {
        question : "By maintaining a distance of _________ from others when possible, people may limit the spread of the virus.",
        choices : ["12 inches", "two feet", "four feet", "six feet"],
        answer : "six feet"
    },
    {
        question : "A vaccine for the coronavirus will take at least ________ to become available to the public.",
        choices : ["six weeks", "three months", "six months", "one year"],
        answer : "one year"
    }
];

var score = 0;
var quizObject = {};
var quizDuration = 0;
var quizSecondElapsed = 0;
var quizInterval;
var questionDuration = 15;
var questionSecondElapsed = 0;
var questionInterval;
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
    questionDuration = 0;
    questionSecondElapsed = 0;
    questionInterval;
}

function startquiz(questions){
    timerTable.style.visibility = "visible";
    quizDuration = questions.length * 10;
}