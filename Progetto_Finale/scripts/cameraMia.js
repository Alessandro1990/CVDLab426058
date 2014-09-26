// PAVIMENTI
      marmo = THREE.ImageUtils.loadTexture('assets/textures/marmo.png');
      pavimentoCameraMiaGeometry = new THREE.PlaneGeometry(2*Math.sqrt(2),(2*Math.sqrt(2)));
      pavimentoCameraMiaMaterial = new THREE.MeshLambertMaterial({map: marmo});
      pavimentoCameraMia = new THREE.Mesh(pavimentoCameraMiaGeometry,pavimentoCameraMiaMaterial);
      pavimentoCameraMia.rotation.x = -Math.PI/2
      pavimentoCameraMia.rotation.z = Math.PI/4
      pavimentoCameraMia.position.set(2,12.7,-6);
      scene.add(pavimentoCameraMia);

// TV
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.2,0.2,0.2);
        object.position.set(1.35,13.3,-6.85);
        object.rotation.y = 5*Math.PI/4;
        scene.add(object);

        video.load(); 
        videoImage = document.createElement('canvas');
        videoImage.width = 480;
        videoImage.height = 204;
        videoImageContext = videoImage.getContext( '2d' );
        videoImageContext.fillStyle = '#000000';
        videoImageContext.fillRect(0, 0, videoImage.width, videoImage.height);
        videoTexture = new THREE.Texture(videoImage);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        
        var movieMaterial = new THREE.MeshBasicMaterial( {map: videoTexture, overdraw: true, side:THREE.DoubleSide});
        var movieGeometry = new THREE.PlaneGeometry(3,2);
        var movieScreen = new THREE.Mesh(movieGeometry, movieMaterial);
        movieScreen.position.set(0,1.5,-0.25);
        movieScreen.rotation.y = Math.PI;
        object.add(movieScreen);

        object.isOpen = false;
          object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                    listaAnimata.push(child);
                    child.anim = function() {
                    console.log("Hai acceso la TV!");
                    if (!object.isOpen) {
                        video.src = "video/tgr.mp4";           
                        video.play();
                        object.isOpen = true;
                    } 
                    else {
                        console.log("Hai spento la TV!");
                        video.pause();
                        video.currentTime = 0;  
                        object.isOpen = false;
                    }
                }
            }
      });
  });


      loaderMTL.load(
        'assets/models/tv.obj', 
        'assets/models/tv.mtl', 
        {side: THREE.DoubleSide}
      );

// TAPPETO BLU
    loaderMTL = new THREE.OBJMTLLoader();
      loaderMTL.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(0.005,0.005,0.005);
        object.rotation.y = 3*Math.PI/4;
        object.position.set(2.3,12.7,-6.3);
        scene.add(object);
      });

      loaderMTL.load(
        'assets/models/carpet.obj', 
        'assets/models/carpet.mtl', 
        {side: THREE.DoubleSide}
      );