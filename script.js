function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourAngle = (hours * 30) + (0.5 * minutes); // Each hour is 30 degrees, plus half a degree for each minute
    const minuteAngle = (minutes * 6) + (0.1 * seconds); // Each minute is 6 degrees, plus 0.1 degrees for each second
    const secondAngle = seconds * 6; // Each second is 6 degrees
  
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('min');
    const secondHand = document.getElementById('sec');
  
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
  }

  const clockalarm = document.getElementById('alarm-clock');

  function setAlarm() {
    const alarmTime = document.getElementById("alarm-time").value;
    const [alarmHour, alarmMinute] = alarmTime.split(":");
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
  
    if (currentHour == alarmHour && currentMinute == alarmMinute) {
      playAlarm();
      analog-clock.classList.add()
    } 
    else {
      setTimeout(() => {
        setAlarm();
      }, 1000);
    }
  }
  
function playAlarm() {
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.play();
  clockalarm.classList.add('glow');
}
  
function stopAlarm() {
  const alarmSound = document.getElementById("alarm-sound");
  clockalarm.classList.remove('glow');
  alarmSound.pause();
  alarmSound.currentTime = 0;
}
  
setInterval(updateClock, 1000);
  