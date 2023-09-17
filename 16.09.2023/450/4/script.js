let start = document.querySelector('#start');
let paragraph = document.querySelector('#paragraph')
let timerId


start.addEventListener('blur', function func() {
	let paragraphValue = start.value
	timerId = setInterval(function() {
		paragraphValue -= 1
		paragraph.textContent = 'Отсчёт начался: ' + paragraphValue
		if (paragraphValue == 0) {
			clearInterval(timerId)
			paragraph.textContent = ' Отсчёт закончен! ' + paragraphValue 
		}
	}, 1000);
});
start.addEventListener('click', function stop() {
	clearInterval(timerId)
})