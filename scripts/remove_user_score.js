/* Get username, the users final score,  save the score, and retrieve the latest scores */
const username = document.getElementById('username');
const clearScore = document.getElementById('clearScore');
const finalScore = document.getElementById('finalScore');
const clearItems = localStorage.getItem('topScore');

/* When the user enters their username, allow clear button to be active - removed disabled */
clearScores = (e) => {
    window.localStorage.clear(clearItems);
}