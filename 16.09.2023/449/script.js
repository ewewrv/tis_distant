let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let self = this;
	
	setInterval(function() {
		console.log(self.value);
	}, 1000);
});