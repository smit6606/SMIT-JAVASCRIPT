let interval;

document.getElementById('start').addEventListener('click', () => {
    interval = setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        document.getElementById('Timing').innerHTML = (`Current time: ${time}`)
    }, 1000)
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval)
    document.getElementById('Timing').innerHTML = (`stop time ${new date().toLocaleTimeString}`)
});