const quotes = [
    "Typing fast is a superpower.",
    "Practice makes a person perfect.",
    "Coding is fun when you understand it.",
    "Success comes to those who work hard."
];

let startTime;
let timerRunning = false;

document.getElementById("startBtn").onclick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = randomQuote;

    document.getElementById("input").value = "";
    document.getElementById("time").innerText = "0";
    document.getElementById("wpm").innerText = "0";

    timerRunning = true;
    startTime = new Date();

    setInterval(() => {
        if (timerRunning) {
            const seconds = Math.floor((new Date() - startTime) / 1000);
            document.getElementById("time").innerText = seconds;
        }
    }, 1000);
};

document.getElementById("input").addEventListener("input", () => {
    const quote = document.getElementById("quote").innerText;
    const typed = document.getElementById("input").value;

    if (typed === quote) {
        timerRunning = false;

        const totalTime = Math.floor((new Date() - startTime) / 1000);
        const words = quote.split(" ").length;

        const wpm = Math.round((words / totalTime) * 60);
        document.getElementById("wpm").innerText = wpm;
    }
});
