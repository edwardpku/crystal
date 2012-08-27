/**
 * Author: kexinwu
 * Date: 12-7-30
 * Time: 下午2:00
 */

var G = {};
    
/**
 * turn direction
 * @param {Array} p1
 * @param {Array} p2
 * @param {Array} p3
 */
G.inflection = function(p1, p2, p3) {
    return new Point(p2.x, p2.y).subtract(new Point(p1.x, p1.y)).crossProduct(new Point(p3.x, p3.y).subtract(new Point(p1.x, p1.y)));
};
    
/**
 * turn direction
 * @param {Point} p1
 * @param {Point} p2
 * @param {Point} p3
 */
G.inflectionPoint = function(p1, p2, p3) {
    return p2.subtract(p1).crossProduct(p3.subtract(p1));
};

/**
 * point on segment
 * @param p
 * @param p1
 * @param p2
 */
G.onSegment = function(p1, p2, q) {
    return q.subtract(p1).crossProduct(p2.subtract(p1)) == 0 && 
           (Math.min(p1.x, p2.x) <= q.x && 
           q.x <= Math.max(p1.x, p2.x && 
           Math.min(p1.y, p2.y) <= q.y && 
           q.y <= Math.max(p1.y, p2.y)));
};

/**
 * point in rectangle
 * @param {Point}     p
 * @param {Rectangle} rect
 */
G.inRectangle = function(p, rect) {
    return rect.contains(p.x, p.y);
};

/**
 * segment intersection
 * @param {Point} p1
 * @param {Point} p2
 * @param {Point} q1
 * @param {Point} q2
 */
G.intersection = function(p1, p2, q1, q2) {
    return p1.subtract(q1).crossProduct(q2.subtract(q1)) * q2.subtract(q1).crossProduct(p2.subtract(q1)) >= 0 &&
           q1.subtract(p1).crossProduct(p2.subtract(p1)) * p2.subtract(p1).crossProduct(q2.subtract(p1)) >= 0;
};

/**
 * point in polygon
 * @param {Point} p
 * @param {Array} points
 */
G.inPolygon = function(p, points) {
    
};

/**
 * compute convex hull
 * @param {Array} points
 */
G.convexHull = function(points) {

};
