/**
 * @author: kexin
 * @date: 2012.8.7
 * @see flash.geo.Rectangle of Actionscript 3, Adobe
 * 
 */

function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.clone = function() {
    return new Rectangle(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.contains = function(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= thix.y && y <= this.y + this.height;
};

Rectangle.prototype.containsPoint = function(p) {
    return this.contains(p.x, p.y);
};

Rectangle.prototype.containsRect = function(rect) {
    return this.contains(rect.x, rect.y) && this.contains(rect.x + rect.width, rect.y + rect.height);
};

Rectangle.prototype.equals = function(rect) {
    return this.x == rect.x && this.y == rect.y && this.width == rect.width && this.height == rect.height;
};

Rectangle.prototype.inflate = function(dx, dy) {
    dx = dx > -this.width / 2 ? dx : -this.width / 2;
    dy = dy > -this.height / 2 ? dy : -this.height / 2;
    
    this.x -= dx;
    this.width += dx * 2;
    this.y -= dy;
    this.height += dy * 2;
};

Rectangle.prototype.inflatePoint = function(p) {
    this.inflate(p.x, p.y);
};

Rectangle.prototype.offset = function(dx, dy) {
    this.x += dx;
    this.y += dy;
};

Rectangle.prototype.offsetPoint = function(p) {
    this.x += p.x;
    this.y += p.y;
};

Rectangle.prototype.isEmpty = function() {
    return this.x == 0 && this.y == 0 && this.width == 0 && this.height == 0;
};

Rectangle.prototype.setEmpty = function() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
};

Rectangle.prototype.toString = function() {
    return "[" + this.x + "," + this.y + "," + this.width + "," + this.height + "]";
};

// rect: Rectangle
Rectangle.prototype.intersection = function(rect) {
    
};

// rect: Rectangle
Rectangle.prototype.intersects = function(rect) {
    
};

// rect: Rectangle
Rectangle.prototype.union = function(rect) {
    
};



