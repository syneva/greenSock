var splatScene = {
	init : function(){
		splatScene.scene = new THREE.Scene();
		splatScene.camera =  new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		splatScene.renderer =  new THREE.WebGLRenderer();
		splatScene.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( splatScene.renderer.domElement );
		splatScene.camera.position.z = 5;

		//creating light
		var light = splatScene.letThereBeLight();
		splatScene.scene.add(light);

		//putting skybox
		var skyBoxCube = splatScene.skybox();
		splatScene.scene.add(skyBoxCube);

		//instantiating objects
		splatScene.createObjects();

		for(var i = 0; i<splatScene.objects.length; i++){
			var focus = splatScene.objects[i].getMesh();
			splatScene.scene.add(focus);
		}

		//splatScene.scene.add(floor);
		splatScene.render();
	},

	letThereBeLight: function(){
		var light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0.5, 1, 1 );
		light.position.normalize();
		return light;
	},

	skybox: function(){
		 var urls = [
   			"images/four.png", "images/one.png", "images/five.png", "images/canyon_texture2.JPG", "images/ground.jpeg", "images/five.png"
   				      												//ground									//negativez
		 ];
		 var i =0
		 var materialArray = new Array();
		 for(image in urls){
			materialArray.push(new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture( urls[i]),
				side: THREE.BackSide
				})	
			)
			i++;
		}
		var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
		var geometry = new THREE.CubeGeometry( 1000, 50, 1000);
		skyboxMesh    = new THREE.Mesh( geometry, skyMaterial );
		return skyboxMesh;
	},

	floor: function(){
	},

	createObjects: function(){

		splatScene.objects = [];

		var sphereMaterial = new THREE.MeshPhongMaterial({
	      			// light
	        		specular: '#FFCEB3',
	        		// intermediate
	        		color: '#EECEB3',
	       			// dark
	        		emissive: '#FFCEB3',
	        		shininess: 50
	      		});

		var sphere = new THREE.Mesh(new THREE.SphereGeometry(.5,0,0), sphereMaterial);
		sphere.overdraw = true;
		sphere.position = new THREE.Vector3(0,0,0);
		splatScene.scene.add(sphere);

		//creating moutain
		var mountainMaterial = new THREE.MeshBasicMaterial({
			//color: '#cfcfcf',
			map: THREE.ImageUtils.loadTexture("images/canyon_texture1.jpg")
		});
		var mountain = new THREE.Mesh(new THREE.CubeGeometry(25,1,15), mountainMaterial);
		mountain.position = new THREE.Vector3(0,-2.5,0);
		mountain.rotation.x += 10 * Math.PI / 180;
		splatScene.scene.add(mountain);

	},

	//wrapper to simplify animations on objects
	object : function(dirX, dirY, dirZ, mesh, camera){ 
		this.dirX = dirX;
		this.dirY = dirY;
		this.dirZ = dirZ;
		this.mesh = mesh;
		this.camera = camera;

		this.boxX = 5;
		this.boxY = 5;
		this.boxZ = 5;

		this.setDirX = function(dir){
			this.dirX = dir;
		};
		this.setDirY = function(dir){
			this.dirY = dir;
		}
		this.setDirZ= function(dir){
			this.dirZ = dir;
		}

		this.getDirX = function(){
			return dirX;
		}
		this.getDirY = function(){
			return dirY;
		}
		this.getDirZ = function(){
			return dirZ;
		}
		this.getMesh = function(){
			return this.mesh;
		}
		this.getCamera = function(){
			return this.camera;
		}

		this.checkBoundingBox = function(field, value){
			var limit;
			var value = Math.abs(value);
			if(field == 'x'){
				limit = this.boxX;
			}
			else if(field =='y'){
				limit = this.boxY;

			}
			else{
				limit = this.boxX;
			}

			return (value>limit) ? false : true;			
		};
	},

	 
	animations : {
		//rotation
		rotate : function(focus){
			var focusMesh = focus.getMesh();
			focusMesh.rotation.x += 0.01;
			focusMesh.rotation.y += 0.01;
		},
		translate : function(focus){
			var focusMesh = focus.getMesh();

			//randomize inc value
			var randX = Math.random()/100.0*focus.getDirX();
			var randY = Math.random()/100.0*focus.getDirY();
			var randZ = Math.random()/100.0*focus.getDirY();

			//move object
			focusMesh.translateX(randX);
			focusMesh.translateY(randY);
			focusMesh.translateZ(randZ);

			//check bound box for next it
			if (focus.checkBoundingBox('x', focusMesh.position.x) == false){
				focus.setDirX(focus.getDirX()*-1);
			}
			if(focus.checkBoundingBox('y', focusMesh.position.y) == false){
				focus.setDirY(focus.getDirY()*-1);
			}
			if(focus.checkBoundingBox('z', focusMesh.position.z) == false){
				focus.setDirZ(focus.getDirZ()*-1);
			}

		}
	},

	startAni: function(){
		splatScene.animating = 1;
		splatScene.camera .rotation.x += 10 * Math.PI / 180;

	},

	handleEvents : function(keyCode){
		switch(keyCode){
			//start animation on space
			case 32:
				splatScene.startAni();
				break;
			case 65: //tilt up with 'a'
				splatScene.camera.rotation.x += .01;
				splatScene.camera.updateProjectionMatrix();
				//alert('move forward!');
				break;
			case 83: //tilt down with 'b'
				splatScene.camera.rotation.x -= .01;
				splatScene.camera.updateProjectionMatrix();
				break;
			case 37: //look left with 'left'
				splatScene.camera.rotation.y += .05;  
				splatScene.camera.updateProjectionMatrix();
				break;
			case 39: //look right with 'right'
				splatScene.camera.rotation.y-= .05;
				splatScene.camera.updateProjectionMatrix();
				break;
			case 70: //move forward with 'f'
				splatScene.camera.translateZ(-.1);
				splatScene.camera.updateProjectionMatrix();
				break;
			case 66: //move backward with 'b'
				splatScene.camera.translateZ(.1);
				splatScene.camera.updateProjectionMatrix();
				break;
			default:
				//alert(keyCode);
		}
	},
	
	// //Function to render scene
	render: function(){
		requestAnimationFrame(splatScene.render);

		//if( splatScene.video.readyState === splatScene.video.HAVE_ENOUGH_DATA ){
  		//	splatScene.videoTexture.needsUpdate = true;
		//}

		for(var i = 0; i<splatScene.objects.length; i++){
			var focus = splatScene.objects[i];
			splatScene.animations.rotate(focus);
			splatScene.animations.translate(focus);
			if(splatScene.objects[i].getCamera()){
				splatScene.objects[i].getMesh().visible = false;
				splatScene.objects[i].getCamera().updateCubeMap( splatScene.renderer, splatScene.scene );
				splatScene.objects[i].getMesh().visible = true;
			}
		}

		splatScene.renderer.render(splatScene.scene, splatScene.camera);
	}
	
};

splatScene.init();


window.addEventListener('keydown', function(event) {
	splatScene.handleEvents(event.keyCode);
});