

// //your code here
// function setClock() {
//     const hourHand = document.querySelector('.hour-hand');
//     const minuteHand = document.querySelector('.min-hand');
//     const secondHand = document.querySelector('.second-hand');
  
//     const currentDate = new Date();
//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();
//     document.getElementById("time").innerHTML = `${hours%12}:${minutes}:${seconds}`;

//     const hourRotation = ((hours %12) * 30) + (minutes / 2)+90;
//     const minuteRotation = (minutes * 6) + (seconds / 10)+90;
//     const secondRotation = seconds * 6+90;
  
//     hourHand.style.transform = `rotate(${hourRotation}deg)`;
//     minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
//     secondHand.style.transform = `rotate(${secondRotation}deg)`;
//   }
  
//   setInterval(setClock, 1000); // Update the clock every second



const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateTime() {
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const hr = now.getHours();

	const secDeg = (sec*6);
	const minDeg = (min*6 + sec/10);
	const hrDeg = (30*hr + min/2)%360;

	secHand.style.transform = `rotate(${secDeg+90}deg)`;
	minHand.style.transform = `rotate(${minDeg+90}deg)`;
	hourHand.style.transform = `rotate(${hrDeg+90}deg)`;
 

	// hourHand.style.transform = `rotate(${hrRot+90}deg)`;
	// minHand.style.transform = `rotate(${minRot+90}deg)`;
	// secHand.style.transform = `rotate(${secRot+90}deg)`;
}

setInterval(updateTime, 500);