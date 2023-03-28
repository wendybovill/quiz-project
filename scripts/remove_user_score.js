/** 
 * Author: Wendy Bovill
 * Project Milestone 2 CI/WAES
 * 
 * This file contains the javascript to clear the local storage of ALL PLAYER SCORES.
 */

/* Get username, the users final score,  save the score, and retrieve the latest scores */
const clearScore = document.getElementById('clearScore');
const finalScore = document.getElementById('finalScore');
let scoreList = JSON.parse(localStorage.getItem('topScores'));
let username = document.getElementById('username');
const removeUser = document.getElementById('removeUser');


/* Clear Scores Function called once confirmation is made */
removeUserScores = (e) => {
    /* Search for username in the array retrieved from local storage if
    username is found then user is saved  */

    userSaved = scoreList.find(obj => obj.user === username.value);
    /* If user is found in the retrieved array from localStorage */

    if (userSaved) {

        /* Filter array excluding the user and presenting the results as a new array */
        newScoreList = scoreList.filter(obj => obj.user !== username.value);
        /* write over the topScores array, stored in the localStorage as a string */
        window.localStorage.setItem("topScores", JSON.stringify(newScoreList));
        alert("All your scores have been removed.");

    } else {

        /* If user is not found in the retrieved array from localStorage */
        alert("You have not saved any scores.");
    }

    console.log(scoreList);
    window.location.assign('topscores.html'); //change to Topscores page after removing scores
}


// Confirm Remove User and Scores by alert box or alert scores have not been cleared
removeUserConfirm = (e) => {
    e.preventDefault();
    /* Check if username field is empty in form */
    if (!username.value) {
        alert("Please enter your username");
    } else {
        /* If username is completed find the username in localStorage, allocate variable userSaved */
        userSaved = scoreList.find(obj => obj.user === username.value);
        if (userSaved) {
            if (confirm("Are you sure you want to delete your scores?")) {
                removeUserScores();
            } else {
                alert("Your scores have not been removed.");
            }
        } else {
            /* If user is not found in the retrieved array from localStorage */
            alert("You have not saved any scores.");

        }
    }
}


/* Clear Scores Function called once confirmation is made */
clearScores = (e) => {
    window.localStorage.clear(scoreList);
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