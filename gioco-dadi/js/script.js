let numUtente;
let numEstratto;

const rollDice = document.getElementById('btn');

rollDice.addEventListener('click', function(){
  
  numUtente = document.getElementById('number').value;
  console.log(numUtente);

  numEstratto = Math.floor(Math.random() * 6) + 1;
  console.log(numEstratto);

});