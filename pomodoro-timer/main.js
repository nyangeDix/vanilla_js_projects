import { renderPomodoro, renderShortBreak, renderLongBreak } from './functions.js';
import { pomoDoroClasses, shortBreakClasses, longBreakClasses } from './orgClasses.js';

const body = document.getElementById('body');
const pomodoro = document.getElementById('pomodoro');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
const timerHandler = document.getElementById('timer-handler');
const launchModal = document.getElementById('launch-modal');
const modal = document.getElementById('modal-settings-container');
const date = new Date();

window.onload = () => {
    timerHandler.innerHTML = renderPomodoro();
    pomodoro.classList.add('active');
    console.log(timerHandler);

    // const timerPomo = document.getElementById('pomodoro-timer');
    // timerPomo.innerHTML = "90:00";

    runTimer('pomodoro-timer', '01:00');

};



pomodoro.addEventListener('click', (e) => {
    e.preventDefault();
    timerHandler.innerHTML = renderPomodoro();
    pomodoro.classList.add('active');
    pomoDoroClasses(shortBreak, longBreak, body);
    const timerPomo = document.getElementById('pomodoro-timer');
    timerPomo.innerHTML = "90:00";
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

const timer = (endtimer) => {
    const countdown = Date.parse(endtimer) - Date.parse(new Date());
    const seconds = Math.floor((countdown / 1000) % 60);
    const minutes = Math.floor((countdown / 1000 / 60) % 60);
    return { countdown, seconds, minutes };
}

const runTimer = (id, endtimer) => {
    const timerPomo = document.getElementById(id);
    const intervals = setInterval(() => {
        const r_timer = timer(endtimer);
        timerPomo.innerHTML = `${r_timer.minutes} : ${r_timer.seconds}`;
        console.log(r_timer.minutes + r_timer.seconds);
        if (r_timer.total <= 0) {
            alert('Time to take a break');
        }
    }, 1000)
}
