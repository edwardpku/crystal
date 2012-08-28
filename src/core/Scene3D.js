/**
 * @author: kexin
 * @date 2012.08.27
 *
 */

window.crystal = window.crystal || {};

(function(crystal) {
    var Matrix3D = crystal.Matrix3D;
    var Camera = crystal.Camera;
    var Object3D = crystal.Object3D;
    
    
    function Scene3D() {
        this.world = [];
    }

    Scene3D.prototype.addObject3D = function(o) {
        this.world.push(o);
    };

    Scene3D.prototype.removeObject3D = function(o) {
        var n = this.world.length;
        for (var i = 0; i < n; i ++) {
            if (this.world[i] == o) {
                this.world.splice(i, 1);
                return;
            }
        }
    };
	
    Scene3D.prototype.clear = function() {
        this.world = [];
    };

    Scene3D.prototype.render = function() {
	
    };

    Scene3D.prototype.viewPort = function(width, height) {

    };

    Scene3D.prototype.frustum = function(left, right, bottom, top, near, far) {

    };

    Scene3D.prototype.perspective = function(fovy, aspect, near, far) {

    };

    Scene3D.prototype.lookAt = function(eye, target, up) {

    };

    crystal.Scene3D = Scene3D;
})(crystal);