var asfalto = THREE.ImageUtils.loadTexture('assets/textures/asfalto.jpg');
asfalto.wrapS = THREE.RepeatWrapping;
asfalto.wrapT = THREE.RepeatWrapping;
var piattaformaGeometry = new THREE.CubeGeometry(80,25,1);
var piattaformaMaterial = new THREE.MeshLambertMaterial({map: asfalto});
var piattafoma = new THREE.Mesh(piattaformaGeometry, piattaformaMaterial);
piattafoma.material.map.wrapS = THREE.RepeatWrapping;
piattafoma.material.map.wrapT = THREE.RepeatWrapping;
piattafoma.material.map.repeat.set(15,2);
piattafoma.rotation.x = -Math.PI/2;
piattafoma.position.z = 37;
scene.add(piattafoma);
b = piattafoma.clone();
b.position.z = -8;
scene.add(b);

// Albero
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.5,0.5,0.5);
        object.position.set(-10,0,0);
        scene.add(object);

      });
      loaderMTL.load(
        'assets/models/blackTupelo.obj', 
        'assets/models/blackTupelo.mtl', 
        {side: THREE.DoubleSide}
      );

// Lampione
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(2,2,2);
        object.position.set(22,0,0);
        scene.add(object);

      });
      loaderMTL.load(
        'assets/models/farola1.obj', 
        'assets/models/farola1.mtl', 
        {side: THREE.DoubleSide}
      );