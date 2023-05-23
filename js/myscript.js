

/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/


// Selezione l'elemento a cui aggiungere i nuovi elementi
const divElement = document.querySelector('main');

// creo una funzione per creare il primo elemento
function addElement(){
    const newDivElement = document.createElement('div');
    newDivElement.classList.add('grid');
    return newDivElement;
}

// creo una seconda funzione per inserire il secondo elemento
function addCellElement(){
    const newCellElement = document.createElement('div');
    newCellElement.classList.add('cell');
    return newCellElement;
}


// scrivo in pagina il primo elemento
const gridElement = addElement();
divElement.appendChild(gridElement);

// creo un ciclo che stampi in pagina 100 volte il secondo elemento all'interno del primo
for (let i = 0; i < 100; i++){
    const cellElement = addCellElement();
    gridElement.appendChild(cellElement);
}





