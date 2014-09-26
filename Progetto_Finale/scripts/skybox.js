// urls of the images, one per half axis
var urls = [
  'assets/skybox/pos-x.png',
  'assets/skybox/neg-x.png',
  'assets/skybox/pos-y.png',
  'assets/skybox/neg-y.png',
  'assets/skybox/pos-z.png',
  'assets/skybox/neg-z.png'
];

var cubemap = THREE.ImageUtils.loadTextureCube(urls);
cubemap.format = THREE.RGBFormat;

var shader = THREE.ShaderLib['cube'];
shader.uniforms['tCube'].value = cubemap;

var skyBoxMaterial = new THREE.ShaderMaterial( {
  fragmentShader: shader.fragmentShader,
  vertexShader: shader.vertexShader,
  uniforms: shader.uniforms,
  depthWrite: false,
  side: THREE.BackSide
});

skyBoxMesh = new THREE.Mesh(new THREE.CubeGeometry(1000, 1000, 1000), skyBoxMaterial);
scene.add(skyBoxMesh);