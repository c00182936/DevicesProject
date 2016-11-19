//*******************************
//	SceneManager
//	Tomás ryan
//*******************************
//	19/11:Tomás:made
//*******************************


/**
 * Manages the various scenes, and handles switching between them.
 * @constructor
 */
function SceneManager() {
	this.currentScene;
	this.sceneList;

	/**
	 * Push string name of scne to list
	 * @param {Scene} newScene - The scene that will be added.
	 */
	this.addScene = function(newScene) { // check if there is a scene first
		if(sceneList != null) 
		{
			sceneList.push(newScene);
		}
		else 
		{
			this.sceneList = new Array(newScene);
		}
	}
	/**
	 * returns the currentScene
	 * @param {}.
	 * @return currentScene - the current Scene
	 */
	this.getScene = function() {
		return currentScene;
	}

	/**
	 * Moves to the indicated scene.
	 * @param {string} scene - Target scene.
	 */
	this.goToScene = function(scene) {
		currentScene = scene;
	}
}