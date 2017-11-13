var width = window.innerWidth,
	height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(width, height);
renderer.setClearColor(0x47B2B2);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene;

//Light
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
scene.add(pointLight);




/* ***** ROCKS ***** */
var material = new THREE.MeshLambertMaterial({
  color: 0x745848
});

var rocks;
for (i=1;i<10;i++){
	rocks = new THREE.Group();
	scene.add(rocks);
	rocks.name = "rocks" + i;
	rocks.position.set(Math.round(Math.random()*100*i),Math.round(Math.random()*100*i),Math.round(Math.random()*100*i));
	console.log("rocks", rocks);

	//Rock
	for (index=1;index<10;index++){
		var geometry = new THREE.DodecahedronGeometry(50,0);
		var rock = new THREE.Mesh(geometry, material);
		rock.name = "rock" + i;
		rock.position.set(Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100));
		rocks.add(rock);
	}
}

/* ***** GROUND ***** */
var geometry = new THREE.PlaneGeometry( 1000, 500, 32 );
var material = new THREE.MeshLambertMaterial( {color: 0x808080, side: THREE.DoubleSide} );
var ground = new THREE.Mesh( geometry, material );
ground.rotation.x = 90*(Math.PI/180);
ground.position.set(0,-100,0);
scene.add( ground );

//When rocks touch plane, bounce, break in smaller pieces (between 2 to 5), and roll


rocks.rotation.y = 45*(Math.PI/180);





//Camera
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
camera.position.y = 160;
camera.position.z = 400;
scene.add(camera);
camera.lookAt(rocks.position);

var orbit = new THREE.OrbitControls( camera, renderer.domElement );
orbit.enableZoom = false;
// //Rotation factor
var clock = new THREE.Clock;

function render() {
  renderer.render(scene, camera);
  // rocks.rotation.y -= clock.getDelta();
  requestAnimationFrame(render);
}

render();
