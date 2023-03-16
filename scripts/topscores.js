/** 
 * This file contains the functions for the topscores section of the quiz
 */

//Either retrieve the topscores or an empty array
const listTopScores = document.getElementById('listTopScores');
const topScores = JSON.parse(localStorage.getItem('topScores')) || [];

listTopScores.innerHTML = topScores.map(score => {
    return '<li> class="topscore">' + score.username + '-' + score.score + '</li>';
})

.join('');