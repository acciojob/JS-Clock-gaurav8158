

//your code here
function setClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    document.getElementById("time").innerHTML = `${hours%12}:${minutes}:${seconds}`;

    const hourRotation = ((hours %12) * 30) + (minutes / 2)+90;
    const minuteRotation = (minutes * 6) + (seconds / 10)+90;
    const secondRotation = seconds * 6+90;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(setClock, 1000); // Update the clock every second