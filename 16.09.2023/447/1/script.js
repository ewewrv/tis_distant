let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId
let i = 100

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		console.log(--i)
		if (i == 0) {
			clearInterval(timerId);
		}
	}, 1000);
});
// Останавливаем таймер:
stop.addEventListener('click', function() {
	clearInterval(timerId);
});