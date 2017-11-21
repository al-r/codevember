var width = window.innerWidth,
	height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene;
scene.background = new THREE.Color( 0xcce0ff );
scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );

//Light
var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
light.position.set(0, 1000, 0);
scene.add(light);

var lightPosition4D = new THREE.Vector4();
lightPosition4D.x = light.position.x;
lightPosition4D.y = light.position.y;
lightPosition4D.z = light.position.z;
lightPosition4D.w = 0.001;


// function test(){
    /* ***** ROCKS ***** */
    var material = new THREE.MeshLambertMaterial({
      color: 0x745848,
      emissive: 0x222222
    });

    var rocks;
    var rock;
    // for (i=1;i<30;i++){
      rocks = new THREE.Group();
      scene.add(rocks);
      rocks.name = "rocks";
      rocks.position.set(Math.round(Math.random()*100),2000,0);
      console.log("rocks", rocks);

      //Rock
      for (index=1;index<10;index++){
        var geometry = new THREE.DodecahedronGeometry(300,0);
        var rock = new THREE.Mesh(geometry, material);
        rock.name = "rock" + index;
        rock.position.y = 0;
        rocks.add(rock);
      }

      var rockShadow = new THREE.ShadowMesh( rock );
      scene.add( rockShadow );

    // }
// }

// test();

/* ***** GROUND ***** */
var groundGeometry = new THREE.BoxGeometry( 10000, 0.01, 10000 );
var groundMaterial = new THREE.MeshLambertMaterial( { color: 'rgb(0,130,0)' } );
var groundMesh = new THREE.Mesh( groundGeometry, groundMaterial );
groundMesh.position.y = 0.0;
scene.add( groundMesh );
groundMesh.material.color.setHex( 0x008200 );

var normalVector = new THREE.Vector3( 0, 1, 0 );
var planeConstant = 0.01;
var ground = new THREE.Plane( normalVector, planeConstant );

//When rocks touch plane, bounce, break in smaller pieces (between 2 to 5), and roll

//Camera
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
camera.position.y = 160;
camera.position.z = 2000;
scene.add(camera);
camera.lookAt(rocks.position);

var orbit = new THREE.OrbitControls( camera, renderer.domElement );
orbit.enableZoom = false;
// //Rotation factor
var clock = new THREE.Clock;

function render() {
  	requestAnimationFrame(render);
  	var frametime = clock.getDelta();
  	// rocks.rotation.z -= frametime;
  	rocks.position.y -= frametime *2000;
  	if(rocks.position.y  < 250){
  		rocks.position.y += frametime *2000;

  		rocks.rotation.x += frametime*5;
  		rocks.position.z += frametime *2000;
  		if(rocks.position.z > 10000) {
  			rocks.position.z -= frametime *2000;
  			scene.remove(rocks);
  		}
  	}
  	if(rocks.position.y  > 2000){
  		rocks.position.y -= frametime *2000;
  	}
  	rockShadow.update( ground, lightPosition4D );
  	renderer.render(scene, camera);
}

render();
