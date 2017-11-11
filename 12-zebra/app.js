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




/* ***** ZEBRA ***** */
var zebra;
zebra = new THREE.Group();
scene.add(zebra);

var blackMaterial = new THREE.MeshLambertMaterial({
  color: 0x202020
});
/*Picture from Pixabay (https://cdn.pixabay.com/photo/2016/04/08/00/41/seamless-1315322_960_720.jpg)*/
var texture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/al-r/codevember/master/12-zebra/zebra.jpg' );
var textureH = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/al-r/codevember/master/12-zebra/zebra-h.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture } );
var materialH = new THREE.MeshBasicMaterial( { map: textureH } );

//body
var geometry = new THREE.BoxGeometry(100, 70, 150);
var cube = new THREE.Mesh(geometry, material);
zebra.add(cube);

//leg front right
var legFRGeometry = new THREE.BoxGeometry(20, 150, 20);
var legFR = new THREE.Mesh(legFRGeometry, materialH);
legFR.position.set(50,-50,65);
zebra.add(legFR);
//Feet front right
var feetFRGeometry = new THREE.BoxGeometry(30,30,30);
var feetFR = new THREE.Mesh(feetFRGeometry, blackMaterial);
feetFR.position.set(50,-120,65);
zebra.add(feetFR);

//leg front left
var legFLGeometry = new THREE.BoxGeometry(20, 150, 20);
var legFL = new THREE.Mesh(legFLGeometry, materialH);
legFL.position.set(-50,-50,65);
zebra.add(legFL);
//Feet front left
var feetFLGeometry = new THREE.BoxGeometry(30,30,30);
var feetFL = new THREE.Mesh(feetFLGeometry, blackMaterial);
feetFL.position.set(-50,-120,65);
zebra.add(feetFL);

//leg back right
var legBRGeometry = new THREE.BoxGeometry(20, 150, 20);
var legBR = new THREE.Mesh(legBRGeometry, materialH);
legBR.position.set(50,-50,-65);
zebra.add(legBR);
//feet back right
var feetBRGeometry = new THREE.BoxGeometry(30,30,30);
var feetBR = new THREE.Mesh(feetBRGeometry, blackMaterial);
feetBR.position.set(50,-120,-65);
zebra.add(feetBR);

//leg back left
var legBLGeometry = new THREE.BoxGeometry(20, 150, 20);
var legBL = new THREE.Mesh(legBLGeometry, materialH);
legBL.position.set(-50,-50,-65);
zebra.add(legBL);
//feet back left
var feetBLGeometry = new THREE.BoxGeometry(30,30,30);
var feetBL = new THREE.Mesh(feetBLGeometry, blackMaterial);
feetBL.position.set(-50,-120,-65);
zebra.add(feetBL);

//Tail
var tailGeometry = new THREE.BoxGeometry(10, 60, 10);
var tail = new THREE.Mesh(tailGeometry, materialH);
tail.position.set(0,-25,-80);
zebra.add(tail);

//Lower Tail
var lowerTailGeometry = new THREE.BoxGeometry(16, 20, 16);
var lowerTail = new THREE.Mesh(lowerTailGeometry, blackMaterial);
lowerTail.position.set(0,-60,-80);
zebra.add(lowerTail);



/* ***** HEAD ***** */
head = new THREE.Group();
zebra.add(head);

//Main part of the head
var mainheadGeometry = new THREE.BoxGeometry(40, 40, 80);
var mainhead = new THREE.Mesh(mainheadGeometry, material);
mainhead.position.set(0,70,100);
head.add(mainhead);

//Eye Left
var eyeLeftGeometry = new THREE.IcosahedronGeometry(10, 1);
var eyeLeft = new THREE.Mesh(eyeLeftGeometry, blackMaterial);
eyeLeft.position.set(-15,75,80);
head.add(eyeLeft);

//Eye Right
var eyeRightGeometry = new THREE.IcosahedronGeometry(10, 1);
var eyeRight = new THREE.Mesh(eyeRightGeometry, blackMaterial);
eyeRight.position.set(15,75,80);
head.add(eyeRight);

//Mouth top
var mouthTopGeometry = new THREE.BoxGeometry(42, 26, 25);
var mouthTop = new THREE.Mesh(mouthTopGeometry, blackMaterial);
mouthTop.position.set(0,78,128);
head.add(mouthTop);

//Mouth bottom
var mouthBottomGeometry = new THREE.BoxGeometry(42, 11, 25);
var mouthBottom = new THREE.Mesh(mouthBottomGeometry, blackMaterial);
mouthBottom.position.set(0,55,128);
head.add(mouthBottom);

//Neck
var neckGeometry = new THREE.BoxGeometry(40, 80, 20);
var neck = new THREE.Mesh(neckGeometry, materialH);
neck.position.set(0,50,65);
head.add(neck);

//Hair
var hairGeometry = new THREE.BoxGeometry(10, 80, 20);
var hair = new THREE.Mesh(hairGeometry, blackMaterial);
hair.position.set(0,50,55);
head.add(hair);
//hair top
var hairTopGeometry = new THREE.BoxGeometry(10, 10, 50);
var hairTop = new THREE.Mesh(hairTopGeometry, blackMaterial);
hairTop.position.set(0,95,70);
head.add(hairTop);

head.rotation.x = -100;
head.position.set(0,54,0);


zebra.rotation.y = 0;



/* ***** GRASS ***** */
var grass = new THREE.Group();
zebra.add(grass);

//Grass
var greenGeometry = new THREE.CylinderGeometry( 200, 210, 5, 20 );
var greenMaterial = new THREE.MeshLambertMaterial( {color: 0x319c27} );
var green = new THREE.Mesh( greenGeometry, greenMaterial );
green.position.set(0,-135,0);
grass.add(green );

//Blades of grass
var geometry = new THREE.BoxGeometry(5, 50, 5);
var blade = new THREE.Mesh(geometry, greenMaterial);
blade.position.set(-90,-120,95);
grass.add(blade);

var geometry = new THREE.BoxGeometry(5, 30, 5);
var blade2 = new THREE.Mesh(geometry, greenMaterial);
blade2.position.set(-100,-120,100);
grass.add(blade2);

var geometry = new THREE.BoxGeometry(5, 10, 5);
var blade3 = new THREE.Mesh(geometry, greenMaterial);
blade3.position.set(-95,-130,110);
grass.add(blade3);

var geometry = new THREE.BoxGeometry(5, 25, 5);
var blade4 = new THREE.Mesh(geometry, greenMaterial);
blade4.position.set(-93,-130,105);
grass.add(blade4);

//Ground
var groundGeometry = new THREE.CylinderGeometry( 210, 230, 20, 20 );
var groundMaterial = new THREE.MeshLambertMaterial( {color: 0x6f3c11} );
var ground = new THREE.Mesh( groundGeometry, groundMaterial );
ground.position.set(0,-145,0);
grass.add(ground );




//Camera
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
camera.position.y = 160;
camera.position.z = 400;
scene.add(camera);
camera.lookAt(grass.position);

var orbit = new THREE.OrbitControls( camera, renderer.domElement );
orbit.enableZoom = false;
// //Rotation factor
var clock = new THREE.Clock;

function render() {
  renderer.render(scene, camera);
  zebra.rotation.y -= clock.getDelta();
  requestAnimationFrame(render);
}

render();