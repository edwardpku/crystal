/**
 * @author: kexin
 * @date: 2012.8.10
 * @see flash.geom.Matrix of Actionscript 3, Adobe
 * 
 */
 
window.crystal = window.crystal || {};

(function(crystal) {
    function Matrix(a, b, c, d, tx, ty) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	thix.tx = tx;
	this.ty = ty;
	this.u = 0;
	this.v = 0;
	this.w = 1;
    }

    Matrix.prototype.clone = function() {
	return Matrix(this.a, this.b, this.c, this.d, this.dx, this.dy);
    };
    
    // m: Matrix
    Matrix.prototype.concat = function(m) {
    	var a1 = this.a,
    	    b1 = this.b,
    	    c1 = this.c,
    	    d1 = this.d,
    	    tx1 = this.tx,
    	    ty1 = this.ty,
    	    u1 = this.u,
    	    v1 = this.v,
    	    w1 = this.w;
    	    
    	this.a = a1 * m.a + b1 * m.b + tx1 * m.tx;
    	this.b = a1 * m.b + b1 * m.d + tx1 * m.v;
    	this.tx = a1 * m.tx + b1 * m.ty + tx1 * m.w;
    	this.c = c1 * m.a + d1 * m.c + ty1 * m.u;
    	this.d = c1 * m.b + d1 * m.d + ty1 * m.v;
    	this.ty = c1 * m.tx + d1 * m.ty + ty1 * m.w;
    	this.u = u1 * m.a + v1 * m.b + w1 * m.tx;
    	this.v = u1 * m.b + v1 * m.d + w1 * m.v;
    	this.w = u1 * m.tx + v1 * m.ty + w1 * m.w;
    };
	
    Matrix.prototype.identity = function() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        this.u = 0;
        this.v = 0;
        this.w = 1;
    };
    
    Matrix.prototype.translate = function(dx, dy) {
        this.tx = this.tx + dx;
        this.ty = this.ty + dy;
    };

    Matrix.prototype.scale = function(sx, sy) {
        this.a = this.a * sx;
        this.d = this.d * sy;
    };

    Matrix.prototype.rotate = function(angle) {
    
    };
    
    Matrix.prototype.invert = function() {
    	
    };
    
    Matrix.prototype.transformPoint = function(p) {
        return new Point(this.a * p.x + this.b * p.y + this.tx, this.c * p.x + this.d * p.y + this.ty);
    };
    
    crystal.Matrix = Matrix;
})(crystal);

