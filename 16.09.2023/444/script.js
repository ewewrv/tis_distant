let i = 10;

let timerId = setInterval(function() {
	console.log(--i);
	
	if (i == 0) {
		clearInterval(timerId);
	}
}, 1000);