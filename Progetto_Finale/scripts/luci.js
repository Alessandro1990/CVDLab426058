// LUCI
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(20, 300, 300);
spotLight.intensity = 1;
scene.add(spotLight);

var luceAmbientale = new THREE.AmbientLight(0x404040);
scene.add(luceAmbientale);

// BAGNO
var luceBagno = new THREE.PointLight( 0xfafad2, 2, 10 );
luceBagno.position.set(4.2,13,-5.5);
luceBagno.lookAt(new THREE.Vector3(3,0,-6));
scene.add(luceBagno);
puntoGeometry = new THREE.SphereGeometry(0.1);
puntoMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
punto = new THREE.Mesh(puntoGeometry,puntoMaterial);
punto.position.copy(luceBagno.position);
scene.add(punto);

// CAMERA MIA
var luceCameraMia = new THREE.PointLight(0xffffff, 2, 10);
luceCameraMia.position.set(2,13,-6);
scene.add(luceCameraMia);
clone = punto.clone();
clone.position.copy(luceCameraMia.position);

// CAMERA GENITORI
var luceCameraGenitori = new THREE.PointLight(0xffffff, 2, 10);
luceCameraGenitori.position.set(2,13,-6);
scene.add(luceCameraGenitori);
clone = punto.clone();
clone.position.copy(luceCameraGenitori.position);

// SALOTTO
var luceSalotto = new THREE.PointLight(0xffffff, 2, 10);
luceSalotto.position.set(1.5,13,-1);
scene.add(luceSalotto);
clone = punto.clone();
clone.position.copy(luceSalotto.position);

// CUCINA
var luceCucina = new THREE.PointLight(0xffffff, 2, 10);
luceCucina.position.set(4,13,-4);
scene.add(luceCucina);
clone = punto.clone();
clone.position.copy(luceCucina.position);
