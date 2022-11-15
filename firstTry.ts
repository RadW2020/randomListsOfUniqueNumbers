function crearSesentaNumerosIniciales(): number[] {
    let arr = [];
    // creamos 40 numeros unicos
    for (let i=1; i<=40; i++) {
        arr.push(i);
    }
    // añadimos 15 numeros que ya existen
    for (let i=1; i<=15; i++) {
        arr.push(i);
    }
    // añadimos 5 numeros que ya existen (estos serán los triplicados)
    for (let i=1; i<=5; i++) {
        arr.push(i);
    }
    // esto es una lista de 60 valres donde los numeros del 1 al 5 son triplicados
    // los numeros de 6 al 15 son duplicados
    // el resto son únicos
    return  arr;
}

function shuffle(array: number[]) {
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

function creaTresListas(arr: number[]): number[][] {
    let listas: number[][] = [[],[],[]];

    arr.forEach((n: number)=> {
        if(!listas[0].includes(n) && listas[0].length <= 20) {
            listas[0].push(n)
        } else if (!listas[1].includes(n) && listas[1].length <= 20) {
            listas[1].push(n);
        } else (listas[2].length <= 20) {
            listas[2].push(n);
        }
    })
        
    return listas;
};

const listaDeNumerosConDuplicadosYTriplicados = shuffle(crearSesentaNumerosIniciales());

const resultado = creaTresListas(listaDeNumerosConDuplicadosYTriplicados);
console.log(listaDeNumerosConDuplicadosYTriplicados);
console.log('---------------------')
console.log(resultado);
