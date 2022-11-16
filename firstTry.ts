let listaCorreo = [
'36591 -1',
'36591 -2',
'36591 -3',
'36592 -1',
'36592 -2',
'36592 -3',
'36593 -1',
'36593 -2',
'36593 -3',
'36594 -1',
'36594 -2',
'36594 -3',
'36595 -1',
'36595 -2',
'36595 -3',
'36596 -1',
'36596 -2',
'36596 -3',
'36597 -1',
'36597 -2',
'36597 -3',
'36598 -1',
'36598 -2',
'36598 -3',
'36599 -1',
'36599 -2',
'36599 -3',
'36600 -1',
'36600 -2',
'36600 -3',
'36601 -1',
'36601 -2',
'36601 -3',
'36602 -1',
'36602 -2',
'36602 -3',
'36603 -1',
'36603 -2',
'36604 -1',
'36604 -2',
'36605 -1',
'36605 -2',
'36606 -1',
'36606 -2',
'36607 -1',
'36607 -2',
'36608 -1',
'36608 -2',
'36609 -1',
'36609 -2',
'36610 -1',
'36610 -2',
'36611 -1',
'36611 -2',
'36612 -1',
'36612 -2',
'36613 -1',
'36613 -2',
'36614 -1',
'36614 -2'
];

function shuffle(array: string[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let listas: string[][] = [[],[],[]];

function creaTresListas(arr: string[]): string[][] {
    arr.forEach((n: string)=> {
        if(listas[0].findIndex(x => x.includes(n.substring(0,5))) == -1 && listas[0].length < listaCorreo.length /3) {
            listas[0].push(n);
        } else if (listas[1].findIndex(x => x.includes(n.substring(0,5))) == -1 && listas[1].length < listaCorreo.length/3) {
            listas[1].push(n);
        } else if (listas[2].length < listaCorreo.length/3) {
            listas[2].push(n);
        }
    })
    
    return listas;
};

const listaCorreoAleatorizada = shuffle(listaCorreo);

const resultado = creaTresListas(listaCorreoAleatorizada);

console.log('-0--------------------')
listas[0].forEach(x => console.log(x))
console.log('-1--------------------')
listas[1].forEach(x => console.log(x))
console.log('-2--------------------')
listas[2].forEach(x => console.log(x))
