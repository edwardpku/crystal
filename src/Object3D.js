/**
 * @author: kexin
 * @date 2012.08.27
 *
 */
 
window.crystal = window.crystal || {};

(function(crystal) {
	
	function Object3D() {
		this._vertices = [];
		this._indices = [];
		this._uvtData = [];
		this._modelMatrix = new Matrix3D;
	}
	
	Object3D.prototype.getVertices = function() {
		return this._vertices;
	};
	
	Object3D.prototype.getIndices = function() {
		return this._indices;
	};
	
	Object3D.prototype.getUvtData = function() {
		return this._uvtData;
	};	

	Object3D.prototype.setVertices = function(v) {
		this._vertices = v;
	};

	Object3D.prototype.setIndices = function(i) {
		this._indices = i;
	};

	Object3D.prototype.setUvtData = function(uvt) {
		this._uvtData = uvt;
	};
	
	Object3D.prototype.getModelMatrix = function() {
		return this._modelMatrix;
	};

	Object3D.prototype.translate = function(dx, dy, dz) {
		this._modelMatrix.appendTranslate(dx, dy, dz);
	};

	Object3D.prototype.scale = function(sx, sy, sz) {
		this._modelMatrix.appendScale(sx, sy, sz);
	};

	Object3D.prototype.rotate = function(angle, axis) {
		this._modelMatrix.appendRotate(angle, axis);
	};

	crystal.Object3D = Object3D;
})(crystal);
