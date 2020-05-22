// this is an IIFE (immediate invoked function expression)
// also called the module pattern
//
(() => {
	console.log('fired!');

	let theBadge = document.querySelector(".badge");

	function logID() {
		console.log(this.id);
	}

	theBadge.addEventListener("click", logID);

})();