crema = THREE.ImageUtils.loadTexture('assets/textures/intonacoArancione.jpg');
crema.wrapS = THREE.RepeatWrapping;
crema.wrapT = THREE.RepeatWrapping;
bcMaterial = new THREE.MeshLambertMaterial({map:crema});
var bcGeometry = new THREE.PlaneGeometry(8.6,0.8);
bc = new THREE.Mesh(bcGeometry, bcMaterial);
bc.material.map.wrapS = THREE.RepeatWrapping;
bc.material.map.wrapT = THREE.RepeatWrapping;
bc.material.map.repeat.set(5,3);
bc.position.set(7.2,2.8,6.6);
var k = 0.2;
for(i=1; i<6; i++){ 
	var clone = bc.clone();
	clone.position.set(7.2,2.3*(i+1)+k*i,6.6);
    scene.add(clone); 
}  
for(i=1; i<6; i++){ 
	var clone = bc.clone();
	clone.position.set(7.2,2.3*(i+1)+k*i-1.3,6.6);
    scene.add(clone); 
}
bc2Geometry = new THREE.PlaneGeometry(0.8,1.6);
bc2 = new THREE.Mesh(bc2Geometry,bcMaterial);
for(i=1; i<6; i++){ 
	var clone = bc2.clone();
	clone.position.set(3.3,2.3*(i+1)+k*i-1,6.6);
    scene.add(clone); 
}
for(i=1; i<6; i++){ 
	var clone = bc2.clone();
	clone.position.set(7.4,2.3*(i+1)+k*i-1,6.6);
    scene.add(clone); 
}
for(i=1; i<6; i++){ 
	var clone = bc2.clone();
	clone.position.set(11.2,2.3*(i+1)+k*i-1,6.6);
    scene.add(clone); 
}
bc3Geometry = new THREE.PlaneGeometry(1.1,1.6);
bc3 = new THREE.Mesh(bc3Geometry,bcMaterial);
for(i=1; i<6; i++){ 
	var clone = bc3.clone();
	clone.position.set(5,2.3*(i+1)+k*i-1,6.6);
    scene.add(clone); 
}
for(i=1; i<6; i++){ 
	var clone = bc3.clone();
	clone.position.set(9.4,2.3*(i+1)+k*i-1,6.6);
    scene.add(clone); 
}
bc4Geometry = new THREE.PlaneGeometry(0.6,1.6);
bc4 = new THREE.Mesh(bc4Geometry,bcMaterial);
for(i=1; i<6; i++){ 
	var clone = bc4.clone();
	clone.position.set(6.3,2.3*(i+1)+k*i-1,6.6);
    scene.add(clone); 
}


