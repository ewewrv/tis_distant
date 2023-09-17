let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let paragraph = document.querySelector('#paragraph')

start.addEventListener('click', function infinity() {
	timerId = setInterval(function() {
		paragraph.textContent = Number(paragraph.textContent) + 1
	}, 1000)
})

stop.addEventListener('click', function () {
	clearInterval(timerId)
})