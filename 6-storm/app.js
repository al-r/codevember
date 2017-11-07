var windowH = window.innerHeight,
	windowW = window.innerWidth;

function displayClouds(classname){
	var nbClouds = 20,
		spaceW = windowW / nbClouds,
		spaceH = windowH / nbClouds;

	for(var index=0; index < nbClouds; index++){
		var cloud = document.createElement("div");
		cloud.className += classname;
		var where = document.getElementById("sky");
		where.appendChild(cloud);

		var	posTop = Math.round(Math.random() * (spaceH * (index+1)));
		cloud.style.top += posTop + 'px';
		cloud.style.animationDuration = 5 + Math.round(Math.random() * 20) + "s";
		cloud.style.animationDelay = index + "s";
	};
};

window.addEventListener('load', function(){
	displayClouds("cloud cloud-left");
	displayClouds("cloud cloud-right");
});
