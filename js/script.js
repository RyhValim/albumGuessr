const submitGuess = document.getElementById('submitGuess');
const guess = document.getElementById('guess')

submitGuess.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(guess.value == 'Trout Mask Replica'){
        alert('Acertou!');
    }
    else{
        alert('Errou');
    }

});