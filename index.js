function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function liftWeights() {
    console.log("Pump iron");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}

function Tuesday() {
    exerciseRoutine(swimFortyLaps);
}

function Wednesday() {
    exerciseRoutine(runFiveMiles);
}

function Thursday() {
    exerciseRoutine(liftWeights);
}

function Friday() {
    exerciseRoutine(swimFortyLaps);
}

function Spy() {
    console.log("What if I was a Spy?");
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {

    };
}

function returnsAnAnonymousFunction() {
    return function() {

    };
}