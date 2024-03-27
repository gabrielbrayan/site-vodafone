document.addEventListener('DOMContentLoaded', function () {
  const daysElement = document.getElementById('days-number');
  const hoursElement = document.getElementById('hours-number');
  const minutesElement = document.getElementById('minutes-number');
  const secondsElement = document.getElementById('seconds-number');

  function updateCountdown() {
    const targetDate = new Date('2024-04-01T23:59:59').getTime();
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysElement.textContent = days;
      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
    } else {
      clearInterval(intervalId);
      daysElement.textContent = '0';
      hoursElement.textContent = '0';
      minutesElement.textContent = '0';
      secondsElement.textContent = '0';
    }
  }

  updateCountdown(); // Initial call to avoid delay
  const intervalId = setInterval(updateCountdown, 1000);
});
