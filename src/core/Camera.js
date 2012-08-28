/**
 * @author: kexin
 * @date 2012.08.27
 *
 */
 
window.crystal = window.crystal || {};

(function(crystal){
    var Vector3D = crystal.Vector3D;
    var Matrix3D = crystal.Matrix3D;
    
    function Camera() {
        this._eye = new Vector3D;
        this._target = new Vector3D;
        this._up = new Vector3D;
        this._viewMatrix = new Matrix3D;
    };

    // v: Vector3D
    Camera.prototype.setEye = function(v) {
        this._eye = v;
    };
	
    // t: Vector3D
    Camera.prototype.setTarget = function(t) {
        this._target = t;
    };
    
    // up: Vector3D
    Camera.prototype.setUp = function(up) {
        this._up = up;
    };

    Camera.prototype.getViewMatrix() {
        var z = this._target.subtract(this._eye);
        z.normalize();
        
        var x = z.crossProduct(this._up);
        x.normalize();
        
        var y = x.crossProduct(z);
        y.normalize();
        
        var m = new Matrix3D([
            x.x,                      y.x,                      z.x,                      0,
            x.y,                      y.y,                      z.y,                      0,
            x.z,                      y.z,                      z.z,                      0,
            -x.dotProduct(this._eye), -y.dotProduct(this._eye), -z.dotProduct(this._eye), 1
        ]);
        
        this._viewMatrix = m;
        return m;
    };

    crystal.Camera = Camera;
})(crystal)
