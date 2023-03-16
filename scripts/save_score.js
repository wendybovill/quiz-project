/* Get username, the users final score,  save the score, and retrieve the latest scores */
const username = document.getElementById('username');
const saveScore = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const latestScore = localStorage.getItem('latestScore');
/* Retrieve the top scores from local storage */
const topScores = JSON.parse(localStorage.getItem('topScores')) || [];
/* How many scores to display? */
const MAX_TOP_SCORES = 6;

/* To display the latest score for the user */
finalScore.innerText = latestScore;

/* If no username is entered leave saveScore button disabled */
username.addEventListener('keyup', () => {
        saveScore.disabled = !username.value;
    })
    /* When the user enters their username, allow save button to be active - removed disabled */
saveTopScore = (e) => {
    e.preventDefault();
    const score = {
        score: latestScore,
        user: username.value
    };

    topScores.push(score);
    topScores.sort((a, z) => z.score - a.score); //sort Z to A with the newest Z on top and the older A on bottom
    topScores.splice(6);

    /* Save topscores to local storage in a JSON string */
    localStorage.setItem('topScores', JSON.stringify(topScores));
    window.location.assign('/');

};