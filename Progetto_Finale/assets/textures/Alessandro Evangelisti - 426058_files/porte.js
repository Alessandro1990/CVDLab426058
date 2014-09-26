// PORTE
loader.load('assets/models/porta.obj', function (obj) {
    var material1 = new THREE.MeshPhongMaterial({color:0xFFFFFF, metal:true, shininess:0});
    var material2 = new THREE.MeshPhongMaterial({color:0xE5F9FF, metal:true, shininess:25, opacity:0.5, transparent:true});
    var tex1 = THREE.ImageUtils.loadTexture("assets/textures/porta.jpg");
    var material3 = new THREE.MeshPhongMaterial({map:tex1});
    obj.scale.set(0.005,0.005,0.005);
    obj.rotation.set.x = -Math.PI/2;
    obj.children[0].material = material3;
    obj.position.set(0,0,10);
  });