
let input = document.querySelector('#input')
let button = document.querySelector('#button')
let paragraph = document.querySelector('#paragraph')

button.addEventListener('click', function write() {
	let paragraphValue = input.value
	timerId = setInterval(function() {
		paragraphValue -= 1
		paragraph.textContent = 'Отсчёт начался: ' + paragraphValue
		if (paragraphValue == 0) {
			clearInterval(timerId)
			paragraph.textContent = ' Отсчёт закончен! ' + paragraphValue 
		}
	}, 1000);
	
})