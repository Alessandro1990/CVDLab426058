

    // Divano camera ragazzi
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.006,0.006,0.006);
        object.position.set(1.2,12.9,-5.2);
        object.rotation.y = 3*Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/burlap_sofa/burlap_sofa.obj', 
        'assets/models/burlap_sofa/burlap_sofa.mtl', 
        {side: THREE.DoubleSide}
      );


    // Libreria camera ragazzi
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.007,0.007,0.007);
        object.position.set(1.3,12.7,-6.9);
        object.rotation.y = Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/libreria/libreria.obj', 
        'assets/models/libreria/libreria.mtl', 
        {side: THREE.DoubleSide}
      );

    // Poltrone letto ragazzi
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.2,0.2,0.2);
        object.position.set(7.95,12.9,-4.15);
        object.rotation.y = -3*Math.PI/4;
        mesh = object;
        scene.add(mesh);

        clone = mesh.clone();
        clone.position.set(7.3,12.9,-3.5);
        scene.add(clone);
      });


      loaderMTL.load(
        'assets/models/poltrona/poltrona.obj', 
        'assets/models/poltrona/poltrona.mtl', 
        {side: THREE.DoubleSide}
      );




