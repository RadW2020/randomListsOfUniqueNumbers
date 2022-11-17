let listaCorreo = [
'36591 -1','36591 -2','36591 -3','36592 -1','36592 -2','36592 -3','36593 -1','36593 -2','36593 -3','36594 -1','36594 -2','36594 -3','36595 -1','36595 -2','36595 -3','36596 -1','36596 -2',
'36596 -3','36597 -1','36597 -2','36597 -3','36598 -1','36598 -2','36598 -3','36599 -1','36599 -2','36599 -3','36600 -1','36600 -2','36600 -3','36601 -1','36601 -2','36601 -3','36602 -1',
'36602 -2','36602 -3','36603 -1','36603 -2','36604 -1','36604 -2','36605 -1','36605 -2','36606 -1',
'36606 -2','36607 -1','36607 -2','36608 -1','36608 -2','36609 -1','36609 -2','36610 -1','36610 -2','36611 -1','36611 -2','36612 -1','36612 -2','36613 -1','36613 -2','36614 -1','36614 -2'
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
let counterLista0deUnos = 0;
let counterLista0deDoses = 0; 
let counterLista1deUnos = 0;
let counterLista1deDoses = 0; 

function creaTresListas(arr: string[]): string[][] {
    console.log(arr)
    let switcher = 0;
    arr.forEach((n: string)=> {
        if (switcher==0) {
            listas[0].push(n);
            switcher=1
        } else if (switcher==1) {
            listas[1].push(n);
            switcher=2
        } else if (switcher==2) {
            listas[2].push(n);
            switcher=0
        }

    })

    return listas;
};

const listaCorreoOrdenada = listaCorreo.sort();
const resultado = creaTresListas(listaCorreoOrdenada);

let une = '\n';
let due = '\n';
let troli = '\n';

console.log(`${findDuplicates(listas[0]) ? 'si' : 'no '} hay duplicados en la lista 0`);
console.log(`${findDuplicates(listas[1]) ? 'si' : 'no '} hay duplicados en la lista 1`);
console.log(`${findDuplicates(listas[2]) ? 'si' : 'no '} hay duplicados en la lista 2`);

console.log('-0--------------------')
listas[0].forEach(x => une = une + x +'\n')
console.log(une)
console.log('-1--------------------')
listas[1].forEach(x => due = due + x +'\n')
console.log(due)
console.log('-2--------------------')
listas[2].forEach(x => troli = troli + x +'\n')
console.log(troli)
console.log('-DUP------------------')

function findDuplicates(arr: string[]) {
    let newArr = arr.map(x => x.substring(0,5))
    return new Set(newArr).size !== newArr.length
}

function aleatorFlojo(arr1: string[], arr2: string[]) {
    arr1.forEach((a1, i) => {

        arr2.forEach((a2, j) => {
            if (Math.random() >= 0.8) {
                const old1 = a1
                const old2 = a2
                arr1[i] = old2
                arr2[j] = old1
                if (findDuplicates(arr1) || findDuplicates(arr2)) {
                    arr1[i] = old1
                    arr2[j] = old2
                };
                
            }
        })
    })
}
aleatorFlojo(listas[0], listas[1]);
aleatorFlojo(listas[0], listas[2]);
aleatorFlojo(listas[1], listas[2]);

une = '\n';
due = '\n';
troli = '\n';

console.log('-0-ale-------------------')
listas[0].forEach(x => une = une + x +'\n')
console.log(une)
console.log('-1-ale-------------------')
listas[1].forEach(x => due = due + x +'\n')
console.log(due)
console.log('-2-ale-------------------')
listas[2].forEach(x => troli = troli + x +'\n')
console.log(troli)
console.log('-DUP------------------')
console.log(`${findDuplicates(listas[0]) ? 'si' : 'no '} hay duplicados en la lista 0`);
console.log(`${findDuplicates(listas[1]) ? 'si' : 'no '} hay duplicados en la lista 1`);
console.log(`${findDuplicates(listas[2]) ? 'si' : 'no '} hay duplicados en la lista 2`);


listas[0] = shuffle(listas[0]);
listas[1] = shuffle(listas[1]);
listas[2] = shuffle(listas[2]);
une = '\n';
due = '\n';
troli = '\n';

console.log('-0-ale-shuffle------------------')
listas[0].forEach(x => une = une + x +'\n')
console.log(une)
console.log('-1-ale-shuffle------------------')
listas[1].forEach(x => due = due + x +'\n')
console.log(due)
console.log('-2-ale-shuffle------------------')
listas[2].forEach(x => troli = troli + x +'\n')
console.log(troli)
console.log('-DUP------------------')
console.log(`${findDuplicates(listas[0]) ? 'si' : 'no '} hay duplicados en la lista 0`);
console.log(`${findDuplicates(listas[1]) ? 'si' : 'no '} hay duplicados en la lista 1`);
console.log(`${findDuplicates(listas[2]) ? 'si' : 'no '} hay duplicados en la lista 2`); 
