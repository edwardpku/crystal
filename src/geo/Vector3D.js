/**
 * @author: kexin
 * @date: 2012.8.10
 * @see flash.geom.Vector3D of Actionscript 3, Adobe
 * 
 */

window.crystal = window.crystal || {};

(function(crystal) {	
    function Vector3D(x, y, z, w) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w || 1;
    }
	
    Vector3D.prototype.clone = function() {
        return new Vector3D(this.x, this.y, this.z, this.w);
    };
    
    // v: Vector3D
    Vector3D.prototype.equals = function(v) {
    	return this.x == v.x && this.y == v.y && this.z == v.z;
    };
    
    Vector3D.prototype.add = function(v) {
    	return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z);
    };
    
    Vector3D.prototype.subtract = function(v) {
        return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);
    };
    
    // v: Vector3D
    Vector3D.prototype.dotProduct = function(v) {
    	return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    
    // v: Vector3D
    Vector3D.prototype.crossProduct = function(v) {
    	
    };
    
    Vertor3D.prototype.length = function() {
    	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);	
    };
    
    // v: Vector3D
    Vector3D.prototype.incrementBy = function(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    };
    
    // v: Vector3D
    Vector3D.prototype.decrementBy = function(v) {
    	this.x -= v.x;
    	this.y -= v.y;
    	this.z -= v.z;
    };
    
    // v: Vector3D
    Vector3D.prototype.scaleBy = function(v) {
    	this.x = this.x * v.x;
    	this.y = this.y * v.y;
    	this.z = this.z * v.z;
    };
    
    Vector3D.prototype.project = function() {
    	if (this.w == 0) {
            return;
    	}
    	
    	this.x = this.x / this.w;
    	this.y = this.y / this.w;
    	this.z = this.z / this.w;
    };
    
    Vector3D.prototype.normalize = function() {
    	var l = this.length();
    	this.x /= l;
    	this.y /= l;
    	this.z /= l;
    };
    
    Vector3D.prototype.toString = function() {
    	return "[" + this.x + "," + this.y + "," + this.z + "," + this.w + "]";
    };
    
    Vector3D.prototype.negate = function() {
    	this.x = -this.x;
    	this.y = -this.y;
    	this.z = -this.z;
    };
    
    // a: Vector3D  b: Vector3D
    Vector3D.angleBetween = function(a, b) {
    	return Math.acos(a.dotProduct(b) / (a.length() * b.length()));
    };
    
    Vector3D.X_AXIS = new Vector3D(1, 0, 0);
    Vector3D.Y_AXIS = new Vector3D(0, 1, 0);
    Vector3D.Z_AXIS = new Vector3D(0, 0, 1);
    
    crystal.Vector3D = Vector3D;
})(crystal);

