let start = document.querySelector('#start');
let paragraph  = document.querySelector('#paragraph');

let timerId
let i = 0

start.addEventListener('click', function func() {
	timerId = setInterval(function() {
		i += 1
		paragraph.textContent = i
		// if (i == 0) {
		// 	clearInterval(timerId);
		// }
	}, 1000);
	this.removeEventListener('click', func)
});