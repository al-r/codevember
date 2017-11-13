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
var rocks;
rocks = new THREE.Group();
scene.add(rocks);

var material = new THREE.MeshLambertMaterial({
  color: 0x745848
});

//Rock
// var geometry = new THREE.BoxGeometry(20, 150, 20);
var geometry = new THREE.DodecahedronGeometry(50,0);
var rock = new THREE.Mesh(geometry, material);
rock.position.set(50,-50,65);
rocks.add(rock);

//Ground
// var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
// var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
// var plane = new THREE.Mesh( geometry, material );
// scene.add( plane );


rocks.rotation.y = 45*(Math.PI/180);
// rocks.position.set(0,50,0);





//camera (sky like the sun and //reflective greenhouse effect)
// var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
// var skyboxMaterial = new THREE.MeshBasicMaterial({
//   color: 0xFFFFFF,
//   side: THREE.BackSide
// });
// var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

//Add the skybox (lights)
// scene.add(skybox);

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