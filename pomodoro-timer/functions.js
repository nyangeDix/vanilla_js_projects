const renderPomodoro = () => {
    return `<div class="pomodoro">
                    <h1 id="pomodoro-timer">90</h1>
                    <a href="" class="btn-start">Start</a>
                </div>`;
}

const renderShortBreak = () => {
    return `<div class="pomodoro">
                    <h1 id="short-break-timer">10:00</h1>
                    <a href="" class="btn-start">Start</a>
                </div>`;
}

const renderLongBreak = () => {
    return `<div class="pomodoro">
                    <h1 id="long-break-timer">24:00</h1>
                    <a href="" class="btn-start">Start</a>
                </div>`;
}

export { renderPomodoro, renderShortBreak, renderLongBreak };