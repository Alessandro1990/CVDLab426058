
// Albero
var mongolfiera
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(8,8,8);
        object.position.set(-20,18,-20);
        mongolfiera = object;
        scene.add(mongolfiera);

      });
      loaderMTL.load(
        'assets/models/Balloon_Obj/globoaerostatico05_definitivo02.obj', 
        'assets/models/Balloon_Obj/globoaerostatico05_definitivo02.mtl', 
        {side: THREE.DoubleSide}
      );