
var container;
var camera, controls, scene, renderer;
var cross;
var clock = new THREE.Clock();
var stats = initStats();
var mode = 9;
var objects = [];
var ray;
var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(0,30,120);
camera.lookAt(new THREE.Vector3(0,0,0));

var step = 0;

renderer = new THREE.WebGLRenderer( { antialias: false } );
renderer.setClearColor(scene.fog.color, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
window.addEventListener('resize', onWindowResize, false );

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function render() {
  console.log("RENDER");
  if (mode != 2) {
    stats.update();
    blocker.style.display = 'none';
    instructions.style.display = 'none';
  }
  if (mode == 0){
    trackballControls.update();
  }
  if (mode == 1) {
    pathControls.animation.play(true, 0);
    var delta = clock.getDelta();
    THREE.AnimationHandler.update(delta);
    pathControls.update(delta);
  }
  requestAnimationFrame(render);
  if (mode == 2) {
    origin = pointerLockControls.getObject().position;
    direction = pointerLockControls.getDirection(new THREE.Vector3());
    ray = new THREE.Raycaster(origin, direction);
    if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
              videoImageContext.drawImage( video, 0, 0 );
            if ( videoTexture ) 
              videoTexture.needsUpdate = true;
            }
    pointerLockControls.update();
  }
  TWEEN.update();
  renderer.render(scene, camera);
}

function initStats() {
  stats = new Stats();
          stats.setMode(0); // 0: fps, 1: ms
          $('body').append(stats.domElement);
          return stats;
        }

        function impostaTrack() {
          mode = 0;
          camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
          camera.position.set(-30,40,30);
          camera.up = new THREE.Vector3(0,1,0);
          camera.lookAt(scene.position);
          trackballControls = new THREE.TrackballControls(camera);
        }

        function impostaPath() {
          console.log("PATH");
          mode = 1;
          var points = [];
          points.push([2,13.8,-1]);
          points.push([4,13.8,-1]);
          points.push([4,13.8,-4]);
          points.push([3,13.8,-6]);
          points.push([0,13.8,-4]);
          points.push([2,13.8,-1]);
          camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
          camera.position.set(2,13,-1);
          pathControls = new THREE.PathControls(camera);
          pathControls.waypoints = points;
          pathControls.duration = 80
          pathControls.useConstantSpeed = true;
          pathControls.lookSpeed = 0.2;
          pathControls.lookVertical = true;
          pathControls.lookHorizontal = true;
          pathControls.verticalAngleMap = { srcRange: [ 0, 2 * Math.PI ], dstRange: [ 1.1, 3.8 ] };
          pathControls.horizontalAngleMap = { srcRange: [ 0, 2 * Math.PI ], dstRange: [ 0.3, Math.PI - 0.3 ] };
          pathControls.lon = 180;
          pathControls.init();
          scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
          scene.add(pathControls.animationParent);
            // add some objects to trace path
            var pathGeometry = new THREE.Geometry();
            points.forEach(function (point) {
              var s = new THREE.Mesh(
                new THREE.SphereGeometry(0.1),
                new THREE.MeshLambertMaterial({color: 0xff0000})
                );
              s.position.set(point[0], point[1], point[2]);
              scene.add(s);
              pathGeometry.vertices.push(new THREE.Vector3(point[0],point[1],point[2]));
            });

            var path = new THREE.Line(pathGeometry, new THREE.LineBasicMaterial({color: 0xff0000}));

            scene.add(path);  
            pathControls.animation.play(true, 0);
          }

          function impostaPointer() {
            console.log("IMPOSTA POINTER");
            mode = 2;
            document.addEventListener('mousedown', onDocumentMouseDown, false);
            blocker.style.display = '-webkit-box';
            blocker.style.display = '-moz-box';
            blocker.style.display = 'box';
            instructions.style.display = '';
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            camera.up = new THREE.Vector3(0,1,0);
            scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
            pointerLockControls = new THREE.PointerLockControls(camera);
            pointerLockControls.getObject().position.set(3,10,-0.5);
            pointerLockControls.getObject().scale.set(0.1,0.1,0.1);
            manoTexture = THREE.ImageUtils.loadTexture('assets/textures/mano.png');
            manoGeometry = new THREE.SphereGeometry(0.1);
            manoMaterial = new THREE.MeshLambertMaterial({color: 0xa52a2a});
            mano = new THREE.Mesh(manoGeometry,manoMaterial);
            mano.position.z = -8;
            mano.position.y = -1;
            pointerLockControls.getPitchObject().add(mano);
            scene.add(pointerLockControls.getObject());
          }

          function onDocumentMouseDown(event) {
            console.log("MOUSE DOWN");
            console.log(listaAnimata.length);
            var intersects = ray.intersectObjects(listaAnimata);
            console.log(intersects.length);
            if (intersects.length > 0) {
              console.log("INTERSECT!");
              console.log("Clicked an animated object.");
              intersects[0].object.anim() && intersects[0].object.anim;
            }
          }

          function Sound(name) {
          this.name = name;
          this.audio = document.createElement('audio');
          var source = document.createElement('source');
          source.src = 'assets/sound/' + name + '.mp3';
          this.audio.appendChild(source);
        }
      
        Sound.prototype.play = function() {
          this.audio.play();
        };








