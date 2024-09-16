const translations = {
    en: {
        title: "Tarneeb Score Tracker",
        team1: "Team 1",
        team2: "Team 2",
        score: "Score",
        team1Points: "Team 1 Points:",
        team2Points: "Team 2 Points:",
        undo: "Undo",
        restart: "Restart Game",
        confirm: "Confirm Score Update",
        addPoints: "Add Points",
        subtractPoints: "Subtract Points",
        cancel: "Cancel",
        wins: "Wins!"
    },
    sv: {
        title: "Tarneeb Poängspårare",
        team1: "Lag 1",
        team2: "Lag 2",
        score: "Poäng",
        team1Points: "Lag 1 Poäng:",
        team2Points: "Lag 2 Poäng:",
        undo: "Ångra",
        restart: "Starta Om",
        confirm: "Bekräfta Poänguppdatering",
        addPoints: "Lägg Till Poäng",
        subtractPoints: "Dra Av Poäng",
        cancel: "Avbryt",
        wins: "Vinner!"
    },
    ar: {
        title: "متتبع نقاط طرنيب",
        team1: "الفريق 1",
        team2: "الفريق 2",
        score: "النقاط",
        team1Points: "نقاط الفريق 1:",
        team2Points: "نقاط الفريق 2:",
        undo: "تراجع",
        restart: "إعادة اللعب",
        confirm: "تأكيد تحديث النقاط",
        addPoints: "إضافة نقاط",
        subtractPoints: "طرح نقاط",
        cancel: "إلغاء",
        wins: "فاز!"
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById('language-selector').value;
    localStorage.setItem('language', selectedLanguage);  // Save the selected language in localStorage
    applyLanguage(selectedLanguage);
}

function applyLanguage(language) {
    const translation = translations[language];

    // Update text content for each element
    document.querySelector('h1').textContent = translation.title;
    document.getElementById('team1-name').textContent = translation.team1;
    document.getElementById('team2-name').textContent = translation.team2;
    document.querySelector('#team1-controls label').textContent = translation.team1Points;
    document.querySelector('#team2-controls label').textContent = translation.team2Points;
    document.querySelector('.btn-primary').textContent = translation.undo;
    document.getElementById('restart-button').textContent = translation.restart;
    document.querySelector('#confirm-score-text').textContent = translation.confirm;
    document.querySelector('.btn-success').textContent = translation.addPoints;
    document.querySelector('.btn-danger').textContent = translation.subtractPoints;
    document.querySelector('.btn-secondary').textContent = translation.cancel;
}

// On page load, set the language to the previously selected language or default to 'en'
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    document.getElementById('language-selector').value = savedLanguage; // Set the selector to the saved language
    applyLanguage(savedLanguage);  // Apply the saved language
});
