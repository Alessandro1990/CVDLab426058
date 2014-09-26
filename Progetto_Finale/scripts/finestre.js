loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.15,0.08,0.1);
        object.rotation.y = Math.PI;
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(1.5,2.4*i + 4,7);
          scene.add(clone);
        }
        object.scale.set(0.1,0.08,0.1);
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(4.1,2.4*i+4,6.6);
          scene.add(clone);
        }
        object.scale.set(0.07,0.08,0.1);
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(5.7,2.4*i+4,6.6);
          scene.add(clone);
        }
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(6.7,2.4*i+4,6.6);
          scene.add(clone);
        }
        object.scale.set(0.12,0.08,0.1);
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(8.3,2.4*i+4,6.6);
          scene.add(clone);
        }
        object.scale.set(0.1,0.08,0.1);
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(10.3,2.4*i+4,6.6);
          scene.add(clone);
        }
        object.scale.set(0.1,0.08,0.1);
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(12.2,2.4*i + 4,7);
          scene.add(clone);
        }
        object.scale.set(0.12,0.08,0.1);  
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(14,2.4*i + 4,7);
          scene.add(clone);
        }
        // CAMERA GENITORI
        object.rotation.y = -5*Math.PI/4;
        object.scale.set(0.1,0.06,0.2);   
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(-0.95,2.4*i+4,-3.2);
          scene.add(clone);
          clone.isOpen = false;
          perno = new THREE.Object3D();
          //pernoGeometry = new THREE.SphereGeometry(0.01);
          //pernoMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
          //perno = new THREE.Mesh(pernoGeometry,pernoMaterial);
          perno.position.copy(clone.position);
          perno.position.x += 0.4;
          perno.position.z += 0.4;
          clone.traverse(function (child) {
            if (i == 4 && child instanceof THREE.Mesh) {
                    perno.add(clone);
                    clone.position.set(-0.4,0,-0.4);
                    scene.add(perno);
                    listaAnimata.push(child);
                    child.anim = function() {
                    console.log("Hai aperto la finestra!");
                    if (!clone.isOpen) {
                        clone.isOpen = true;
                        var tweenRotate = new TWEEN.Tween(perno.rotation)
                            .to({x:0, y:Math.PI/2, z:0}, 3000)
                            .easing(TWEEN.Easing.Quadratic.Out)
                            .start();
                            sound=new Sound('opendoor');
                            sound.audio.play();
                            object.isOpen = true;
                    } 
                    else {
                        console.log("Hai chiuso la finestra!");
                        var tweenRotate = new TWEEN.Tween(perno.rotation)
                            .to({x:0, y:0, z:0}, 3000)
                            .easing(TWEEN.Easing.Quartic.Out)
                            .start();
                            sound=new Sound('closedoor');
                            clone.isOpen = false;
                    }
                }
            }
      });
}
        // CAMERA RAGAZZI
        object.rotation.y = -Math.PI/4;
        object.scale.set(0.1,0.06,0.2);  
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(2.79,2.4*i+4,-6.96);
          scene.add(clone);
        }
        // BAGNO
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(4.35,2.4*i+4,-5.4);
          scene.add(clone);
        }
        // SALOTTO
        object.rotation.y = Math.PI/2;
        object.scale.set(0.14,0.06,0.2);  
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(0.2,2.4*i+4,-1);
          scene.add(clone);
        }
        // CUCINA
        object.rotation.y = -Math.PI/2;
        object.scale.set(0.1,0.06,0.2);  
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(5.25,2.4*i+4,-2.2);
          scene.add(clone);
        }
      });


      loaderMTL.load(
        'assets/models/window.obj', 
        'assets/models/window.mtl', 
        {side: THREE.DoubleSide}
      );

      loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.08,0.125,0.2);
        object.rotation.y = -5*Math.PI/4;
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(-1.6,2.4*i+3.97,-3.7);
          scene.add(clone);
        }
        object.scale.set(0.08,0.125,0.2);
        object.rotation.y = -Math.PI/4;
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(2.18,2.4*i+3.97,-7.5);
          scene.add(clone);
        }
        for (i=0; i<5; i++) {
          clone = object.clone();
          clone.position.set(5,2.4*i+3.97,-4.7);
          scene.add(clone);
        }
      });


      loaderMTL.load(
        'assets/models/exterior-door-03.obj', 
        'assets/models/exterior-door-03.mtl', 
        {side: THREE.DoubleSide}
      );

