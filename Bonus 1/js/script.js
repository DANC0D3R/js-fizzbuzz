// Ciclo che si ripete per 100 volte
for(let i = 0; i <= 99; i++){
    // Il numero è divisibile sia per 3 che per 5
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log('FizzBuzz');
    } 
    // Il numero è divisibile per 3
    else if (i % 3 == 0){
        console.log('Fizz');
    }
    // Il numero è divisibile per 5
    else if (i % 5 == 0){
        console.log('Buzz');
    }
    // Il numero non è divisibile ne per 3 ne per 5
    else{
        console.log(i);
    }
};