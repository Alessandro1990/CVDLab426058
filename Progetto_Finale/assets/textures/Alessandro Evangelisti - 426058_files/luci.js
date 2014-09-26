// LUCI
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(20, 300, 300);
spotLight.intensity = 1;
scene.add(spotLight);

var light = new THREE.AmbientLight(0x404040);
scene.add(light);
