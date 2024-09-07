function checkForWinner() {
    if (team1Score >= MAX_SCORE) {
        alert("🎉 Congratulations Team 1, You Rock! 🎉");
        disableInput();
    } else if (team2Score >= MAX_SCORE) {
        alert("🎉 Awesome Job Team 2, Victory is Yours! 🎉");
        disableInput();
    }
    
}

