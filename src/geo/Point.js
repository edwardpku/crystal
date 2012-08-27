/**
 * @author: kexin
 * @date: 2012.8.7
 * @see flash.geo.Point of Actionscript 3, Adobe
 * 
 */
(function() {
    function Point(x, y) {
        if (this instanceof Point) {
            if (arguments.length == 2) {
                this.x = x;
                this.y = y;
            } else {
                this.x = 0;
                this.y = 0;
            }
        } else {
            return new Point(x, y);
        }
    }

    Point.prototype.add = function(p) {
        return new Point(this.x + p.x, this.y + p.y);
    };

    Point.prototype.subtract = function(p) {
        return new Point(this.x - p.x, this.y - p.y);
    };

    Point.prototype.dotProduct = function(p) {
        return this.x * p.x + this.y * p.y;
    };
    
    Point.prototype.crossProduct = function(p) {
        return this.x * p.y - this.y * p.x;
    };
    
    Point.prototype.length = function() {
        return Math.sqrt(Math.power(this.x, 2) + Math.power(this.y, 2));
    };

    Point.prototype.equals = function(p) {
        return this.x == p.x && this.y == p.y;
    };

    Point.prototype.clone = function() {
        return new Point(this.x, this.y);
    };

    Point.prototype.normalize = function(scale) {
        if (scale) {
            this.x = this.x * scale;
            this.y = this.y * scale;
        } else if (this.length()) {
            this.x = this.x / this.length();
            this.y = this.y / this.length();
        }
    };

    Point.prototype.offset = function(dx, dy) {
        this.x = this.x + dx;
        this.y = this.y + dy;
    };

    Point.prototype.toString = function() {
        return "[" + this.x + "," + this.y + "]";
    };

    Point.polar = function(len, angle) {
        return new Point(len * Math.cos(angle), len * Math.sin(angle));
    };

    Point.distance = function(p1, p2) {
        return p2.subtract(p1).length();
    };

    Point.interpolate = function(p1, p2, f) {
        if (f >= 0 && f <= 1) {
            var p = p1.subtract(p2);
            p.normalize(f);
            return p.add(p2);
        } else {
            return null;
        }
    };

    G.Point = Point;
})();

