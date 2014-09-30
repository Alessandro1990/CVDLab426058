 	    // CARICATORI OBJ e OBJ-MTL
      var loader = new THREE.OBJLoader();
      var loaderMTL = new THREE.OBJMTLLoader();

      // LA VIA
      strada = THREE.ImageUtils.loadTexture('assets/textures/strada.jpg');
      strada.wrapS = THREE.RepeatWrapping;
      strada.wrapT = THREE.RepeatWrapping;
      marciapiede = THREE.ImageUtils.loadTexture('assets/textures/marciapiede.jpg');
      marciapiede.wrapS = THREE.RepeatWrapping;
      marciapiede.wrapT = THREE.RepeatWrapping;
      var viaGeometry = new THREE.PlaneGeometry(80,10);
      var viaMaterial = new THREE.MeshLambertMaterial({map: strada, ßside: THREE.DoubleSide });
      var via = new THREE.Mesh(viaGeometry,viaMaterial);
      via.material.map.wrapS = THREE.RepeatWrapping;
      via.material.map.wrapT = THREE.RepeatWrapping;
      via.material.map.repeat.set(3,1);
      via.rotation.x = -Math.PI/2;
      via.position.z = 20;
      scene.add(via);
      var marciapiedeAGeometry = new THREE.CubeGeometry(80,10,1);
      var marciapiedeMaterial = new THREE.MeshLambertMaterial({map: marciapiede});
      var a = new THREE.Mesh(marciapiedeAGeometry,marciapiedeMaterial);
      a.material.map.wrapS = THREE.RepeatWrapping;
      a.material.map.wrapT = THREE.RepeatWrapping;
      a.material.map.repeat.set(15,2);
      a.rotation.x = -Math.PI/2;
      a.position.z = 10;
      scene.add(a);


      // PALAZZO
      intonacoBianco = THREE.ImageUtils.loadTexture('assets/textures/intonacoBianco.jpg');
      intonacoBianco.wrapS = THREE.RepeatWrapping;
      intonacoBianco.wrapT = THREE.RepeatWrapping;

      // COPERCHIO
      coperchioGeometry = new THREE.BoxGeometry(15.2,6.5,0.6);
      coperchioMaterial = new THREE.MeshLambertMaterial({map: intonacoBianco});
      coperchio = new THREE.Mesh(coperchioGeometry,coperchioMaterial);
      coperchio.material.map.wrapS = THREE.RepeatWrapping;
      coperchio.material.map.wrapT = THREE.RepeatWrapping;
      coperchio.material.map.repeat.set(10,10);
      coperchio.position.set(7.6,15,3);
      coperchio.rotation.x = -Math.PI/2;
      scene.add(coperchio);

      // PARTE A
      loader.load('obj/parteA.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});
        material.wrapS = THREE.RepeatWrapping;
        material.wrapT = THREE.RepeatWrapping;

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(0,2.4*i+3,0);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // PARTE B
      loader.load('obj/parteB.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(3,2.4*i+3,3);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // PARTE C
      loader.load('obj/parteC.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(9.5,2.4*i+3,-1.5);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // PARTE D
      loader.load('obj/parteD.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(3,2.4*i+3,0);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // PARTE E
      loader.load('obj/parteE.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(5,2.4*i+3,-1);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // PARTE F
      loader.load('obj/parteF.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(11.5,2.4*i+3,-1.5);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // CAMERE
      loader.load('obj/camere.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
      obj.rotation.y = Math.PI/4
      for(i=0; i<5; i++){ 
      var clone = obj.clone();
          clone.position.set(-2,2.4*i+3,-4);
          clone.scale.y = 0.8;
          clone.scale.y = 0.8;
          scene.add(clone); 
      }  
      });

      // INGRESSO
      loader.load('obj/ingresso.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.position.set(0,0,-2)
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(0,2.4*i+3,-2);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // BAGNO
      loader.load('obj/bagno.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.rotation.y = Math.PI/4
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(2.5,2.4*i+3,-4.5);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // CUCINA
      loader.load('obj/cucina.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(3.5,2.4*i+3,-4.6);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // ARMADIO A MURO
        loader.load('obj/armadio.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(2,2.4*i+3,-2.5);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // SGABUZZINO
      loader.load('obj/sgabuzzino.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.rotation.y = Math.PI/4
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(0,2.4*i+3,-2);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // CORRIDOIO
      loader.load('obj/corridoio.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(1.1,2.4*i+3,-5.3);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // BALCONI LATO MERCATO
      loader.load('obj/balconi.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(3,2.4*i+3,6.5);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // BALCONI LATO CORTILE
      loader.load('obj/balconiC.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        obj.rotation.y = -5*Math.PI/4
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(5.4,2.4*i+3,-4.5);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // BALCONI RETRO
      loader.load('obj/balconiR.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.rotation.y = Math.PI
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(15,2.4*i+3,-1.5);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // BALCONCINI
      loader.load('obj/balconcini.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});

        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        obj.rotation.y = -Math.PI/4;
        for(i=0; i<5; i++){ 
        var clone = obj.clone();
            clone.position.set(-2,2.4*i+3,-4);
            clone.scale.y = 0.8;
            scene.add(clone); 
        }  
      });

      // PIANO TERRA
      pianoTerraGeometry = new THREE.BoxGeometry(14.6,3,10);
      pianoTerraMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, side: THREE.DoubleSide});
      pianoTerra = new THREE.Mesh(pianoTerraGeometry,pianoTerraMaterial);
      pianoTerra.position.set(7.65,1.5,0.6);
      scene.add(pianoTerra);

