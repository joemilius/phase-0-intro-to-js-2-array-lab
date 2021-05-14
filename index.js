// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const someCats = [...cats, name];
    return someCats;
}

function prependCat(name){
    const moreCats = [name, ...cats];
    return moreCats;
}

function removeLastCat(){
    const whereIsGarfield = cats.slice(0, -1);
    return whereIsGarfield;
}

function removeFirstCat(){
    const whereIsMilo = cats.slice(1);
    return whereIsMilo;
}