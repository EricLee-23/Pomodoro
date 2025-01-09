const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

let totalMins = 25
let totalSecs = 60 * totalMins
let interval = null
let cdStart = true // prevents multiple countDowns

minutes.innerHTML = formateNumber(totalMins)
seconds.innerHTML = formateNumber(0)

function switchTime(mins) {
    totalMins = mins
    totalSecs = 60 * totalMins
    minutes.innerHTML = formateNumber(totalMins)
    seconds.innerHTML = formateNumber(0)
    pause()
}
function countDown() {
    if (cdStart) { // prevents multiple intervals
        cdStart = false
        // Calculate every second
        interval = setInterval(() => {
            totalSecs -= 1;
            minutes.innerHTML = formateNumber(Math.floor(totalSecs / 60))
            seconds.innerHTML = formateNumber(totalSecs % 60)
        }, 1000)
    }
}
function formateNumber(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number
}
function pause() {
    cdStart = true
    clearInterval(interval);
}
