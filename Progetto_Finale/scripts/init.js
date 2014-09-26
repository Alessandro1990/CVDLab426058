var listaAnimata = [];
var projector = new THREE.Projector();
var video = document.createElement('video');
window.addEventListener('resize', onWindowResize, false);
var gui = new dat.GUI();

// CONTROLLI CONSTROLS
var controls = new function () {
    this.Trackball = function () {
    impostaTrack();
  };
    this.PointerLock = function () {
    impostaPointer();
  };
    this.Path = function () {
    impostaPath();
  };
}
  var controlsGui = gui.addFolder("Controls");
  controlsGui.add(controls, 'Trackball');
  controlsGui.add(controls, 'PointerLock');
  controlsGui.add(controls, 'Path');

// CONTROLLI VISUALI
  var visuali = new function () {
    this.Frontale_distante = function () {
    camera.position.set(0,30,120);
    camera.lookAt(new THREE.Vector3(0,0,0));
  };
    this.Frontale_ravvicinata = function () {
    camera.position.set(0,12,50);
    camera.lookAt(new THREE.Vector3(0,0,0));
  };
    this.Tre_quarti = function () {
    camera.position.set(-30,50,70);
    camera.lookAt(new THREE.Vector3(0,8,0));
  };
    this.Panoramica = function () {
    camera.position.set(3,30,-3);
    camera.lookAt(new THREE.Vector3(3,12.7,-3));
  };
    this.Lato_cortile = function () {
    camera.position.set(9,16,-12);
    camera.lookAt(new THREE.Vector3(3,14,7));
  };
}
var visualiGui = gui.addFolder("Visuali");
visualiGui.add(visuali, 'Frontale_distante');
visualiGui.add(visuali, 'Frontale_ravvicinata');
visualiGui.add(visuali, 'Tre_quarti');
  visualiGui.add(visuali, 'Panoramica');
  visualiGui.add(visuali, 'Lato_cortile');

// CONTROLLI ANIMAZIONI
  animazioneBatmanAvviata = false;
  mongolfieraDx = false;
  var animazioni = new function () {
    this.BatmanVSImmondizia = function () {
      if (!animazioneBatmanAvviata) {
      sound=new Sound('batman');
      sound.audio.play();
      console.log("DAJE BATTEMAN!");
      camera.position.set(0,30,200);
      camera.lookAt(new THREE.Vector3(0,0,0));
      var tween = new TWEEN.Tween(batmobile.position)
      .to({x:-25, y:1.2, z:20}, 5000)
      .easing(TWEEN.Easing.Quadratic.In)
      .start();
      var tween2 = new TWEEN.Tween(cassonetto.position)
      .to({x:-50, y:30, z:20}, 5000)
      .easing(TWEEN.Easing.Cubic.Out)
      .delay(5000)
      .start();
      var tween3 = new TWEEN.Tween(cassonetto.position)
      .to({x:-200, y:-300, z:20}, 30000)
      .easing(TWEEN.Easing.Quartic.Out)
      .delay(10000)
      .start();
      var tween4 = new TWEEN.Tween(cassonetto.rotation)
      .to({x:Math.PI, y:-Math.PI/2, z:Math.PI/4}, 5000)
      .easing(TWEEN.Easing.Quardratic.Out)
      .delay(5000)
      .start();
    }
  };
}
var animazioniGui = gui.addFolder("Animazioni");
  animazioniGui.add(animazioni, 'BatmanVSImmondizia');

// CONTROLLI LUCI
  var luci = new function () {
    this.Luce_ambientale = luceAmbientale.visible;
    this.SpotLight = spotLight.visible;
    this.Salotto = luceSalotto.visible;
    this.Cucina = luceCucina.visible;
    this.Camera_mia = luceCameraMia.visible;
    this.Camera_dei_genitori = luceCameraGenitori.visible;
    this.Bagno = luceBagno.visible;
}
var luciGui = gui.addFolder("Luci");
  luciGui.add(luci, 'Luce_ambientale').onChange(function(e){
    luceAmbientale.visible = e;
  });

  luciGui.add(luci, 'SpotLight').onChange(function(e){
    spotLight.visible = e;
  });

  luciGui.add(luci, 'Salotto').onChange(function(e){
    luceSalotto.visible = e;
  });
    luciGui.add(luci, 'Cucina').onChange(function(e){
    luceCucina.visible = e;
  });
    luciGui.add(luci, 'Camera_mia').onChange(function(e){
    luceCameraMia.visible = e;
  });
    luciGui.add(luci, 'Camera_dei_genitori').onChange(function(e){
    luceCameraGenitori.visible = e;
  });
    luciGui.add(luci, 'Bagno').onChange(function(e){
    luceBagno.visible = e;
  });

  // CONTROLLI MONGOLFIERA
  var controlliMongolfiera = new function() {
    this.altitudine = 18;
    this.latitudine = -20;
    this.longitudine = -20;
    this.rotazione = 0;
    this.cambia = function () {
      mongolfiera.position.y = controlliMongolfiera.altitudine;
      mongolfiera.position.x = controlliMongolfiera.latitudine;
      mongolfiera.position.z = controlliMongolfiera.longitudine;
      mongolfiera.rotation.y = controlliMongolfiera.rotazione
    }
  }
  var mongolfieraGui = gui.addFolder("Mongolfiera");
   mongolfieraGui.add(controlliMongolfiera, 'altitudine', 0, 25).onChange(controlliMongolfiera.cambia);
   mongolfieraGui.add(controlliMongolfiera, 'latitudine', -20, 20).onChange(controlliMongolfiera.cambia);
   mongolfieraGui.add(controlliMongolfiera, 'longitudine', -20, 20).onChange(controlliMongolfiera.cambia);
   mongolfieraGui.add(controlliMongolfiera, 'rotazione', 0, 2*Math.PI).onChange(controlliMongolfiera.cambia);

