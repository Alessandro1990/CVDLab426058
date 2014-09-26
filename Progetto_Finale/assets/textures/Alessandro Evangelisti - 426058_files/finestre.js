loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.15,0.1,0.1);
        object.rotation.y = Math.PI;
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(1.5,3*i + 4,7);
          scene.add(clone);
        }
      });


      loaderMTL.load(
        'assets/models/window.obj', 
        'assets/models/window.mtl', 
        {side: THREE.DoubleSide}
      );