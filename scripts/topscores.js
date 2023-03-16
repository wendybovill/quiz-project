/** 
 * This file contains the functions for the topscores section of the quiz
 */

//Either retrieve the topscores or an empty array
const listTopScores = document.getElementById('listTopScores');
const topScores = JSON.parse(localStorage.getItem('topScores')) || [];
const allScores = JSON.parse(localStorage.getItem('topScores'));


if (allScores == '') {
    listTopScores.innerHTML = '<li><span style="font-style: bold; font-size: 2rem;">There are no scores available. Have a go at the quiz and save your score.</sapn></li>';

} else {
    listTopScores.innerHTML = topScores.map(score => {
            return '<li><span style="font-style: bold; font-size: 2rem;">' + `${score.user}   ${score.score}` + '</sapn></li>';
        })
        .join('');
}