 var cassonetto;
 // SECCHIO
 loader = new THREE.OBJLoader();
      loader.load('assets/models/container.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0x808000, shading: THREE.FlatShading, side: THREE.DoubleSide});
        material.wrapS = THREE.RepeatWrapping;
        material.wrapT = THREE.RepeatWrapping;
        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.rotation.y = Math.PI/2;
        obj.scale.set(0.08,0.08,0.08);
        obj.position.set(-30,0.1,20);
        cassonetto = obj;
        scene.add(cassonetto);
      });

var batmobile;

// MACCHINA
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.5,0.5,0.5);
        object.rotation.y = Math.PI/2;
        object.position.set(20,1.2,20);
        batmobile = object;
        scene.add(batmobile);

      });
      loaderMTL.load(
        'assets/models/batmobile.obj', 
        'assets/models/batmobile.mtl', 
        {side: THREE.DoubleSide}
      );


// Mongolfiera
var mongolfiera;
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