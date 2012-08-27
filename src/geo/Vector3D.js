/**
 * @author: kexin
 * @date: 12-8-10
 * @see flash.geo.Vector3D of Actionscript 3, Adobe
 * 
 */

(function() {
    function Vector3D(x, y, z, w) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w || 0;
    }
	
    Vector3D.prototype.clone = function() {
        return new Vector3D(this.x, this.y, this.z);
    };
    
    // v: Vector3D
    Vector3D.prototype.equals = function(v) {
    	return this.x == v.x && this.y == v.y && this.z == v.z;
    };
    
    Vector3D.prototype.dotProduct = function(v) {
    	return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    
    Vector3D.prototype.crossProduct = function(v) {
    	
    };
    
    Vertor3D.prototype.length = function() {
    	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);	
    };
    
    Vector3D.prototype.translate = function(dx, dy, dz) {
    	this.x += dx;
    	this.y += dy;
    	this.z += dz;
    };
    
    Vector3D.prototype.scale = function(sx, sy, sz) {
    	this.x = this.x * sx;
    	this.y = this.y * sx;
    	this.z = this.z * sx;
    };
    
    Vector3D.prototype.rotate = function() {
    	
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
    	var l = this.length;
    	this.x /= l;
    	this.y /= l;
    	this.z /= l;
    };
    
    Vector3D.prototype.scaleBy = function(s) {
    	this.x = this.x * s;
    	this.y = this.y * s;
    	this.z = this.z * s;
    };
    
    Vector3D.prototype.toString = function() {
    	return "[" + this.x + "," + this.y + "," + this.z + "," + this.w + "]";
    };
    
    Vector3D.prototype.negate = function() {
    	this.x = -this.x;
    	this.y = -this.y;
    	this.z = -this.z;
    };
    
    Vector3D.angleBetween = function(a, b) {
    	
    };
})();

