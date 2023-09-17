let paragraph = document.querySelector('#paragraph')
let style = window.getComputedStyle(paragraph)

paragraph.addEventListener('click', function func(){
	let timerId = setInterval(function(){
		let color = getComputedStyle(paragraph).color
		if (color === "rgb(255, 0, 0)") {
			paragraph.style.color = "rgb(0, 255, 0)";
			paragraph.style.fontSize = '50px'
		}
		else {
			paragraph.style.color = "rgb(255, 0, 0)";
			paragraph.style.fontSize = '30px'
		}
	},800)
	this.removeEventListener('click', func)
})

// stop.addEventListener('click', function () {
// 	clearInterval(timerId)
// })