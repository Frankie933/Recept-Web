const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    const selectedText = window.getSelection().toString().trim();
    
    if (selectedText) {
        const utterance = new SpeechSynthesisUtterance(selectedText);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Inget text markerad. Markera ett stycke och försök igen.');
    }
});





