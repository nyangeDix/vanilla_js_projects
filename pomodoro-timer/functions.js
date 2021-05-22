const renderPomodoro = () => {
    return `<div class="pomodoro">
                    <h1 id="pomodoro-timer"></h1>
                    <a href="" class="btn-start" id="btn-start">Start</a>
                </div>`;
}

const renderShortBreak = () => {
    return `<div class="pomodoro">
                    <h1 id="short-break-timer">10:00</h1>
                    <a href="" class="btn-start" id="btn-start">Start</a>
                </div>`;
}

const renderLongBreak = () => {
    return `<div class="pomodoro">
                    <h1 id="long-break-timer">24:00</h1>
                    <a href="" class="btn-start" id="btn-start">Start</a>
                </div>`;
}

const audioplay = (audio) => {
    return `<audio id="MyAudioElement" autoplay>
            <source src=${audio} type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>`
}

export { renderPomodoro, renderShortBreak, renderLongBreak, audioplay };