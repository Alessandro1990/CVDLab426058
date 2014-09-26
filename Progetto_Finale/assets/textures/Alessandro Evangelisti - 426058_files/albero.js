var loaderMTL = new THREE.OBJMTLLoader();
loaderMTL.load('assets/models/acero/AL04a.obj', 'assets/models/acero/AL04a.mtl', function(object) {
  object.scale.set(.04, .04, .04);
  object.position.set(-10,0,10);
  object.rotation.x = -Math.PI/2;
  scene.add(object);
});     


   /*   // Albero
      loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(.04, .04, .04);
        object.position.set(-10,0,10);
        object.rotation.x = -Math.PI/2;
        scene.add(object);
      });

      loaderMTL.load(
        'assets/models/acero/AL04a.obj', 
        'assets/models/acero/AL04a.mtl', 
        {side: THREE.DoubleSide}
      );*/