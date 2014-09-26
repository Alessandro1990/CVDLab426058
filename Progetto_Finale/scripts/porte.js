        loaderMTL = new THREE.OBJMTLLoader();
        loaderMTL.addEventListener('load', function (event) {
                var object = event.content;
                object.scale.set(0.007,0.008,0.03);
                object.position.set(1,0,0.5);
                x = object.position.x;
                y = object.position.y;
                z = object.position.z;
                perno = new THREE.Object3D();
                pernoGeometry = new THREE.SphereGeometry(0.001);
                pernoMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
                perno = new THREE.Mesh(pernoGeometry,pernoMaterial);
                perno.position.set(2,12.7,-4);
                perno.add(object);
                scene.add(perno);
                object.rotation.y = Math.PI/4;
                object.isOpen = false;
                object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                    listaAnimata.push(child);
                child.anim = function() {
                    console.log("Hai aperto una porta!");
                    if(!object.isOpen) {
                        var tweenRotate = new TWEEN.Tween(perno.rotation)
                            .to({x:0, y:Math.PI/2, z:0}, 3000)
                            .easing(TWEEN.Easing.Quadratic.Out)
                            .start();
                            sound=new Sound('opendoor');
                            sound.audio.play();
                        object.isOpen = true;
                    } else {
                        console.log("Hai chiuso una porta!");
                        var tweenRotate = new TWEEN.Tween(perno.rotation)
                            .to({x:0, y:0, z:0}, 3000)
                            .easing(TWEEN.Easing.Quartic.Out)
                            .start();
                            sound=new Sound('closedoor');
                        object.isOpen = false;
                    }
                }
            }
        });

    });


    loaderMTL.load(
        'assets/models/puerta.obj', 
        'assets/models/puerta.mtl', 
        {side: THREE.DoubleSide}
    );

    loaderMTL = new THREE.OBJMTLLoader();
        loaderMTL.addEventListener('load', function (event) {
                var object = event.content;
                object.scale.set(0.007,0.008,0.03);
                object.position.set(1,0,0.5);
                x = object.position.x;
                y = object.position.y;
                z = object.position.z;
                perno2 = new THREE.Object3D();
                pernoGeometry = new THREE.SphereGeometry(0.001);
                pernoMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
                perno2 = new THREE.Mesh(pernoGeometry,pernoMaterial);
                perno2.position.set(1.9,12.7,-3.7);
                perno2.rotation.y = Math.PI;
                perno2.add(object);
                scene.add(perno2);
                object.rotation.y = Math.PI/4;
                object.isOpen = false;
                object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                    listaAnimata.push(child);
                child.anim = function() {
                    console.log("Hai aperto una porta!");
                    if(!object.isOpen) {
                        var tweenRotate = new TWEEN.Tween(perno2.rotation)
                            .to({x:0, y:Math.PI/2, z:0}, 3000)
                            .easing(TWEEN.Easing.Quadratic.Out)
                            .start();
                            sound=new Sound('opendoor');
                            sound.audio.play();
                        object.isOpen = true;
                    } else {
                        console.log("Hai chiuso una porta!");
                        var tweenRotate = new TWEEN.Tween(perno2.rotation)
                            .to({x:0, y:Math.PI, z:0}, 3000)
                            .easing(TWEEN.Easing.Quartic.Out)
                            .start();
                            sound=new Sound('closedoor');
                        object.isOpen = false;
                    }
                }
            }
        });

    });


    loaderMTL.load(
        'assets/models/puerta.obj', 
        'assets/models/puerta.mtl', 
        {side: THREE.DoubleSide}
    );

    loaderMTL = new THREE.OBJMTLLoader();
        loaderMTL.addEventListener('load', function (event) {
                var object = event.content;
                object.scale.set(0.007,0.008,0.03);
                object.position.set(1,0,-0.4);
                x = object.position.x;
                y = object.position.y;
                z = object.position.z;
                perno3 = new THREE.Object3D();
                pernoGeometry = new THREE.SphereGeometry(0.001);
                pernoMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
                perno3 = new THREE.Mesh(pernoGeometry,pernoMaterial);
                perno3.position.set(1.3,12.7,-3.1);
                perno3.add(object);
                scene.add(perno3);
                object.rotation.y = 3*Math.PI/4;
                object.isOpen = false;
                object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                    listaAnimata.push(child);
                child.anim = function() {
                    console.log("Hai aperto una porta!");
                    if(!object.isOpen) {
                        var tweenRotate = new TWEEN.Tween(perno3.rotation)
                            .to({x:0, y:-Math.PI/2, z:0}, 3000)
                            .easing(TWEEN.Easing.Quadratic.Out)
                            .start();
                            sound=new Sound('opendoor');
                            sound.audio.play();
                        object.isOpen = true;
                    } else {
                        console.log("Hai chiuso una porta!");
                        var tweenRotate = new TWEEN.Tween(perno3.rotation)
                            .to({x:0, y:0, z:0}, 3000)
                            .easing(TWEEN.Easing.Quartic.Out)
                            .start();
                            sound=new Sound('closedoor');
                        object.isOpen = false;
                    }
                }
            }
        });

    });


    loaderMTL.load(
        'assets/models/puerta.obj', 
        'assets/models/puerta.mtl', 
        {side: THREE.DoubleSide}
    );

    loaderMTL = new THREE.OBJMTLLoader();
        loaderMTL.addEventListener('load', function (event) {
                var object = event.content;
                object.scale.set(0.007,0.008,0.03);
                object.position.set(0.4,0,-0.9);
                x = object.position.x;
                y = object.position.y;
                z = object.position.z;

                perno4 = new THREE.Object3D();
                pernoGeometry = new THREE.SphereGeometry(0.001);
                pernoMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
                perno4 = new THREE.Mesh(pernoGeometry,pernoMaterial);
                perno4.position.set(3.2,12.7,-3.9);
                perno4.add(object);
                scene.add(perno4);
                object.rotation.y = 3*Math.PI/4;
                object.isOpen = false;
                object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                    listaAnimata.push(child);
                child.anim = function() {
                    console.log("Hai aperto una porta!");
                    if(!object.isOpen) {
                        var tweenRotate = new TWEEN.Tween(perno4.rotation)
                            .to({x:0, y:-Math.PI/2, z:0}, 3000)
                            .easing(TWEEN.Easing.Quadratic.Out)
                            .start();
                            sound=new Sound('opendoor');
                            sound.audio.play();
                        object.isOpen = true;
                    } else {
                        console.log("Hai chiuso una porta!");
                        var tweenRotate = new TWEEN.Tween(perno4.rotation)
                            .to({x:0, y:0, z:0}, 3000)
                            .easing(TWEEN.Easing.Quartic.Out)
                            .start();
                            sound=new Sound('closedoor');
                        object.isOpen = false;
                    }
                }
            }
        });

    });


    loaderMTL.load(
        'assets/models/puerta.obj', 
        'assets/models/puerta.mtl', 
        {side: THREE.DoubleSide}
    );