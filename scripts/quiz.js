/** 
 * Author: Wendy Bovill
 * Project Milestone 2 CI/WAES
 * 
 * This file contains the javascript necessary to run the quiz.
 * All functions are found in here. Without this file the quiz will not work.
 */

let quiz = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
    choices: ["option1", "option2", "option3", "option4"]
};

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

start_quiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = getNewQuestion();

startGame();


alert('hello world');

module.exports = {quiz};