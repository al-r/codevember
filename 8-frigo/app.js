function displayFlakes(){
	var nbFlakes = 20,
		spaceW = 5;

	for(var index=0; index < nbFlakes; index++){
		var flake = document.createElement("div");
		flake.className += "flake";
		var where = document.getElementById("shelves");
		where.appendChild(flake);

		var	posLeft = spaceW * (index+1);
		flake.style.left += posLeft + 'px';
		flake.style.animationDuration = 1 + Math.round(Math.random() * 20) + "s";
		flake.style.animationDelay = 1 + Math.round(Math.random() * 10) + "s";
	};
};

window.addEventListener('load', function(){
	displayFlakes();
});
