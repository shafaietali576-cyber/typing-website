let startTime;
let originalText = "Welcome to typing speed test!";

function startTest() {
    document.getElementById("text").innerText = originalText;
    document.getElementById("input").value = "";
    startTime = new Date().getTime();

    setTimeout(() => {
        finishTest();
    }, 15000); // 15 seconds test
}

function finishTest() {
    let input = document.getElementById("input").value;
    let endTime = new Date().getTime();
    let timeInMinutes = (endTime - startTime) / 60000;

    let wordCount = input.trim().split(" ").length;
    let wpm = Math.round(wordCount / timeInMinutes);

    document.getElementById("result").innerText = "Your Speed: " + wpm + " WPM";
}
