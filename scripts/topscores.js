/** 
 * Author: Wendy Bovill
 * Project Milestone 2 CI/WAES
 * 
 * This file contains the javascript for the topscore.
 * 
 */

//Either retrieve the topscores or an empty array
const listTopScores = document.getElementById('listTopScores');
const topScores = JSON.parse(localStorage.getItem('topScores')) || [];



if (topScores == '') {
    listTopScores.innerText = 'There are no scores available. Have a go at the quiz and save your score.';

} else {
    listTopScores.innerHTML = topScores.map(score => {
            return '<li class="topscore"><span style="font-style: bold; font-size: 2rem;">' + `${score.user}   ${score.score}` + '</span></li>';
        })
        .join('');
}