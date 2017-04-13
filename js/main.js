
function dibujarLogo () {
    var canvas = $("#logo");
    canvas.css("height", canvas.width());

    var w = canvas[0].scrollWidth;
    var h = canvas[0].scrollHeight;
    canvas[0].width = w;
    canvas[0].height = h;

    var ctx = canvas[0].getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(w / 2 - 15, h / 2, 30, 150);

    var phi = [];
    for (var i = 0.0; i <= Math.PI; i = i + 0.01) {
        phi.push(i);
    }

    var theta = [];
    for (var i = 0.0; i <= 2 * Math.PI; i = i + 0.01) {
        theta.push(i);
    }

    ctx.beginPath();
    ctx.moveTo(w / 2 + 15, h / 2 - 150);
    for (var i = 0; i < phi.length; i++) {
        ctx.lineTo(w / 2 + Math.cos(phi[i]) * 15, h / 2 - 150 - Math.sin(phi[i]) * 15);
    }
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(w / 2 + 15, h / 2 + 150);
    for (var i = 0; i < phi.length; i++) {
        ctx.lineTo(w / 2 + Math.cos(phi[i]) * 20, h / 2 + 150 - Math.sin(phi[i]) * 20);
    }
    ctx.closePath();
    ctx.fillStyle = "#38CEBA";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(w / 2 + 15, h / 2 + 150);
    for (var i = 0; i < phi.length; i++) {
        ctx.lineTo(w / 2 + Math.cos(phi[i]) * 15, h / 2 + 150 - Math.sin(phi[i]) * 15);
    }
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(w / 2 + 15, h / 2 + 150);
    ctx.lineTo(w / 2, h / 2 + 200);
    ctx.lineTo(w / 2 - 15, h / 2 + 150);
    ctx.closePath();
    ctx.fill();

    var rotation = Math.PI / 9;
    ctx.beginPath();
    for (var i = 0; i < phi.length; i++) {
        var x = Math.cos(phi[i]) * 200;
        var y = Math.sin(phi[i]) * 60;

        var rotX = x * Math.cos(rotation) + y * Math.sin(rotation) + w / 2;
        var rotY = y * Math.cos(rotation) - x * Math.sin(rotation) + h / 2;

        if (i != 0) {
            ctx.lineTo(rotX, rotY);
        } else {
            ctx.moveTo(rotX, rotY);
        }
    }
    ctx.lineWidth = 12;
    ctx.strokeStyle = "#38CEBA";
    ctx.stroke();

    rotation = Math.PI / 9;
    ctx.beginPath();
    for (var i = 0; i < theta.length; i++) {
        var x = Math.cos(theta[i]) * 200;
        var y = Math.sin(theta[i]) * 60;

        var rotX = x * Math.cos(rotation) + y * Math.sin(rotation) + w / 2;
        var rotY = y * Math.cos(rotation) - x * Math.sin(rotation) + h / 2;

        if (i != 0) {
            ctx.lineTo(rotX, rotY);
        } else {
            ctx.moveTo(rotX, rotY);
        }
    }
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();

    rotation = 150 * Math.PI / 180;
    ctx.beginPath();
    for (var i = 0; i < phi.length; i++) {
        var x = Math.cos(phi[i]) * 200;
        var y = - Math.sin(phi[i]) * 40;

        var rotX = x * Math.cos(rotation) + y * Math.sin(rotation) + w / 2;
        var rotY = y * Math.cos(rotation) - x * Math.sin(rotation) + h / 2;

        if (i != 0) {
            ctx.lineTo(rotX, rotY);
        } else {
            ctx.moveTo(rotX, rotY);
        }
    }
    ctx.lineWidth = 12;
    ctx.strokeStyle = "#38CEBA";
    ctx.stroke();

    rotation = 150 * Math.PI / 180;
    ctx.beginPath();
    for (var i = 0; i < theta.length; i++) {
        var x = Math.cos(theta[i]) * 200;
        var y = Math.sin(theta[i]) * 40;

        var rotX = x * Math.cos(rotation) + y * Math.sin(rotation) + w / 2;
        var rotY = y * Math.cos(rotation) - x * Math.sin(rotation) + h / 2;

        if (i != 0) {
            ctx.lineTo(rotX, rotY);
        } else {
            ctx.moveTo(rotX, rotY);
        }
    }
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.fillStyle = "#38CEBA";
    ctx.fillRect(w / 2 - 20, h / 2 - 150, 40, 150);

    ctx.fillStyle = "white";
    ctx.fillRect(w / 2 - 15, h / 2 - 150, 30, 150);

    rotation = Math.PI / 9;
    var position = 7 * Math.PI / 4;
    var a = Math.cos(position) * 200 * Math.cos(rotation) + Math.sin(position) * 60 * Math.sin(rotation) + w / 2;
    var b = Math.sin(position) * 60 * Math.cos(rotation) - Math.cos(position) * 200 * Math.sin(rotation) + h / 2;
    ctx.beginPath();
    for (var i = 0; i < theta.length; i++) {
        var x = a + Math.cos(theta[i]) * 35;
        var y = b + Math.sin(theta[i]) * 35;

        if (i != 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.moveTo(x, y);
        }
    }
    ctx.fillStyle = "#38CEBA";
    ctx.fill();

    ctx.beginPath();
    for (var i = 0; i < theta.length; i++) {
        var x = a + Math.cos(theta[i]) * 30;
        var y = b + Math.sin(theta[i]) * 30;

        if (i != 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.moveTo(x, y);
        }
    }
    ctx.fillStyle = "white";
    ctx.fill();

    rotation = 150 * Math.PI / 180;
    position = 285 * Math.PI / 180;
    a = Math.cos(position) * 200 * Math.cos(rotation) + Math.sin(position) * 40 * Math.sin(rotation) + w / 2;
    b = Math.sin(position) * 40 * Math.cos(rotation) - Math.cos(position) * 200 * Math.sin(rotation) + h / 2;
    ctx.beginPath();
    for (var i = 0; i < theta.length; i++) {
        var x = a + Math.cos(theta[i]) * 25;
        var y = b + Math.sin(theta[i]) * 25;

        if (i != 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.moveTo(x, y);
        }
    }
    ctx.fillStyle = "#38CEBA";
    ctx.fill();

    ctx.beginPath();
    for (var i = 0; i < theta.length; i++) {
        var x = a + Math.cos(theta[i]) * 20;
        var y = b + Math.sin(theta[i]) * 20;

        if (i != 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.moveTo(x, y);
        }
    }
    ctx.fillStyle = "white";
    ctx.fill();
}

function main () {
    dibujarLogo();
}

$("document").ready(main);
