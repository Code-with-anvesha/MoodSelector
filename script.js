const buttons = document.querySelectorAll(".mood-btn");
const moodText = document.getElementById("mood-text");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.getAttribute("data-mood");
        moodText.textContent = 'You are feeling ${mood}!';
        
        // Change background color based on mood
        if (mood === "Happy") document.body.style.backgroundColor = "#ffeb3b";
        else if (mood === "Sad") document.body.style.backgroundColor = "#90caf9";
        else if (mood === "Angry") document.body.style.backgroundColor = "#ef5350";
        else if (mood === "Excited") document.body.style.backgroundColor = "#ff9800";
        else if (mood === "Sleepy") document.body.style.backgroundColor = "#9e9e9e";
    });
});