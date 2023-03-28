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
const quiz = document.getElementById('quiz');
const loader = document.getElementById('loader');

let currentQuestion = [{}, ];
let acceptingAnswers = false;
let score = 0;
let counter = 0;
let availableQuestions = [];
let questions = [{}, ];


//fetch the custom made api of wellbeing quiz questions

fetch('api.json')

.then((res) => { //return the result
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerOptions = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerOptions.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerOptions.forEach((option, index) => {
                formattedQuestion['option' + (index + 1)] = option;

            });

            var correctAnswer = loadedQuestion.correct_answer;

            return formattedQuestion;
        });


        startQuiz();
    })
    .catch((error) => {
        console.error(error);
    });

// set bonus for correct questions and set max questions
const BONUS = 10;
const MAX_QUESTIONS = 10;

// Declaring first function to start the quiz with 0 counter, scores etc.
startQuiz = () => {
    counter = 0;
    score = 0;
    availableQuestions = [...questions]; //retrieve the rest of the questions
    getNextQuestion();
    quiz.classList.remove('hide');
    loader.classList.add('hide');
};


// once all questions answered (length set by MAX_QUESTIONS), then save score to local storage and return to end.html
getNextQuestion = () => {

    if (availableQuestions.length === 0 || counter >= MAX_QUESTIONS) {
        localStorage.setItem('latestScore', score);
        return window.location.assign('end.html');
    }

    //Selecting random questions from the question object array
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    if (currentQuestion) {
        question.innerHTML = currentQuestion.question;
        //changing the innerText for the Questions in relation to the option chosen
        options.forEach(option => {
            const number = option.dataset['number'];
            option.innerHTML = currentQuestion['option' + number];
        })
    };

    // splitting up the questions so they don't get repeated questions    
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

    //Update Question counter
    counter++;
    progressInfo.innerText = `Question ${counter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressFullBar.style.width = `${(counter / MAX_QUESTIONS) * 100}%`;

}

startQuiz();

options.forEach((option) => {

    option.addEventListener('click', (e) => {
        if (!acceptingAnswers) return; //waiting for last action to complete and next quiz question to load

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];
        // set if answer to questions are correct or incorrect, increment the score and change the class for color background change
        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply == 'correct') {
            incrementScore(BONUS);
        }
        selectedOption.classList.add(classToApply);

        setTimeout(() => {
            selectedOption.classList.remove(classToApply);
            getNextQuestion();
        }, 1000);
    });
});



incrementScore = (num) => {
    score += num;
    scoreInfo.innerText = score;
};