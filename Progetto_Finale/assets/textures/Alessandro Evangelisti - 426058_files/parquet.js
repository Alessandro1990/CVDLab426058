parquet = THREE.ImageUtils.loadTexture('assets/textures/parquet.jpg');
parquet.wrapS = THREE.RepeatWrapping;
parquet.wrapT = THREE.RepeatWrapping;

pavimentoIngressoGeometry = new THREE.PlaneGeometry(4,2);
pavimentoIngressoMaterial = new THREE.MeshLambertMaterial({map: parquet});
pavimentoIngresso = new THREE.Mesh(pavimentoIngressoGeometry,pavimentoIngressoMaterial);
pavimentoIngresso.material.map.wrapS = THREE.RepeatWrapping;
pavimentoIngresso.material.map.wrapT = THREE.RepeatWrapping;
pavimentoIngresso.material.map.repeat.set(2,2);
pavimentoIngresso.position.set(1.9,15.2,-1);
pavimentoIngresso.rotation.x = -Math.PI/2;
scene.add(pavimentoIngresso);

pavimentoCucinaGeometry = new THREE.PlaneGeometry(1.4,4.4);
pavimentoCucinaMaterial = new THREE.MeshLambertMaterial({map: parquet});
pavimentoCucina = new THREE.Mesh(pavimentoCucinaGeometry,pavimentoCucinaMaterial);
pavimentoCucina.material.map.wrapS = THREE.RepeatWrapping;
pavimentoCucina.material.map.wrapT = THREE.RepeatWrapping;
pavimentoCucina.material.map.repeat.set(1,4);
pavimentoCucina.position.set(4.6,15.2,-1);
pavimentoCucina.rotation.x = -Math.PI/2;
scene.add(pavimentoCucina);

pavimentoCorridoioGeometry = new THREE.PlaneGeometry(1,1.4);
pavimentoCorridoioMaterial = new THREE.MeshLambertMaterial({map: parquet});
pavimentoCorridoio = new THREE.Mesh(pavimentoCorridoioGeometry,pavimentoCorridoioMaterial);
pavimentoCorridoio.material.map.wrapS = THREE.RepeatWrapping;
pavimentoCorridoio.material.map.wrapT = THREE.RepeatWrapping;
pavimentoCorridoio.material.map.repeat.set(1,4);
pavimentoCorridoio.position.set(3.4,15.2,-2.5);
pavimentoCorridoio.rotation.x = -Math.PI/2;
scene.add(pavimentoCorridoio);

pavimentoBivioGeometry = new THREE.PlaneGeometry(1.8,1.8);
pavimentoBivioMaterial = new THREE.MeshLambertMaterial({map: parquet});
pavimentoBivio = new THREE.Mesh(pavimentoBivioGeometry,pavimentoBivioMaterial);
pavimentoBivio.material.map.wrapS = THREE.RepeatWrapping;
pavimentoBivio.material.map.wrapT = THREE.RepeatWrapping;
pavimentoBivio.material.map.repeat.set(1,4);
pavimentoBivio.rotation.z = Math.PI/4
pavimentoBivio.position.set(2.55,15.2,-3.25);
pavimentoBivio.rotation.x = -Math.PI/2;
scene.add(pavimentoBivio);

