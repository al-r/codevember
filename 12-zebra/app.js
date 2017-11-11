var width = window.innerWidth,
	height = window.innerHeight;

var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(width, height);
renderer.setClearColor(0x0E2255);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene;

//Light
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
scene.add(pointLight);



// //Texture
// var texture = new THREE.TextureLoader().load( "https://cdn.pixabay.com/photo/2016/04/08/00/41/seamless-1315322_960_720.jpg" );
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );

/* ***** ZEBRA ***** */
var zebra;
zebra = new THREE.Group();
// zebra.rotation.set(0.4, 0.3, 0);
scene.add(zebra);

var blackMaterial = new THREE.MeshLambertMaterial({
  color: 0x202020
});
var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0xffffff, specular: 0x555555, shininess: 30 } );
// var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture("https://cdn.pixabay.com/photo/2016/04/08/00/41/seamless-1315322_960_720.jpg")});

//body
var geometry = new THREE.BoxGeometry(100, 70, 150);
var cube = new THREE.Mesh(geometry, material);
zebra.add(cube);

//leg front right
var legFRGeometry = new THREE.BoxGeometry(20, 150, 20);
var legFR = new THREE.Mesh(legFRGeometry, material);
legFR.position.set(50,-50,65);
zebra.add(legFR);
//Feet front right
var feetFRGeometry = new THREE.BoxGeometry(30,30,30);
var feetFR = new THREE.Mesh(feetFRGeometry, blackMaterial);
feetFR.position.set(50,-120,65);
zebra.add(feetFR);

//leg front left
var legFLGeometry = new THREE.BoxGeometry(20, 150, 20);
var legFL = new THREE.Mesh(legFLGeometry, material);
legFL.position.set(-50,-50,65);
zebra.add(legFL);
//Feet front left
var feetFLGeometry = new THREE.BoxGeometry(30,30,30);
var feetFL = new THREE.Mesh(feetFLGeometry, blackMaterial);
feetFL.position.set(-50,-120,65);
zebra.add(feetFL);

//leg back right
var legBRGeometry = new THREE.BoxGeometry(20, 150, 20);
var legBR = new THREE.Mesh(legBRGeometry, material);
legBR.position.set(50,-50,-65);
zebra.add(legBR);
//feet back right
var feetBRGeometry = new THREE.BoxGeometry(30,30,30);
var feetBR = new THREE.Mesh(feetBRGeometry, blackMaterial);
feetBR.position.set(50,-120,-65);
zebra.add(feetBR);

//leg back left
var legBLGeometry = new THREE.BoxGeometry(20, 150, 20);
var legBL = new THREE.Mesh(legBLGeometry, material);
legBL.position.set(-50,-50,-65);
zebra.add(legBL);
//feet back left
var feetBLGeometry = new THREE.BoxGeometry(30,30,30);
var feetBL = new THREE.Mesh(feetBLGeometry, blackMaterial);
feetBL.position.set(-50,-120,-65);
zebra.add(feetBL);

//Tail
var tailGeometry = new THREE.BoxGeometry(10, 60, 10);
var tail = new THREE.Mesh(tailGeometry, material);
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
var neck = new THREE.Mesh(neckGeometry, material);
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


zebra.rotation.y = 20;



//Camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.y = 160;
camera.position.z = 400;
scene.add(camera);
camera.lookAt(cube.position);

//Rotation factor
var clock = new THREE.Clock;

function render() {
  renderer.render(scene, camera);
  // zebra.rotation.y -= clock.getDelta();
  requestAnimationFrame(render);
}

render();