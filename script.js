function updateTimer() {
    const now = new Date();
    const feb14 = new Date(now.getFullYear(), 1, 14, 19, 0, 0); // 14 февраля в 19:00 текущего года
    let diff = feb14 - now;

    if (diff < 0) {
        diff = 0; // Если текущая дата после 14 февраля, устанавливаем разницу в 0
    }

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
