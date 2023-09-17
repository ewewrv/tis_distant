let start = document.querySelector('#start');
let paragraph  = document.querySelector('#paragraph');

let timerId
let value = parseInt(paragraph.textContent)
start.addEventListener('click', function func() {
	timerId = setInterval(function() {
		--value
		paragraph.textContent = value
		if (value == 0) {
			clearInterval(timerId);
		}
	}, 1000);
	this.removeEventListener('click', func)
});