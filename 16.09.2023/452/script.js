let elem = document.querySelector('#elem');
let i = 0;

function timer() {
	setTimeout(function() {
		++i
		elem.textContent = i;
		
		timer(); // вызовем сами себя
	}, 1000);
}
timer();