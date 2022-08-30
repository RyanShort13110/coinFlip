const toss = _ => {
  const coin = document.getElementById('coin');
  const flip = Math.floor(Math.random() * 2);
  coin.style.animation = 'none';
  if(flip >= 1){
    coin.style.animation = 'flipHeads 3s forwards';
  }else{
    coin.style.animation = 'flipTails 3s forwards';
  }
}