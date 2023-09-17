let elem = document.querySelector('#elem');

timerId = setInterval(function() {
	elem.value = Number(elem.value) - 1;
	if (elem.value == 0) {
		clearInterval(timerId)
	}
}, 1000);