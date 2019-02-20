const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshBasicMaterial( { color: 0xff0051 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )
camera.position.z = 5
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )
var x=1, xr=0;
var y=1, yr=0;
var z=1, zr=0;
var colr=0.0;
var rreb=0;
var i,j,k;
function animate() {	
 requestAnimationFrame( animate )
 if(xr<1){
	 x+=.01;
	 if(x>2.5){xr=1;}
 }
 else{
	 x-=.01;
	 if(x<.01){xr=0;}	 
 } 
 if(yr<1){
	 y+=.02;
	 if(y>2.5){yr=1;}
 }
 else{
	 y-=.02;
	 if(y<.01){yr=0;}	 
 } 
 if(zr<1){
	 z+=.03;
	 if(z>2.5){zr=1;}
 }
 else{
	 z-=.03;
	 if(z<.01){zr=0;}	 
 }
 if(rreb<1){
	 colr+=.01;
	 if(colr>1){rreb=1;}
 }
 else{
	 colr-=.04;
	 if(colr<.01){rreb=0;}	 
 }
 cube.rotation.x += 0.04;
 cube.rotation.y += 0.04;
 cube.material.color.setRGB(.5,.1,colr);
 cube.scale.set( x, y, z);
 wireframeCube.rotation.x -= 0.01;
 wireframeCube.rotation.y -= 0.01; 
 renderer.render( scene, camera )
 }
 
animate()
