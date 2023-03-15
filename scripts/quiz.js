/** 
 * Author: Wendy Bovill
 * Project Milestone 2 CI/WAES
 * 
 * This file contains the javascript necessary to run the quiz.
 * All functions are found in here. Without this file the quiz will not work.
 */

// Declaring initial variables

const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const progressInfo = document.getElementById('progressInfo');
const scoreInfo = document.getElementById('score');
const progressFullBar = document.getElementById('progressFullBar');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [{
        question: "Inside which HTML element do we put the JavaScript??",
        option1: "<script>",
        option2: "<javascript>",
        option3: "<js>",
        option4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        option1: "<script href='xxx.js'>",
        option2: "<script name='xxx.js'>",
        option3: "<script src='xxx.js'>",
        option4: "<script file='xxx.js'>",
        answer: 3
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        option1: "msgBox('Hello World');",
        option2: "alertBox('Hello World');",
        option3: "msg('Hello World');",
        option4: "alert('Hello World');",
        answer: 4
    }
];


fetch('questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startQuiz();
    })
    .catch((error) => {
        console.error(error);
    });

// set bonus for correct questions and set max questions
const BONUS = 10;
const MAX_QUESTIONS = 4;

// Declaring first function to start the quiz with 0 counter, scores etc.
startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNextQuestion();
};

getNextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }

    //Selecting random questions from the question object array
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    //changing the innerText for the Questions in relation to the option chosen
    options.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });

    // splitting up the questions so they don't get repeated questions    
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
    questionCounter++;
}

startQuiz();

options.forEach(option => {
    option.addEventListner("click", element => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = element.target;
        const selectedAnswer = selectedOption.dataset["number"];

        getNextQuestion();
    });

});

alert('hello world');

module.exports = { quiz };