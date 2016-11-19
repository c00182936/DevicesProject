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
	this.position
	this.width
	this.height
}
/**
 * loads sprite for the paddle
 * @param {vect2} newScene -
 */
this.LoadPaddleSprite = function() {
		this.sprite = new Image();
		this.sprite.addEventListener("load", funtion()) {
			this.width = this.sprite.width;
			this.height = this.sprite.height;
		}
		this.sprite.src = "insertSpritelocationHere";
}
/**
 * moves the paddle to a new location
 * @param {vect2} newPos - new postion of the paddle
 */
this.movepaddle = function(newPos) {
	this.position = newPos; // this plaes the padde directly to where the new position is, maybe an acceleration here?
}
