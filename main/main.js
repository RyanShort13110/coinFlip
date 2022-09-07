const toss = _ => {
  const coin = document.getElementById('coin');
  const flip = Math.random();
  coin.style.animation = 'none';
  if(flip > 0.5){
    coin.style.animation = 'flipHeads 4s forwards';
  }else{
    coin.style.animation = 'flipTails 4s forwards';
  }
}
