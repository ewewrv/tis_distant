let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
	let self = this
	timerId = setInterval(function() {
		self.value = Number(elem.value) + 1;

	}, 1000);
	this.removeEventListener('click', func)
});