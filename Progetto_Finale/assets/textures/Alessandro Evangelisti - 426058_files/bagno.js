// Water
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.01,0.01,0.01);
        object.position.set(3.8,15.2,-5.7);
        object.rotation.y = Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/water.obj', 
        'assets/models/water.mtl', 
        {side: THREE.DoubleSide}
      );

// Carta igienica
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.01,0.01,0.01);
        object.position.set(4.2,15.5,-5.7);
        object.rotation.y = -Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/cartaIgienica.obj', 
        'assets/models/cartaIgienica.mtl', 
        {side: THREE.DoubleSide}
      );

// Mattonelle
maiolica = THREE.ImageUtils.loadTexture('assets/textures/maiolica.jpg');
maiolica.wrapS = THREE.RepeatWrapping;
maiolica.wrapT = THREE.RepeatWrapping;
pavimentoBagnoGeometry = new THREE.PlaneGeometry(3*Math.sqrt(2)/2,3*Math.sqrt(2)/4);
pavimentoBagnoMaterial = new THREE.MeshLambertMaterial({map: maiolica});
pavimentoBagno = new THREE.Mesh(pavimentoBagnoGeometry,pavimentoBagnoMaterial);
pavimentoBagno.material.map.wrapS = THREE.RepeatWrapping;
pavimentoBagno.material.map.wrapT = THREE.RepeatWrapping;
pavimentoBagno.material.map.repeat.set(8,4);
pavimentoBagno.position.set(3.7,15.2,-4.7);
pavimentoBagno.rotation.x = -Math.PI/2
pavimentoBagno.rotation.z = Math.PI/4
scene.add(pavimentoBagno);

// Strisce parete
rose = THREE.ImageUtils.loadTexture('assets/textures/rose.jpg');
strisciaGeometry = new THREE.PlaneGeometry(3*Math.sqrt(2)/2-0.1, 0.1);
strisciaMaterial = new THREE.MeshLambertMaterial({map: rose});
striscia = new THREE.Mesh(strisciaGeometry,strisciaMaterial);
striscia.material.map.wrapS = THREE.RepeatWrapping;
striscia.material.map.wrapT = THREE.RepeatWrapping;
striscia.material.map.repeat.set(5,1);
striscia.position.set(3.35,16,-5.2);
striscia.rotation.y = Math.PI/4;
scene.add(striscia);
clone = striscia.clone();
clone.position.set(3.35,16.5,-5.2);
scene.add(clone);

// ROSE
rose = THREE.ImageUtils.loadTexture('assets/textures/rose.jpg');
strisciaGeometry = new THREE.PlaneGeometry(3*Math.sqrt(2)/2-0.1, 0.1);
strisciaMaterial = new THREE.MeshLambertMaterial({map: rose});
striscia = new THREE.Mesh(strisciaGeometry,strisciaMaterial);

// Specchio
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.02,0.02,0.02);
        object.position.set(3.2,16.3,-5);
        object.rotation.y = Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/mirror.obj', 
        'assets/models/mirror.mtl', 
        {side: THREE.DoubleSide}
      );