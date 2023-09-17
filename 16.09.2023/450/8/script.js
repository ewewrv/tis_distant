let clock = document.querySelector('#clock')

let time = setInterval(function time () {
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();

	if (hours < 10) {
		hours = "0" + hours;
	  }
	  
	  if (minutes < 10) {
		minutes = "0" + minutes;
	  }
	  
	  if (seconds < 10) {
		seconds = "0" + seconds;
	  }

	let timeString = hours + ":" + minutes + ":" + seconds;
	
	clock.textContent = timeString

},1000)

