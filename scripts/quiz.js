/** 
 * Author: Wendy Bovill
 * Project Milestone 2 CI/WAES
 * 
 * This file contains the javascript necessary to run the quiz.
 * All functions are found in here. Without this file the quiz will not work.
 */

// Declaring initial variables

const question = document.getElementById('question');
const options = Array.from(document.getElementById('options'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];

const BONUS = 10;
const MAX_QUESTIONS = 4;

// Declaring first function to start the quiz with 0 counter, scores etc.
start_quiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNextQuestion();
};

getNextQuestion = () => {

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach( option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

startQuiz();


alert('hello world');

module.exports = {quiz};