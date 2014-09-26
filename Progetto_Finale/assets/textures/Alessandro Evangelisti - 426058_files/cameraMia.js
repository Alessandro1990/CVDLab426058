// PAVIMENTI
      marmo = THREE.ImageUtils.loadTexture('assets/textures/marmo.png');
      pavimentoCameraMiaGeometry = new THREE.PlaneGeometry(2*Math.sqrt(2),(2*Math.sqrt(2)));
      pavimentoCameraMiaMaterial = new THREE.MeshLambertMaterial({map: marmo});
      pavimentoCameraMia = new THREE.Mesh(pavimentoCameraMiaGeometry,pavimentoCameraMiaMaterial);
      pavimentoCameraMia.rotation.x = -Math.PI/2
      pavimentoCameraMia.rotation.z = Math.PI/4
      pavimentoCameraMia.position.set(2,15.2,-6);
      scene.add(pavimentoCameraMia);