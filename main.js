const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function updateTime() {
    const vaqt = new Date();

    hours.textContent = String(vaqt.getHours()).padStart(2, "0");
    minutes.textContent = String(vaqt.getMinutes()).padStart(2, "0");
    seconds.textContent = String(vaqt.getSeconds()).padStart(2, "0");
}
setInterval(updateTime, 1000);
updateTime();