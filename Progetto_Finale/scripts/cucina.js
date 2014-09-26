    // Mensole basse
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.08,0.08,0.08);
        object.position.set(5.2,13,-3);
        object.rotation.y = -Math.PI/2;
        scene.add(object);
        clone = object.clone();
        clone.rotation.y = Math.PI/2;
        clone.position.set(4.2,13,-2.3);
        scene.add(clone);
        clone2 = object.clone();
        clone2.position.set(4.25,13,-3.95);
        clone2.rotation.y = Math.PI/4;
        scene.add(clone2);
      });


      loaderMTL.load(
        'assets/models/cucina/2DoorLowerCabinet.obj', 
        'assets/models/cucina/2DoorLowerCabinet.mtl', 
        {side: THREE.DoubleSide}
      );

    // Mensole alte 
        loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.08,0.08,0.08);
        object.position.set(4.1,14,-2.3);
        object.rotation.y = Math.PI/2;
        scene.add(object);
        clone = object.clone();
        clone.position.set(4.25,14,-3.95)
        clone.rotation.y = Math.PI/4;
        scene.add(clone);
        clone2 = object.clone();
        clone2.position.set(3.85,14,-3.55)
        clone2.rotation.y = Math.PI/4;
        scene.add(clone2);
      });


      loaderMTL.load(
        'assets/models/cucina/2DoorUpperCabinet.obj', 
        'assets/models/cucina/2DoorUpperCabinet.mtl', 
        {side: THREE.DoubleSide}
      );

      // Frigo 
      loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.7,1.3,0.8);
        object.position.set(4.1,13,-3.1);
        object.rotation.y = Math.PI/2;
        scene.add(object);
      });


      loaderMTL.load(
        'assets/models/cucina/pantry.obj', 
        'assets/models/cucina/pantry.mtl', 
        {side: THREE.DoubleSide}
      );

      // Lavello 
      loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.13,0.11,0.13);
        object.position.set(3.9,13,-3.6);
        object.rotation.y = Math.PI/4;
        scene.add(object);
      });


      loaderMTL.load(
        'assets/models/cucina/kitchenSinkWithMarble.obj', 
        'assets/models/cucina/kitchenSinkWithMarble.mtl', 
        {side: THREE.DoubleSide}
      );

      // Macchinetta del gas
      loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.7,0.7,0.7);
        object.position.set(8.9,12.7,-4.3);
        object.rotation.y = -Math.PI/2;
        scene.add(object);
      });
      loaderMTL.load(
        'assets/models/cucina/oven_Scene.obj', 
        'assets/models/cucina/oven_Scene.mtl', 
        {side: THREE.DoubleSide}
      );
