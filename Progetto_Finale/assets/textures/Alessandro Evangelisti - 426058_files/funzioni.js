
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
      camera.position.set(2,15,-6);
      camera.lookAt(new THREE.Vector3(-1,16,-3));

      var step = 0;

      renderer = new THREE.WebGLRenderer( { antialias: false } );
      renderer.setClearColor(scene.fog.color, 1);
      renderer.setSize( window.innerWidth, window.innerHeight );
      window.addEventListener( 'resize', onWindowResize, false );

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
          var delta = clock.getDelta();
          THREE.AnimationHandler.update(delta/3);
          pathControls.update(delta);
        }
        requestAnimationFrame(render);
        if (mode == 2) {
          pointerLockControls.isOnObject(false);
          ray.ray.origin.copy(pointerLockControls.getObject().position);
          ray.ray.origin.y -= 1.7;
          var intersections = ray.intersectObjects(objects);
          if ( intersections.length > 0 ) {
            var distance = intersections[ 0 ].distance;
            if (distance > 0 && distance < 1.7) {
              pointerLockControls.isOnObject(true);
            }
          }
          pointerLockControls.update();
        }
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
          mode = 1;
          var points = [];
          points.push([2,20,0]);
          points.push([10,20,0]);
          points.push([20,20,0]);
          points.push([2,10,0]);
          camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
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
        blocker.style.display = '-webkit-box';
        blocker.style.display = '-moz-box';
        blocker.style.display = 'box';
        instructions.style.display = '';
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.up = new THREE.Vector3(0,1,0);
        scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
        pointerLockControls = new THREE.PointerLockControls(camera);
        pointerLockControls.getObject().position.set(3,10,-0.5);
        pointerLockControls.getObject().scale.set(.01,.01,.01),
        scene.add(pointerLockControls.getObject());
        ray = new THREE.Raycaster();
        ray.ray.direction.set(0,1.7,0);
      }








