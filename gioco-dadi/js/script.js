let numUtente;
let numEstratto;
const dadoUser = document.querySelector('.dado-user');
const dadoRandom = document.querySelector('.dado-random');

const risultato = document.querySelector('.risultato');

const rollDice = document.getElementById('btn');

rollDice.addEventListener('click', function(){

  numUtente = document.getElementById('number').value;
  dadoUser.innerHTML = numUtente;
  

  numEstratto = Math.floor(Math.random() * 6) + 1;
  dadoRandom.innerHTML = numEstratto;

  if(numUtente > numEstratto){
    risultato.innerHTML = `Hai vinto!`
  }else if(numUtente < numEstratto){
    risultato.innerHTML = `Ritenta...`
  }else{
    risultato.innerHTML = `Pareggio`
  };

});