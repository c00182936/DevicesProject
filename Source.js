//*******************************
//	Main file
//	Dermot Mac Conville
//*******************************
//	21/11 Dermot Made
//*******************************


/**
 * function that defines the game loop
 * 
 */
 var ctx
 app={}
 function main()
 {
	canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	//document.addEventListener("keydown",keyDownHandler);//solely for placeholder, we'll replace with touch once we have things working a bit better
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	var bar= new Paddle();
	bar.movepaddle(20,20);
 	setInterval(onTimerTick, 33.3);//to update at 30fps

	var scene =new SceneManager();
	app.ctx = canvas.getContext('2d');
	scene.addScene("game");//still don't know how to add to scenes
	scene.addScene("m");
	console.log(scene.getScene());
 	function onTimerTick() {//update loop to be called
 		draw();
 	}

 	function draw(){
		app.ctx.clearRect(0,0,canvas.width, canvas.height);//clears before drawing
		bar.draw();
 	}
 }