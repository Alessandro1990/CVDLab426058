// Water
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.008,0.008,0.008);
        object.position.set(3.8,12.7,-5.7);
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
        object.position.set(4.2,13.3,-5.7);
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
pavimentoBagnoGeometry = new THREE.PlaneGeometry(3*Math.sqrt(2)/2-0.1,3*Math.sqrt(2)/4+0.3);
pavimentoBagnoMaterial = new THREE.MeshLambertMaterial({map: maiolica});
pavimentoBagno = new THREE.Mesh(pavimentoBagnoGeometry,pavimentoBagnoMaterial);
pavimentoBagno.material.map.wrapS = THREE.RepeatWrapping;
pavimentoBagno.material.map.wrapT = THREE.RepeatWrapping;
pavimentoBagno.material.map.repeat.set(8,4);
pavimentoBagno.position.set(3.65,12.7,-4.8);
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
striscia.position.set(3.35,14,-5.2);
striscia.rotation.y = Math.PI/4;
scene.add(striscia);
clone = striscia.clone();
clone.position.set(3.35,13.6,-5.2);
scene.add(clone);

// ROSE
qrTexture = THREE.ImageUtils.loadTexture('assets/textures/qr.jpg');
qrGeometry = new THREE.PlaneGeometry(0.25,0.25);
qrMaterial = new THREE.MeshLambertMaterial({map: qrTexture});
qr = new THREE.Mesh(qrGeometry,qrMaterial);
qr.rotation.y = Math.PI/4;
qr.position.set(3.8, 13.79,-5.6);
scene.add(qr);
clone = qr.clone()
clone.position.set(2.8,13.79,-4.6);
scene.add(clone);

// Specchio
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.02,0.02,0.02);
        object.position.set(3.3,13.8,-5.1);
        object.rotation.y = Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/mirror.obj', 
        'assets/models/mirror.mtl', 
        {side: THREE.DoubleSide}
      );

// Lavabo
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.0067,0.007,0.007);
        object.position.set(2.5,12.7,-3.9);
        object.rotation.y = Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/lavabo/lavabo.obj', 
        'assets/models/lavabo/lavabo.mtl', 
        {side: THREE.DoubleSide}
      );


// Vasca
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.005,0.005,0.005);
        object.position.set(3.8,12.7,-4);
        object.rotation.y = -3*Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/vasca/vasca.obj', 
        'assets/models/vasca/vasca.mtl', 
        {side: THREE.DoubleSide}
      );

// Bidet
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.007,0.007,0.007);
        object.position.set(4.25,12.7,-4.75);
        object.rotation.y = -3*Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/bidet/bidet.obj', 
        'assets/models/bidet/bidet.mtl', 
        {side: THREE.DoubleSide}
      );

      // Termosifone
      loader.load('assets/models/termosifone.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
      obj.position.set(4.35,12.7,-5.65);
      obj.rotation.y = -Math.PI/4;
      obj.scale.set(0.7,0.7,0.7);
      scene.add(obj);  
      });




