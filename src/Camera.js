/**
 * @author: kexin
 * @date 2012.08.27
 *
 */
 
window.crystal = window.crystal || {};

(function(crystal){
	
	function Camera() {
		this._viewPoint = new Vector3D;
		this._target = new Vector3D;
		this._up = new Vector3D;
		this._right = new Vector3D;
		this._viewMatrix = new Matrix3D;
	};
	
	Camera.prototype.setViewPoint = function(v) {
		this._viewPoint = v;
	};

	Camera.prototype.setTarget = function(t) {
		this._target = t;
	};
	
	Camera.prototype.setUp = function(up) {
		this._up = up;
	};

	Camera.prototype.setRight = function(r) {
		this._right = r;
	};

	Camera.prototype.getViewMatrix() {
		
	};

	crystal.Camera = Camera;

})(crystal)
