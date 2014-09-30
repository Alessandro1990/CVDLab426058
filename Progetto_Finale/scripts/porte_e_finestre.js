function creaPorta(larghezza, altezza, spessore, x, y, z, porta, oggetto3D) {
	portaTexture = THREE.ImageUtils.loadTexture('assets/textures/porta.jpg');
	portaGeometry = new THREE.BoxGeometry(larghezza,altezza,spessore);
	portaMaterial = new THREE.MeshLambertMaterial({map: portaTexture, side: THREE.DoubleSide});
	porta = new THREE.Mesh(portaGeometry, portaMaterial);
	oggetto3D = new THREE.Object3D();
	porta.position.set(x/2,y/2,z/2);
	oggetto3D.position.set(x/2,y/2,z/2);
	oggetto3D.add(porta);
	scene.add(oggetto3D);
}

function creaFinestra(larghezza, altezza, spessore, destra, oggetto3D) {
	corniceTexture = THREE.ImageUtils.loadTexture('textures/legno.jpg');
	bronzoTexture = THREE.ImageUtils.loadTexture('textures/bronze.jpg');
	strisciaLungaCorniceGeometry = new THREE.BoxGeometry(larghezza/6, altezza, spessore);
	strisciaLungaCorniceMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide});
	strisciaLungaCornice = new THREE.Mesh(strisciaLungaCorniceGeometry, strisciaLungaCorniceMaterial);
	strisciaLungaCornice2 = strisciaLungaCornice.clone();
	strisciaLungaCornice.position.y = altezza/2;
	strisciaLungaCornice2.position.x += (larghezza - larghezza/6);
	strisciaLungaCornice2.position.y = altezza/2;
	strisciaCortaCorniceGeometry = new THREE.BoxGeometry(larghezza, altezza/8, spessore);
	strisciaCortaCorniceMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, side: THREE.DoubleSide});
	strisciaCortaCornice = new THREE.Mesh(strisciaCortaCorniceGeometry, strisciaCortaCorniceMaterial);
	strisciaCortaCornice2 = strisciaCortaCornice.clone();
	strisciaCortaCornice.position.x = larghezza/2-larghezza/12;
	strisciaCortaCornice2.position.x = larghezza/2-larghezza/12;
	strisciaCortaCornice2.position.y = altezza - altezza/16;
	cornice = new THREE.Object3D();
	cornice.add(strisciaLungaCornice);
	cornice.add(strisciaLungaCornice2);
	cornice.add(strisciaCortaCornice);
	cornice.add(strisciaCortaCornice2);
	vetroGeometry = new THREE.BoxGeometry(larghezza-larghezza/3, altezza-altezza/4+altezza/16,spessore/4);
	vetroMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, opacity: 0.9, transparent: true, side: THREE.DoubleSide});
	vetro = new THREE.Mesh(vetroGeometry,vetroMaterial);
	vetro.position.set(larghezza/2-larghezza/12,altezza-altezza/2-altezza/32,-spessore/8);

	manigliaBaseGeometry = new THREE.BoxGeometry(larghezza/12, altezza/12,spessore/4);
	manigliaMaterial = new THREE.MeshPhongMaterial({map:bronzoTexture, side: THREE.DoubleSide});
	manigliaBase = new THREE.Mesh(manigliaBaseGeometry, manigliaMaterial);
	manigliaGeometry = new THREE.BoxGeometry(larghezza/18, altezza/5,spessore/4);
	maniglia = new THREE.Mesh(manigliaGeometry, manigliaMaterial);
	maniglia3D = new THREE.Object3D();
	maniglia3D.add(manigliaBase);
	maniglia3D.add(maniglia);
	manigliaBase.position.z -= spessore/8;
	manigliaBase.position.y += altezza/20;
	maniglia3D.position.z = spessore/2+spessore/4;
	maniglia3D.position.y = altezza/2;
	console.log(destra);
	if (destra>0)
		maniglia3D.position.x = larghezza-larghezza/6;
	oggetto3D = new THREE.Object3D();
	oggetto3D.add(cornice);
	oggetto3D.add(vetro);
	oggetto3D.add(maniglia3D);
	scene.add(oggetto3D);
}