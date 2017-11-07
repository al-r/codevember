var windowH = window.innerHeight,
	windowW = window.innerWidth;

function displayClouds(){
	var nbClouds = 10,
		spaceW = windowW / nbClouds,
		spaceH = windowH / 2 / nbClouds;

	for(var index=0; index < nbClouds; index++){
		var cloud = document.createElement("div");
		cloud.className += 'cloud';
		var where = document.getElementById("sky");
		where.appendChild(cloud);

		var posLeft = Math.round(Math.random() * (spaceW * (index+1))),
			posTop = Math.round(Math.random() * (spaceH * (index+1)));
		cloud.style.left += posLeft + 'px';
		cloud.style.top += posTop + 'px';
	};
};

window.addEventListener('load', function(){

});