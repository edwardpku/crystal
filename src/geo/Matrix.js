/**
 * Author: kexin
 * Date: 12-8-10
 * Time: 下午14:00
 * 
 * @see flash.geo.Matrix of Actionscript 3, Adobe
 */

(function() {
    function Matrix(a, b, c, d, tx, ty) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	thix.tx = tx;
	this.ty = ty;
    }

    Matrix.prototype.clone = function() {
	return Matrix(this.a, this.b, this.c, this.d, this.dx, this.dy);
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

    Matrix.prototype.transformPoint = function(p) {
        return new Point(this.a * p.x + this.b * p.y + this.tx, this.c * p.x + this.d * p.y + this.ty);
    };
})();

