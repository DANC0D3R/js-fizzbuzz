// Assegnazione dell'elemento a una variabile
const container = document.getElementById('container');

// Ciclo che crea il quadrato con il numero per 100 volte
for (let i = 1; i <= 100; i++){
    // Creo il quadrato con il numero
    const square = document.createElement('div');

    square.className = 'square';

    container.append(square);

    let content = i;

    // Condizioni 
    // Il numero è divisibile sia per 5 che per 3
    if ( (i % 3 == 0) && (i % 5 == 0) ){
        // Testo
        content = 'FizzBuzz';
        // Colore
        square.className += ' red';
    }
    // Il numero è divisibile per 3
    else if (i % 3 == 0){
        // Testo
        content = 'Fizz';
        // Colore
        square.className += ' green';
    }
    // Il numero è divisibile per 5
    else if (i % 5 == 0){ 
        // Testo
        content = 'Buzz';
        // Colore
        square.className += ' yellow';
    }

    square.innerHTML = '<p class="content">' + content + '</p>';
};