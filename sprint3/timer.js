const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

let seconds = 0;
let minutes = 0;
let timerId;

function handleButtonClick(event) {
    const button = event.target.name;
    if (button === "start") {
        timerId = setInterval(() => {
            seconds++;
            if (seconds > 59) {
                seconds = 0;
                minutes++;
            }
            currentTime.innerText = `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
        }, 1000);
    }
    if (button === "stop") {
        clearInterval(timerId);
    }
    if (button === "reset") {
        clearInterval(timerId);
        seconds = minutes = 0;
        currentTime.innerText = `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
    }
}

buttonParent.addEventListener("click", handleButtonClick);
