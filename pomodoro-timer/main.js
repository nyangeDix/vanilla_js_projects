import { renderPomodoro, renderShortBreak, renderLongBreak } from './functions.js';
import { pomoDoroClasses, shortBreakClasses, longBreakClasses } from './orgClasses.js';

const body = document.getElementById('body');
const pomodoro = document.getElementById('pomodoro');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
const timerHandler = document.getElementById('timer-handler');
const launchModal = document.getElementById('launch-modal');
const modal = document.getElementById('modal-settings-container');
const pomoTimer = document.getElementById('pomodoro-timer');
const date = new Date();

window.onload = () => {
    timerHandler.innerHTML = renderPomodoro();
    pomodoro.classList.add('active');
    console.log(timerHandler);
    console.log(pomoTimer);
    pomoTimer.textContent = 'Helo';
};

pomodoro.addEventListener('click', (e) => {
    e.preventDefault();
    timerHandler.innerHTML = renderPomodoro();
    pomodoro.classList.add('active');
    pomoDoroClasses(shortBreak, longBreak, body);
    pomoTimer.textContent = 'Helo';
    console.log(timerHandler);
});

shortBreak.addEventListener('click', (e) => {
    e.preventDefault();
    timerHandler.innerHTML = renderShortBreak();
    shortBreakClasses(shortBreak, pomodoro, longBreak);
});

longBreak.addEventListener('click', (e) => {
    e.preventDefault();
    timerHandler.innerHTML = renderLongBreak();
    longBreakClasses(shortBreak, pomodoro, longBreak, body);
});

launchModal.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('...modal');
    modal.classList.add('modal-view');
});


// console.log(p);

// setInterval(() => {
//     if (pomodoroTimer) {
//         pomodoroTimer.innerHTML = date.getMinutes;
//         console.log('Timer running');
//     } else {
//         console.log('Element not found');
//     }
// }, 1000);
