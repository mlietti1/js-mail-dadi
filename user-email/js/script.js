const emailList = [
  'mario.rossi@mail.com',
  'marta.bianchi@mail.com',
	'm.lietti@mail.com',
  'anna.ferrari@mail.com',
  'ale.russo@mail.com',
  'paolo.verdi@mail.com'
];

const btnCheck = document.getElementById('btn');

let mailPresente = false;



btnCheck.addEventListener('click', function(){
  
  const userEmail = document.getElementById('email').value;
  for (let i = 0; i < emailList.length; i++){
    
    console.log(userEmail);
    console.log(emailList[i]);

    if (emailList[i] === userEmail){
      mailPresente = true;
    };

    if (mailPresente){
      document.getElementById('output').innerHTML = `You are in the mailing list!`;
    }else{
      document.getElementById('output').innerHTML = `You are <strong>not</strong> in the mailing list.`;
    }
  };

  mailPresente = false;
  document.getElementById('email').value = '';
  
});