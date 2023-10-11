"use strict";
window.onload = function() {
        try {
            var canvas = document.getElementById('webglCanvas');
            var gl;
            try {
                gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            }
            catch (e) {
                console.error("Erreur lors de l'initialisation du contexte WebGL: " + e.message);
            }

            if (gl) {
                gl.clearColor(0.2, 0.4, 0.6, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
            } else {
                console.error('Impossible d\'initialiser le contexte WebGL. Veuillez mettre à jour votre navigateur.');
            }
        } catch (e) {
            console.error("Une erreur s'est produite: " + e.message);
        }


}

