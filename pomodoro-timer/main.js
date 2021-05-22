import { renderPomodoro, renderShortBreak, renderLongBreak, audioplay } from './functions.js';
import { pomoDoroClasses, shortBreakClasses, longBreakClasses } from './orgClasses.js';

const body = document.getElementById('body');
const pomodoro = document.getElementById('pomodoro');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
const timerHandler = document.getElementById('timer-handler');
const launchModal = document.getElementById('launch-modal');
const modal = document.getElementById('modal-settings-container');
const ringMeElements = document.getElementById('ring');
const audioUrl = './ring-me.mp3';

// sound - ring after session
const ring = () => {
    return ringMeElements.innerHTML = audioplay(audioUrl);
}

window.onload = () => {

    localStorage.setItem("pomodoro", 25);
    localStorage.setItem("shortbreak", 10);
    localStorage.setItem("longbreak", 15);

    timerHandler.innerHTML = renderPomodoro();
    pomodoro.classList.add('active');

    const timerPomo = document.getElementById('pomodoro-timer');
    const btnStart = document.getElementById('btn-start');
    timerPomo.innerHTML = `Welcome`;

    btnStart.addEventListener('click', (e) => {
        e.preventDefault();
        var fiveMinutes = 60 * localStorage.getItem('pomodoro');
        initTimer(fiveMinutes, timerPomo);
    })

};

pomodoro.addEventListener('click', (e) => {
    e.preventDefault();
    timerHandler.innerHTML = renderPomodoro();
    pomodoro.classList.add('active');
    pomoDoroClasses(shortBreak, longBreak, body);

    const timerPomo = document.getElementById('pomodoro-timer');
    const btnStart = document.getElementById('btn-start');
    timerPomo.innerHTML = `${localStorage.getItem('pomodoro')}:00`;

    btnStart.addEventListener('click', (e) => {
        e.preventDefault();
        var fiveMinutes = 60 * localStorage.getItem('pomodoro');
        initTimer(fiveMinutes, timerPomo);
    })

});

shortBreak.addEventListener('click', (e) => {
    e.preventDefault();
    timerHandler.innerHTML = renderShortBreak();
    shortBreakClasses(shortBreak, pomodoro, longBreak);

    const timerShort = document.getElementById('short-break-timer');
    const btnStart = document.getElementById('btn-start');
    timerShort.innerHTML = `${localStorage.getItem('shortbreak')}:00`;

    btnStart.addEventListener('click', (e) => {
        e.preventDefault();
        var fiveMinutes = 60 * localStorage.getItem('shortbreak');
        initTimer(fiveMinutes, timerShort);
    })

});

longBreak.addEventListener('click', (e) => {
    e.preventDefault();
    timerHandler.innerHTML = renderLongBreak();
    longBreakClasses(shortBreak, pomodoro, longBreak, body);

    const timerLong = document.getElementById('long-break-timer');
    const btnStart = document.getElementById('btn-start');
    timerLong.innerHTML = `${localStorage.getItem('longbreak')}:00`;

    btnStart.addEventListener('click', (e) => {
        e.preventDefault();
        var fiveMinutes = 60 * localStorage.getItem('longbreak');
        initTimer(fiveMinutes, timerLong);
    })

});

const initTimer = (duration, el_id) => {
    var timer = duration, minutes, seconds;
    var timing = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        el_id.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timing);
            ring();
        }

    }, 1000)
};

// modal inputs
launchModal.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('...modal');
    modal.classList.add('modal-view');

    var sendBtn = document.getElementById('setButton');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();

        var setPomoTimer = document.getElementById('setPomoTimer').value;
        var setShortBreak = document.getElementById('setShortBreak').value;
        var setLongBreak = document.getElementById('setLongBreak').value;

        if (setPomoTimer != '' && setLongBreak != '' && setShortBreak != '') {

            localStorage.clear();
            localStorage.setItem("pomodoro", setPomoTimer);
            localStorage.setItem("shortbreak", setShortBreak);
            localStorage.setItem("longbreak", setLongBreak);

            modal.classList.remove('modal-view');

        } else {
            localStorage.getItem("pomodoro");
            localStorage.getItem("shortbreak");
            localStorage.getItem("longbreak");
            modal.classList.remove('modal-view');
        }

    });

});


