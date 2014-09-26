      var controls = new function () {
        this.controls = "PointerLockControls"};

        var gui = new dat.GUI();
        var spGui = gui.addFolder("Vista");

        spGui.add(controls, 'controls', ["PointerLockControls", "PathControls", "TrackballControls"]).onChange(function (e) {
        console.log(e);
        switch (e) {
          case "PointerLockControls":
          impostaPointer();
          break;
          case "PathControls":
          impostaPath();
          break;
          case "TrackballControls":
          impostaTrack();
          break;
        }

      });

       
        // PATH per il controllo aereo
        var points = [[-1,18,-4]];

        // world
        //if (mode == 1)
        //  scene.add(pathControls.animationParent);



        // crea il tracciato per debug
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

        $('body').append( renderer.domElement );

