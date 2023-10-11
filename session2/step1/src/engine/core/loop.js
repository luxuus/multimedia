"use strict"


const iUPS = 60; // nombre de updates par seconde
const tMPF = 1000 / iUPS; // Milliseconds par cycle.
// Variables for timing gameloop.
let tPrevTime; // le dernier temps enregistré
let tLagTime; // lag: différence entre le dernier temps et maintenant
let bLoopRunning = false; // Etat pour savoir si la boucle est active.
let oCurrentScene = null; // reference vers la scène /jeu courant
let iFrameID = -1; //identifiant pour la requete retourne par requestAnimationFrame

// fonction start scene

function start(scene) {

    oCurrentScene = scene;
    oCurrentScene.init();
    tPrevTime = performance.now();
    tLagTime = 0;
    bLoopRunning = true;
    iFrameID = requestAnimationFrame(loopOnce);
}

function stop() {
    bLoopRunning = false;
    cancelAnimationFrame(iFrameID);
}

function loopOnce() {
    iFrameID = requestAnimationFrame(loopOnce);
    let tCurrentTime = performance.now();
    let elapsed = tCurrentTime - tPrevTime;
    tPrevTime = tCurrentTime;
    tLagTime += elapsed;
    while (tLagTime >= tMPF && bLoopRunning) {
        tLagTime -= tMPF;
        loopUpdate();
    }

    loopRender();
}

function loopRender() {
    if (oCurrentScene) {
        oCurrentScene.draw();
    }
}

function loopUpdate() {
    if (oCurrentScene) {
        oCurrentScene.update();
    }
}


export {start, stop}