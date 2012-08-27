/**
 * @author: kexin
 * @date: 2012.8.10
 * @see flash.geo.Matrix3D of Actionscript 3, Adobe
 */

window.crystal = window.crystal || {};

(function(crystal) {
    var EPSILON = 0.01;	
	var Vector3D = crystal.Vector3D;
	
    function Matrix3D(v) {
        if (v && v.length == 16) {
            this.v = v;		
        } else {
            this.identity();
        }
    }
	
    Matrix3D.prototype.clone = function() {
        return new Matrix3D(this.v);
    };
    
    Matrix3D.prototype.identity = function() {
    	for (var i = 0; i < 16; i ++) {
            this.v[i] = (i == 0 || i == 5 || i == 10 || i == 15) ? 1 : 0;
    	}
    };
    
    // m: Array
    Matrix.prototype.equal = function(m) {
    	for (var i = 0; i < 16; i ++) {
            if (Math.abs(this.v[i] - m.v[i]) >= EPSILON) {
    	        return false;
    	    }
    	}
    	
    	return true;
    };
    
    // return the determinant of the matrix
    Matrix3D.prototype.determinant = function() {
    	var a00 = this.v[0], a01 = this.v[1], a02 = this.v[2], a03 = this.v[3],
            a10 = this.v[4], a11 = this.v[5], a12 = this.v[6], a13 = this.v[7],
            a20 = this.v[8], a21 = this.v[9], a22 = this.v[10], a23 = this.v[11],
            a30 = this.v[12], a31 = this.v[13], a32 = this.v[14], a33 = this.v[15];

        return (a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 +
                a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 +
                a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 +
                a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 +
                a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 +
                a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33);
    };
    
    Matrix3D.prototype.invert = function() {

    };
    
    Matrix3D.prototype.transpose = function() {
    	var a01 = this.v[1];
    	var a02 = this.v[2];
    	var a03 = this.v[3];
    	var a12 = this.v[6];
    	var a13 = this.v[7];
    	var a23 = this.v[11];
    	
    	this.v[1] = this.v[4];
    	this.v[2] = this.v[8];
    	this.v[3] = this.v[12];
    	this.v[4] = a01;
    	this.v[6] = this.v[9];
    	this.v[7] = this.v[13];
    	this.v[8] = a02;
    	this.v[9] = a12;
    	this.v[11] = this.v[14];
    	this.v[12] = a03;
    	this.v[13] = a13;
    	this.v[14] = a23;
    };
    
    // m: Matrix3D
    Matrix3D.prototype.append = function(m) {
    	var a00 = m.v[0], a01 = m.v[1], a02 = m.v[2], a03 = m.v[3];
        var a10 = m.v[4], a11 = m.v[5], a12 = m.v[6], a13 = m.v[7];
        var a20 = m.v[8], a21 = m.v[9], a22 = m.v[10], a23 = m.v[11];
        var a30 = m.v[12], a31 = m.v[13], a32 = m.v[14], a33 = m.v[15];
    	
    	var b0 = this.v[0], b1 = this.v[1], b2 = this.v[2], b3 = this.v[3];
    	
    	this.v[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.v[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.v[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.v[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    	
    	b0 = this.v[4], b1 = this.v[5], b3 = this.v[6], b4 = this.v[7];
    	
    	this.v[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.v[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.v[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.v[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        
        b0 = this.v[8], b1 = this.v[9], b3 = this.v[10], b4 = this.v[11];
    	
    	this.v[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.v[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.v[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.v[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        
        b0 = this.v[12], b1 = this.v[13], b3 = this.v[14], b4 = this.v[15];
    	
    	this.v[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.v[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.v[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.v[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    };
    
    Matrix3D.prototype.appendTranslate = function(dx, dy, dz) {
    	
    };
    
    Matrix3D.prototype.appendScale = function(sx, sy, sz) {
    	
    };
    
    Matrix3D.prototype.appendRotate = function(angle, axis) {

    };
    
    // v: crystal.Vector3D
    Matrix3D.prototype.transformVector = function(v) {
    	var x = v.x, y = v.y, z = v.z, w = v.w;
    	
    	var x0 = this.v[0] * x + this.v[1] * y + this.v[2] * z + this.v[3] * w;
    	var y0 = this.v[4] * x + this.v[5] * y + this.v[6] * z + this.v[7] * w;
    	var z0 = this.v[8] * x + this.v[9] * y + this.v[10] * z + this.v[11] * w;
    	var w0 = this.v[12] * x + this.v[13] * y + this.v[14] * z + this.v[15] * w;
    	
    	return new Vector3D(x0, y0, z0, w0);
    };
    
    // vs: Array of crystal.Vector3D
    Matrix3D.prototype.transformVectors = function(vs) {
    	var n = vs.length;
    	var result = [];
    	
    	for (var i = 0; i < n; i ++) {
    		result.push(this.transformVector(vs[i]));	
    	}
    	
    	return result;
    };
    
    Matrix3D.prototype.interpolateTo = function(toMat, percent) {
    
    };
    
    Matrix3D.interpolate = function(thisMat, toMat, percent) {
    	
    };
    
    Matrix3D.prototype.toString = function() {
    	return '[' + this.v[0] + ', ' + this.v[1] + ', ' + this.v[2] + ', ' + this.v[3] +
               ', ' + this.v[4] + ', ' + this.v[5] + ', ' + this.v[6] + ', ' + this.v[7] +
               ', ' + this.v[8] + ', ' + this.v[9] + ', ' + this.v[10] + ', ' + this.v[11] +
               ', ' + this.v[12] + ', ' + this.v[13] + ', ' + this.v[14] + ', ' + this.v[15] + ']';
    };
    
    // for gl
    Matrix3D.prototype.glFrustum = function(left, right, bottom, top, near, far) {
    	var rl = right - left;
    	var tb = top - bottom;
    	var fn = far - near;
    	
    	this.v[0] = (near * 2) / rl;
        this.v[1] = 0;
        this.v[2] = 0;
        this.v[3] = 0;
        this.v[4] = 0;
        this.v[5] = (near * 2) / tb;
        this.v[6] = 0;
        this.v[7] = 0;
        this.v[8] = (right + left) / rl;
        this.v[9] = (top + bottom) / tb;
        this.v[10] = -(far + near) / fn;
        this.v[11] = -1;
        this.v[12] = 0;
        this.v[13] = 0;
        this.v[14] = -(far * near * 2) / fn;
        this.v[15] = 0;
    };
    
    Matrix3D.prototype.glPerspective = function(fovy, aspect, near, far) {

    };
    
    Matrix3D.prototype.glLookAt = function(eye, target, up) {
   
    };
    
    Matrix3D.prototype.glOrtho = function(left, right, bottom, top, near, far) {

    };
    
    crystal.Matrix3D = Matrix3D;
})(crystal);

