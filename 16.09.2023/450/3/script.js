let start = document.querySelector('#start');

let timerId
start.addEventListener('click', function func() {
	timerId = setInterval(function() {
		start.value **= 2
	}, 1000);
	this.removeEventListener('click', func)
});