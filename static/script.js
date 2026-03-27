let time = 1500; // default 25 minutes
let interval = null;

function startTimer() {
    // stop previous timer if running
    if (interval !== null) {
        clearInterval(interval);
    }

    let userInput = document.getElementById("customTime").value;

    // set custom time if entered
    if (userInput && userInput > 0) {
        time = parseInt(userInput) * 60;
    }

    updateDisplay();

    interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval);
            interval = null;
            alert("Time is up");
        } else {
            time--;
            updateDisplay();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    interval = null;

    time = 1500; // reset to 25 min
    document.getElementById("customTime").value = "";

    updateDisplay();
}

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // format like 05:09
    let formattedTime =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("timer").innerText = formattedTime;
}