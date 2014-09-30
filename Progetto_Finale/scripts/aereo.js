// Aereo
var aereo;
loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(1,1,1);
        aereo = object;
        aereo.rotation.y = -Math.PI/2;
        // SCRITTA
        scrittaGeometry = new THREE.TextGeometry("CVDLAB", {size: 4, height: 1});
        scrittaMaterial = new THREE.MeshLambertMaterial({color: 0x000000, opacity: 0.9, transparent:true, side: THREE.DoubleSide});
        scrittaMesh = new THREE.Mesh(scrittaGeometry, scrittaMaterial);
        scrittaMesh.position.x += 10;
        oggetto3D = new THREE.Object3D();
        oggetto3D.add(aereo);
        oggetto3D.add(scrittaMesh);
        oggetto3D.position.set(50,30,-20);
        scene.add(oggetto3D);
        animazioneAereo();
      });
      loaderMTL.load(
        'assets/models/cartoon_biplane.obj', 
        'assets/models/cartoon_biplane.mtl', 
        {side: THREE.DoubleSide}
      );

// ANIMAZIONE
function animazioneAereo () {
  var tween1 = new TWEEN.Tween(oggetto3D.position)
    .to({x:-60, y:30, z:-20}, 10000)
    .easing(TWEEN.Easing.Quadratic.In);

  var tween2 = new TWEEN.Tween(oggetto3D.position)
    .to({x:50, y:30, z:-20}, 10000)
    .easing(TWEEN.Easing.Quadratic.In)

  var tween3 = new TWEEN.Tween(oggetto3D.rotation)
    .to({x:0, y:Math.PI, z:0}, 1000)
    .easing(TWEEN.Easing.Quadratic.In)

  var tween4 = new TWEEN.Tween(oggetto3D.rotation)
    .to({x:0, y:0, z:0}, 1000)
    .easing(TWEEN.Easing.Quadratic.In)


  tween1.chain(tween3);
  tween3.chain(tween2);
  tween2.chain(tween4);
  tween4.chain(tween1);

  tween1.start();
}




