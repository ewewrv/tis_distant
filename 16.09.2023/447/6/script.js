let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;
let i = false

start.addEventListener('click', minecraft());

function minecraft () {
	start.addEventListener('click', function func() {
		i = false
		timerId = setInterval(function() {
			let date = new Date;
			console.log(date.getMinutes() + ' ' + 
				date.getSeconds()); 
		}, 1000);
		this.removeEventListener('click', func);
	});
}



stop.addEventListener('click', function() {
	clearInterval(timerId);
	if (!i) {
		minecraft()
		i = true
	}

});