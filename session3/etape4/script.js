var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
if (!gl) {
    alert("WebGL non supporté par votre navigateur");
}

// Shader sources
var vertexShaderSource = `
attribute vec4 a_position;
void main() {
gl_Position = a_position;
gl_PointSize = 2.0;
}
`;

var fragmentShaderSource = `
precision mediump float;
void main() {
gl_FragColor = vec4(1, 3, 0.1, 0.7); // Orange
}
`;

// Compile shader
function compileShader(source, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(
            "Erreur de compilation du shader: " + gl.getShaderInfoLog(shader)
        );
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
var vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
var fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

// Link shaders into a program
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(
        "Erreur de liaison du programme: " + gl.getProgramInfoLog(program)
    );
    gl.deleteProgram(program);
}

// Link shaders into a program
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(
        "Erreur de liaison du programme: " + gl.getProgramInfoLog(program)
    );
    gl.deleteProgram(program);
}

// Data for a single point
// var positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
var positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1]);

// Create a buffer
var positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

var position = gl.getAttribLocation(program, "a_position");

gl.enableVertexAttribArray(position);
gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

<!-- Phade de dessin -->
gl.useProgram(program);
// Draw the point
gl.clear(gl.COLOR_BUFFER_BIT);
//gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
gl.drawArrays(gl.TRIANGLES, 0, 6);





