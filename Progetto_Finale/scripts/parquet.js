parquet = THREE.ImageUtils.loadTexture('assets/textures/parquet.jpg');
parquet.wrapS = THREE.RepeatWrapping;
parquet.wrapT = THREE.RepeatWrapping;

//SHAPE
var parquetShape = new THREE.Shape();
parquetShape.moveTo(0,0);
parquetShape.lineTo(5,0);
parquetShape.lineTo(5,1);
parquetShape.lineTo(5.4,1);
parquetShape.lineTo(5.4,4.6);
parquetShape.lineTo(4.9,5.1);
parquetShape.lineTo(3.4,3.6);
parquetShape.lineTo(2.5,4.5);
parquetShape.lineTo(0,2);
parquetShape.lineTo(0,0);

var parquetGeometry = new THREE.ShapeGeometry(parquetShape);
var parquetMaterial = new THREE.MeshLambertMaterial({map: parquet});
var parquetMesh = new THREE.Mesh(parquetGeometry, parquetMaterial);
parquetMesh.material.map.wrapS = THREE.RepeatWrapping;
parquetMesh.material.map.wrapT = THREE.RepeatWrapping;
parquetMesh.material.map.repeat.set(2,2);
parquetMesh.position.set(0,12.7,0);
parquetMesh.rotation.x = -Math.PI/2;
scene.add(parquetMesh);








