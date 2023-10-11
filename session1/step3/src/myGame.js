import * as engine from "./engine.js";

//Code exemple pour creer un point (x,y)
//a ne pas modifier
function createPoint(x,y)
{
    const gameObj1 = engine.ecs.createEntity();
    engine.ecs.addComponent(gameObj1,engine.components.Position(x,y));
}



// fonction pour dessiner la scene
function drawI() {
    // Segment vertical de la lettre I
    for(let y = 0.5; y >= -0.5; y -= 0.1) {
        createPoint(-0.9, y);
    }
}

function drawU() {
    for(let y = 0.5; y >= -0.5; y -= 0.1) {
        createPoint(-0.5, y);
    }

    for(let x = -0.5; x <= 0; x += 0.1) {
        createPoint(x, -0.5);
    }

    for(let y = 0.5; y >= -0.5; y -= 0.1) {
        createPoint(0, y);
    }
}

function drawT() {
    for(let x = 0.2; x <= 0.8; x += 0.1) {
        createPoint(x, 0.5);
    }

    for(let y = 0.5; y >= -0.5; y -= 0.1) {
        createPoint(0.5, y);
    }
}

function sceneSetup() {
    drawI();
    drawU();
    drawT();

}

//fonction qui initialise l'environnement graphique
//a ne pas modifier
window.onload = function() {
    engine.init("GLCanvas");
    sceneSetup();
    engine.update();
}
