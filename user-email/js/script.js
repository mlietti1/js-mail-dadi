const emailList = [
  'mario.rossi@mail.com',
  'marta.bianchi@mail.com',
	'm.lietti@mail.com',
  'anna.ferrari@mail.com',
  'ale.russo@mail.com',
  'paolo.verdi@mail.com'
];

let userEmail;
const btnCheck = document.getElementById('btn');


btnCheck.addEventListener('click', function(){
  
  userEmail = document.getElementById('email').value;
  console.log(userEmail);
  for (let i = 0; i < emailList.length; i++){
    
    console.log(emailList[i]);

    if (emailList[i] === userEmail){
      document.getElementById('output').innerHTML = `You are in the mailing list!`;
    }else{
      document.getElementById('output').innerHTML = `You are <strong>not</strong> in the mailing list.`;
    }
  };


});