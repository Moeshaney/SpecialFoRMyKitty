function updateTimer() {
    const now = new Date();
    let nextFeb14 = new Date(now.getFullYear(), 1, 14, 19, 0, 0);

    if (now.getTime() > nextFeb14.getTime()) {
        nextFeb14 = new Date(now.getFullYear() + 1, 1, 14, 19, 0, 0);
    }

    const diff = nextFeb14 - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);
