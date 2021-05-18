const renderPomodoro = () => {
    return `<div class="pomodoro">
                    <h1>60:00</h1>
                    <a href="" class="btn-start">Start</a>
                </div>`;
}

const renderShortBreak = () => {
    return `<div class="pomodoro">
                    <h1>10:00</h1>
                    <a href="" class="btn-start">Start</a>
                </div>`;
}

const renderLongBreak = () => {
    return `<div class="pomodoro">
                    <h1>24:00</h1>
                    <a href="" class="btn-start">Start</a>
                </div>`;
}

export { renderPomodoro, renderShortBreak, renderLongBreak };