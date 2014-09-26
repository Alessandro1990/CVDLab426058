      // PAVIMENTI
      marmo = THREE.ImageUtils.loadTexture('assets/textures/marmo.png');
      pavimentoCameraGenitoriGeometry = new THREE.PlaneGeometry(2*Math.sqrt(2),(2*Math.sqrt(2)));
      pavimentoCameraGenitoriMaterial = new THREE.MeshLambertMaterial({map: marmo});
      pavimentoCameraGenitori = new THREE.Mesh(pavimentoCameraGenitoriGeometry,pavimentoCameraGenitoriMaterial);
      pavimentoCameraGenitori.rotation.x = -Math.PI/2
      pavimentoCameraGenitori.rotation.z = Math.PI/4
      pavimentoCameraGenitori.position.set(0,12.7,-4);
      scene.add(pavimentoCameraGenitori);

    // Letto
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.007,0.007,0.007);
        object.position.set(0.3,12.7,-3.5);
        object.rotation.y = -3*Math.PI/4;
        mesh = object;
        scene.add(mesh);
      });


      loaderMTL.load(
        'assets/models/bedWithtexture/bedWithtexture.obj', 
        'assets/models/bedWithtexture/bedWithtexture.mtl', 
        {side: THREE.DoubleSide}
      );