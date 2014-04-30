var critter_anim;

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
		splatScene.animating = 0;
		splatScene.time = 20;

		for(var i = 0; i<splatScene.objects.length; i++){
			var focus = splatScene.objects[i].getMesh();
			splatScene.scene.add(focus);
		}
		
		var floor = splatScene.floor();
		splatScene.scene.add(floor);
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
		var geometry = new THREE.CubeGeometry( 1000, 1000, 1000);
		skyboxMesh    = new THREE.Mesh( geometry, skyMaterial );
		return skyboxMesh;
	},

	floor: function(){
			var geometry = new THREE.PlaneGeometry( 1000, 1000, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
		var floorTexture = new THREE.ImageUtils.loadTexture( 'images/canyon_texture2.JPG' );
		//floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
		
	// DoubleSide: render texture on both sides of mesh
	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
		var floor = new THREE.Mesh( geometry, floorMaterial );
		floor.material.side = THREE.DoubleSide;
		floor.rotation.x = (90);
		floor.position.y = -100 ;
		return floor;
	},

	createObjects: function(){

		splatScene.objects = [];

		// var sphereMaterial = new THREE.MeshPhongMaterial({
	 //      			// light
	 //        		specular: '#FFCEB3',
	 //        		// intermediate
	 //        		color: '#EECEB3',
	 //       			// dark
	 //        		emissive: '#FFCEB3',
	 //        		shininess: 50
	 //      		});

		// var sphere = new THREE.Mesh(new THREE.SphereGeometry(.5,0,0), sphereMaterial);
		// sphere.overdraw = true;
		// sphere.position = new THREE.Vector3(0,0,0);
		// splatScene.scene.add(sphere);

		//creating critter 
		var critterTexture = new THREE.ImageUtils.loadTexture("images/red_critter.png"); //red_sprite_critter.png
		//critter_anim = new TextureAnimator( critterTexture, 26, 1, 26, 75 ); // texture, #horiz, #vert, #total, duration.
		var critterMaterial = new THREE.MeshBasicMaterial( { map: critterTexture, side:THREE.DoubleSide, transparent: true } );
		var critterGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
		var critter = new THREE.Mesh(critterGeometry, critterMaterial);
		critter.position.set(0,0,0); //= new THREE.Vector3(0,0,0);
		splatScene.scene.add(critter);


		//creating moutain
		var mountainMaterial = new THREE.MeshBasicMaterial({
			//color: '#cfcfcf',
			map: THREE.ImageUtils.loadTexture("images/canyon_texture1.jpg")
		});
		var mountain = new THREE.Mesh(new THREE.CubeGeometry(25,95,15), mountainMaterial);
		mountain.position = new THREE.Vector3(0,-48.39 ,0);
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

	startAni: function(state){
		//console.log(state);
		switch(state){
			case 0:
				splatScene.animating = 1;
				break;
			case 1:
				// console.log(splatScene.camera.rotation.x);
				if(splatScene.camera.rotation.x<.4 )
					splatScene.camera.rotation.x += 1*Math.PI/180;
				else
					splatScene.animating++;
				break;
			case 2:
				splatScene.time+=1;
				var time = splatScene.time/24;
				var speed = -.15*time+.5*1*time*time;
				speed *=-1;
				if(splatScene.camera.position.y<2.16 ){
					splatScene.camera.translateZ(speed);
					console.log(splatScene.camera.position.y);
				}
				else{
					//splatScene.camera.translateZ(-9.3 -splatScene.camera.position.z);
					//splatScene.camera.position.y =2.16;
					splatScene.animating++;
				}
				break;
			case 3:
				//console.log(splatScene.time);
				splatScene.time+=1;
				var time = splatScene.time/24;
				var speed = -.15*time+.5*1*time*time;
				speed*=-1;

				//console.log(speed);
				if(splatScene.camera.rotation.x>-1.3 ){
					splatScene.camera.rotation.x += speed/4*Math.PI/180;
					//bbbsplatScene.camera.translateY(-.05);
					splatScene.camera.translateZ(speed/100);
				 	splatScene.camera.updateProjectionMatrix();
				}
				else{
					//console.log(splatScene.camera.rotation.x);
					//splatScene.camera.rotation.x = -1.3;
					//splatScene.camera.rotation.x += speed/4*Math.PI/180;
					splatScene.animating++;
					//splatScene.time = 0;
				}
			// 	break;
			// case 4:
			// 	splatScene.time+=1;
			// 	var time = splatScene.time/24;
			// 	var speed = -.15*time+.5*7*time*time;
			// 	speed *= -1;
			// 	//console.log(splatScene.camera.position.z)
			// 	//console.log(speed);
			// 	if(splatScene.camera.position.z>-25){
			// 		splatScene.camera.translateZ(speed/100);
			// 		splatScene.camera.updateProjectionMatrix();
			// 	}
			// 	else{
			// 		//splatScene.camera.translateZ(-10.157-splatScene.camera.position.z);
			// 		splatScene.animating++;
			// 	}
			// 	break;
		}
		//splatScene.animating = 1;
		//splatScene.camera .rotation.x += 10 * Math.PI / 180;
	},
	eventComplete: function(){
		console.log("eventComplete");
	},

	handleEvents : function(keyCode){
		switch(keyCode){
			case 38: //tilt up with 'up'
			//start animation on space
			case 32:
				splatScene.startAni(splatScene.animating);
				break;
			case 65: //tilt up with 'a'
				splatScene.camera.rotation.x += .01;
				splatScene.camera.updateProjectionMatrix();
				//alert('move forward!');
				break;
			case 40: //tilt down with 'down'
				splatScene.camera.rotation.x -= .01;
				splatScene.camera.updateProjectionMatrix();
				console.log(splatScene.camera.rotation.x);
				break;
			case 37: //look left wisth 'left'
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
				console.log(splatScene.camera.position.z);
				break;
			case 66: //move backward with 'b'
				splatScene.camera.translateZ(1 );
				splatScene.camera.updateProjectionMatrix();
				break;
			default:
				//alert(keyCode);
		}
	},
	
	// //Function to render scene
	render: function(){
		requestAnimationFrame(splatScene.render);

		if(splatScene.animating > 0){
			splatScene.startAni(splatScene.animating);
		}
		//if( splatScene.video.readyState === splatScene.video.HAVE_ENOUGH_DATA ){
  		//	splatScene.videoTexture.needsUpdate = true;
		//}b
		// if(splatScene.aniState >0){

		// }
		// for(var i = 0; i<splatScene.objects.length; i++){
		// 	var focus = splatScene.objects[i];
		// 	splatScene.animations.rotate(focus);
		// 	splatScene.animations.translate(focus);
		// 	if(splatScene.objects[i].getCamera()){
		// 		splatScene.objects[i].getMesh().visible = false;
		// 		splatScene.objects[i].getCamera().updateCubeMap( splatScene.renderer, splatScene.scene );
		// 		splatScene.objects[i].getMesh().visible = true;
		// 	}
		// }
		splatScene.renderer.render(splatScene.scene, splatScene.camera);
	}
	
};

function TextureAnimator(texture, tilesHoriz, tilesVert, numTiles, tileDispDuration) 
{	
	// note: texture passed by reference, will be updated by the update function.
		
	this.tilesHorizontal = tilesHoriz;
	this.tilesVertical = tilesVert;
	// how many images does this spritesheet contain?
	//  usually equals tilesHoriz * tilesVert, but not necessarily,
	//  if there at blank tiles at the bottom of the spritesheet. 
	this.numberOfTiles = numTiles;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
	texture.repeat.set( 1 / this.tilesHorizontal, 1 / this.tilesVertical );

	// how long should each image be displayed?
	this.tileDisplayDuration = tileDispDuration;

	// how long has the current image been displayed?
	this.currentDisplayTime = 0;

	// which image is currently being displayed?
	this.currentTile = 0;
		
	this.update = function( milliSec )
	{
		this.currentDisplayTime += milliSec;
		while (this.currentDisplayTime > this.tileDisplayDuration)
		{
			this.currentDisplayTime -= this.tileDisplayDuration;
			this.currentTile++;
			if (this.currentTile == this.numberOfTiles)
				this.currentTile = 0;
			var currentColumn = this.currentTile % this.tilesHorizontal;
			texture.offset.x = currentColumn / this.tilesHorizontal;
			var currentRow = Math.floor( this.currentTile / this.tilesHorizontal );
			texture.offset.y = currentRow / this.tilesVertical;
		}
	};
};

splatScene.init();


window.addEventListener('keydown', function(event) {
	splatScene.handleEvents(event.keyCode);
});