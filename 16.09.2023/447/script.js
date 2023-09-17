let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId

start.addEventListener('click', function() {
	timerId = setInterval(function() {
		console.log('!')
	}, 1000);
});
// Останавливаем таймер:
stop.addEventListener('click', function() {
	clearInterval(timerId);
});