    // DIVANO ROSSO
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.005,0.005,0.005);
        object.position.set(1.85,15.2,-1.88);
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/sofa.obj', 
        'assets/models/sofa.mtl', 
        {side: THREE.DoubleSide}
      );


// TAPPETO BLU
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.005,0.005,0.005);
        object.rotation.y = Math.PI/4;
        object.position.set(-0.5,15.2,-3.5);
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/carpet.obj', 
        'assets/models/carpet.mtl', 
        {side: THREE.DoubleSide}
      );

    // PIANOFORTE
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.0075,0.0075,0.0075);
        object.position.set(1,15.5,-1);
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/pianoAQueue.obj', 
        'assets/models/pianoAQueue.mtl', 
        {side: THREE.DoubleSide}
      );

// TAVOLO
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.005,0.005,0.005);
        object.position.set(4.5,15.2,-1);
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/oakTable.obj', 
        'assets/models/oakTable.mtl', 
        {side: THREE.DoubleSide}
      );

