let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );

//texture

let textureWalls =  new THREE.TextureLoader().load( 'textures/walls.jpg' );
let textureWindows = new THREE.TextureLoader().load( 'textures/Windows.jpg' );
let textureWindows2 = new THREE.TextureLoader().load( 'textures/windows2.jpg' );
let textureorangewall = new THREE.TextureLoader().load( 'textures/orangewall.jpg' );
let texturemorning = new THREE.TextureLoader().load('textures/morning.jpg')
let texturefloor = new THREE.TextureLoader().load('textures/floor.jpg')
let textureWood = new THREE.TextureLoader().load('textures/wood.jpg')


//material

let materialWindows2 = new THREE.MeshPhongMaterial( { map: textureWindows2 } );
let materialfloor = new THREE.MeshPhongMaterial({ map: texturefloor });
let materialWood = new THREE.MeshPhongMaterial({ map: textureWood });
let materialWindows = new THREE.MeshPhongMaterial( { map: textureWindows } );
let materialorangewall = new THREE.MeshPhongMaterial( { map: textureorangewall } );
let materialWalls = new THREE.MeshPhongMaterial( { map: textureWalls } );


//lights error even tried to adjust the lighting the shadows just spreads like CoROna vIruS

// let ambientLight, hemisphereLight, shadowLight;

// function createLights() {

// ambientLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
// shadowLight = new THREE.ambientLight(0xffffff, .9);
// shadowLight.position.set(10, 30, 60);
// shadowLight.castShadow = true;
// shadowLight.shadow.camera.left = -400;
// shadowLight.shadow.camera.right = 400;
// shadowLight.shadow.camera.top = 400;
// shadowLight.shadow.camera.bottom = -400;
// shadowLight.shadow.camera.near = 1;
// shadowLight.shadow.camera.far = 1000;
// shadowLight.shadow.mapSize.width = 2048;
// shadowLight.shadow.mapSize.height = 2048;

// scene.add(ambientLight);
// scene.add(shadowLight);
// }

//light #2 (It actually works but when i tried adding textures everything just turns black af 
//(even without it nothing changes)

// const color = 0xFFFFFF;
// const intensity = 1.5;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(150, -60, 0);
// light.target.position.set(-2, 50, 0);
// scene.add(light);
// scene.add(light.target);

//light#3 Ambient light

const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add(ambientLight);

var faceMaterial = new THREE.MeshLambertMaterial( { color: 0x0087E6 } );

//BOXes GEOMETRY


const closet = new THREE.BoxBufferGeometry(-4,10, 0);
const DoorProportions = new THREE.BoxBufferGeometry(20,20, -4);
const SideBodyProportions = new THREE.BoxBufferGeometry(5, 10, 10);
const morningProportions = new THREE.BoxBufferGeometry(20, 60, -10);
const floorProportions = new THREE.BoxBufferGeometry(30, 0, 30);
const ConeProportions = new THREE.BoxBufferGeometry(-1,-1,16);
const closetproportion = new THREE.BoxGeometry(10,10, -5);


//dirt Bed
const radiusTop =5;
const radiusBottom = 2;
const BoxHeight = 5;
const radialSegments = 60;
const geometryCy = new THREE.BoxBufferGeometry(radiusTop, radiusBottom, BoxHeight, radialSegments);

//Shapes
let CastleBody = new THREE.Mesh( closetproportion, materialWindows );
let CastleWing = new THREE.Mesh( SideBodyProportions, materialWindows );
let CastleWing2 = new THREE.Mesh( SideBodyProportions, materialWindows );
let Door = new THREE.Mesh( DoorProportions, materialorangewall );


let floor = new THREE.Mesh( floorProportions, materialfloor );
let ConeWood = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood2 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood3 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood4 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood5 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood6 = new THREE.Mesh( ConeProportions, materialWood );

let Cylinder = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder2 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder3 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder4 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder5 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder6 = new THREE.Mesh( geometryCy, materialWindows2);

scene.add( ConeWood5, ConeWood6, Cylinder5, Cylinder6, CastleWing2, CastleWing,CastleBody, Cylinder, Door, Cylinder2, floor, ConeWood, ConeWood2, Cylinder3,Cylinder4,ConeWood3,ConeWood4);

//Background
scene.background = (texturemorning);

// cam position
camera.position.z = -9;
camera.position.x = 0;
camera.position.y = -5;
 
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls( camera,renderer.domElement);

function animate() {
   requestAnimationFrame( animate );

  
   


  
   Door.position.x = 0;
   Door.position.y = 5;

   

  

  
   renderer.render( scene, camera );

}

animate();

