// CARTA DA PARATI
// Camera dei genitori
cartaParati = THREE.ImageUtils.loadTexture('assets/textures/cartaParati.jpg');
cartaParati.wrapS = THREE.RepeatWrapping;
cartaParati.wrapT = THREE.RepeatWrapping;

pareteAGeometry = new THREE.PlaneGeometry(2*Math.sqrt(2), 2*Math.sqrt(2));
pareteAMaterial = new THREE.MeshLambertMaterial({map:cartaParati});
pareteA = new THREE.Mesh(pareteAGeometry,pareteAMaterial);
pareteA.material.map.wrapS = THREE.RepeatWrapping;
pareteA.material.map.wrapT = THREE.RepeatWrapping;
pareteA.material.map.repeat.set(3,3);
pareteA.position.set(-0.89,16.5,-4.968);
pareteA.rotation.y = Math.PI/4;
scene.add(pareteA);
clone = pareteA.clone();
clone.position.set(0.95,16.5,-4.95);
clone.rotation.y = -Math.PI/4;
scene.add(clone); 