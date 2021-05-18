const pomoDoroClasses = (shortBreak, longBreak, body) => {
    shortBreak.classList.remove('active');
    longBreak.classList.remove('active');
    body.classList.remove('shortbreakbody');
    body.classList.remove('longbreakbody');
}

const shortBreakClasses = (shortBreak, pomodoro, longBreak) => {
    shortBreak.classList.add('active');
    pomodoro.classList.remove('active');
    longBreak.classList.remove('active');
    body.classList.add('shortbreakbody');
    body.classList.remove('longbreakbody');
}

const longBreakClasses = (shortBreak, pomodoro, longBreak, body) => {
    shortBreak.classList.remove('active');
    pomodoro.classList.remove('active');
    longBreak.classList.add('active');
    body.classList.add('longbreakbody');
    body.classList.remove('shortbreakbody');
}

export { pomoDoroClasses, shortBreakClasses, longBreakClasses }