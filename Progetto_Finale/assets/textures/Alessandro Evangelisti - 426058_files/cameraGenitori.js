      // PAVIMENTI
      marmo = THREE.ImageUtils.loadTexture('assets/textures/marmo.png');
      pavimentoCameraGenitoriGeometry = new THREE.PlaneGeometry(2*Math.sqrt(2),(2*Math.sqrt(2)));
      pavimentoCameraGenitoriMaterial = new THREE.MeshLambertMaterial({map: marmo});
      pavimentoCameraGenitori = new THREE.Mesh(pavimentoCameraGenitoriGeometry,pavimentoCameraGenitoriMaterial);
      pavimentoCameraGenitori.rotation.x = -Math.PI/2
      pavimentoCameraGenitori.rotation.z = Math.PI/4
      pavimentoCameraGenitori.position.set(0,15.2,-4);
      scene.add(pavimentoCameraGenitori);