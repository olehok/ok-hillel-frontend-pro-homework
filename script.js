// Реалізувати таймер відліку:
// Початок таймера визначати зі змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    if (timerId !== null) return;

    time.textContent = formatTime(initialTime);
    initialTimeInput.disabled = true;

    timerId = setInterval(() => {
        initialTime--;
        time.textContent = formatTime(initialTime);

        if (initialTime <= 0) {
            clearInterval(timerId);
            timerId = null;
            initialTimeInput.disabled = false;
        }
    }, 1000);
}

function pauseTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        initialTimeInput.disabled = false;
    }
}

function toggleTimer() {
    if (timerId === null) {
        startTimer();
    } else {
        pauseTimer();
    }
}

let time = document.querySelector('#time');
let initialTimeInput = document.querySelector('#inputTime');

let initialTime = 85; // довільний початковий час
let timerId = null;

initialTimeInput.addEventListener('change', (e) => {
    const setValue = Number(e.target.value);
    initialTime = (!isNaN(setValue) && setValue > 0) ? setValue : 0;
    time.textContent = formatTime(initialTime);
});

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#pause').addEventListener('click', pauseTimer);
document.querySelector('#reset').addEventListener('click', () => {
    pauseTimer();
    initialTime = 0;
    time.textContent = formatTime(initialTime);
    initialTimeInput.value = '';
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        toggleTimer();
    }
})