/** 
 * Author: Wendy Bovill
 * Project Milestone 2 CI/WAES
 * 
 * This file contains the javascript to clear the local storage of ALL PLAYER SCORES.
 */

/* Get username, the users final score,  save the score, and retrieve the latest scores */
const username = document.getElementById('username');
const clearScore = document.getElementById('clearScore');
const finalScore = document.getElementById('finalScore');
const clearItems = localStorage.getItem('topScores');


/* Clear Scores Function called once confirmation is made */
clearScores = (e) => {
    window.localStorage.clear(clearItems);
    alert("All player scores have been removed");
}

// Confirm Clear Scores by alert box or alert scores have not been cleared
clearScoresConfirm = (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete ALL player scores?")) {
        clearScores();
    } else {
        alert("The scores have not been cleared.");
    }
}