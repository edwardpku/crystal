/**
 * @author: kexin
 * @date 2012.08.27
 *
 */
 
window.crystal = window.crystal || {};

(function(crystal) {
	
	var Object3D = crystal.Object3D;

	function SpherePatch() {
		Object3D.call(this);
	}

	SpherePatch.prototype = new Object3D;
	SpherePatch.prototype.constructor = SpherePatch;
	
	SpherePatch.prototype.build = function() {
		
	};
    
    crystal.SpherePatch = SpherePatch;
})(crystal);