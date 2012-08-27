/**
 * Created by JetBrains WebStorm.
 * User: kexinwu
 * Date: 12-7-30
 * Time: 下午7:20
 * To change this template use File | Settings | File Templates.
 */

window.onload = function() {
    var canvas = document.getElementById("sketchpad");
    var ctx = canvas.getContext('2d');

    var regionX;
    var regionY;

    var currentX;
    var currentY;

    var ps = [];

    canvas.onclick = function(e) {
        e = window.event || e;

        if (regionX == undefined) {
            regionX = e.clientX - canvas.offsetLeft;
            regionY = e.clientY - canvas.offsetTop;
            currentX = e.clientX - canvas.offsetLeft;
            currentY = e.clientY - canvas.offsetTop;

            ps.push(new G.Point(currentX, currentY));
            return;
        }

        ctx.lineWidth = 1;
        ctx.strokeStyle = "#0f0";
        ctx.moveTo(currentX, currentY);
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();

        currentX = e.clientX - canvas.offsetLeft;
        currentY = e.clientY - canvas.offsetTop;

        ps.push(new G.Point(currentX, currentY));

        if (ps.length == 3) {
            var f = G.inflection(ps[0], ps[1], ps[2]);

            alert(f < 0 ? "向左拐" : "向右拐");
            var width = canvas.width;
            var height = canvas.height;
            canvas.width = width;
            canvas.height = height;

            ps = [];

            regionX = undefined;
            regionY = undefined;

            currentX = undefined;
            currentY = undefined;
        }
    };
};
