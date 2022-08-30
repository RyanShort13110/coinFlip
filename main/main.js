const toss = _ => {
  const coin = document.getElementById('coin');
  const flip = Math.random();
  coin.style.animation = 'none';
  if(flip >= 0.5){
    coin.style.animation = 'flipHeads 3s forwards';
  }else{
    coin.style.animation = 'flipTails 3s forwards';
  }
}