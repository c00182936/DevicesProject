//*******************************
//	Paddle
//	Tomás ryan
//*******************************
//	19/11:Tomás:made
//*******************************
//	needs: collision class
//*******************************
/**
 * The paddle that the player will control
 * @constructor
 */
function Paddle() {
	this.sprite;
	this.positionX=0;
	this.positionY=0;
	this.width=30;
	this.height=30;
/**
 * loads sprite for the paddle
 * @param {vect2} newScene -
 */
this.LoadPaddleSprite = function() {
		this.sprite = new Image();
		this.sprite.addEventListener("load", funtion()) 
		{
			this.width = this.sprite.width;
			this.height = this.sprite.height;
		}
		this.sprite.src = "insertSpritelocationHere";
}
/**
 * moves the paddle to a new location
 * @param {vect2} newPos - new postion of the paddle
 */
this.movepaddle = function(newPosx, newPosy) {
	this.positionX = newPosx; // this plaes the padde directly to where the new position is, maybe an acceleration here?
	this.positionY = newPosy;
}
this.getY = function();
{
	return this.positionY;
}
this.getX = function();
{
	return this.positionX;
}
this.draw=function()
{
	app.ctx.fillStyle= "blue";
	app.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);//draws a rectangle as a placeholder
}


}

