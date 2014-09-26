    // DIVANO ROSSO
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.005,0.005,0.005);
        object.position.set(1.85,12.7,-1.88);
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/sofa.obj', 
        'assets/models/sofa.mtl', 
        {side: THREE.DoubleSide}
      );

    // Ficus
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.015,0.015,0.015);
        object.position.set(4,12.7,-1.7);
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/ficus/ficus.obj', 
        'assets/models/ficus/ficus.mtl', 
        {side: THREE.DoubleSide}
      );

    // Mobile
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.15,0.15,0.15);
        object.position.set(0.8,12.7,-0.1);
        object.rotation.y = Math.PI;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/secretarysDesk/secretarysDesk.obj', 
        'assets/models/secretarysDesk/secretarysDesk.mtl', 
        {side: THREE.DoubleSide}
      );


    // PIANOFORTE
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.0075,0.0075,0.0075);
        object.position.set(1,13,-1);
        pianoforteSuona = false;
        rondo = new Sound('rondo');
        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            listaAnimata.push(child);
            child.anim = function(){
              console.log("Stai suonando il piano!");
              if (!pianoforteSuona) {
                rondo.audio.play();
                pianoforteSuona = true;
              }
              else {
                console.log("Hai smesso di suonare!");
                rondo.audio.pause();
                pianoforteSuona = false;
              }
            }
          }
        });
        scene.add(object);
      });


      loaderMTL.load(
        'assets/models/pianoAQueue.obj', 
        'assets/models/pianoAQueue.mtl', 
        {side: THREE.DoubleSide}
      );

// TAPPETO Ingresso
tappetoIngressoTexture = THREE.ImageUtils.loadTexture('assets/textures/tappetoIngresso.jpg');
tappetoIngressoGeometry = new THREE.PlaneGeometry(1,0.5);
tappetoIngressoMaterial = new THREE.MeshLambertMaterial({map: tappetoIngressoTexture});
tappetoIngressoMesh = new THREE.Mesh(tappetoIngressoGeometry, tappetoIngressoMaterial);
tappetoIngressoMesh.material.map.wrapS = THREE.RepeatWrapping;
tappetoIngressoMesh.material.map.wrapT = THREE.RepeatWrapping;
tappetoIngressoMesh.material.map.repeat.set(1,1);
tappetoIngressoMesh.rotation.x = -Math.PI/2;
tappetoIngressoMesh.rotation.z = -Math.PI/4;
tappetoIngressoMesh.position.set(4,12.8,-0.6);
scene.add(tappetoIngressoMesh);

// TAPPETO Grande
tappetoGrandeTexture = THREE.ImageUtils.loadTexture('assets/textures/tappetoGrande.jpg');
tappetoGrandeGeometry = new THREE.PlaneGeometry(1.4,0.8);
tappetoGrandeMaterial = new THREE.MeshLambertMaterial({map: tappetoGrandeTexture});
tappetoGrandeMesh = new THREE.Mesh(tappetoGrandeGeometry, tappetoGrandeMaterial);
tappetoGrandeMesh.material.map.wrapS = THREE.RepeatWrapping;
tappetoGrandeMesh.material.map.wrapT = THREE.RepeatWrapping;
tappetoGrandeMesh.material.map.repeat.set(1,1);
tappetoGrandeMesh.rotation.x = -Math.PI/2;
//tappetoGrandeMesh.rotation.z = -Math.PI/4;
tappetoGrandeMesh.position.set(2.6,12.8,-0.8);
scene.add(tappetoGrandeMesh);
