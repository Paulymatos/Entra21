const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const board = document.getElementById('board')

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500)
}
const reloadPage = () => {
  window.location.reload(true);
}
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    mario.classList.add('flicker-in-1');
    
    pipe.style.left = `${pipePosition}px`
    mario.style.bottom = `${marioPosition}px`
    mario.src = './img/game-over.png'
    mario.style.width = '60px'
    mario.style.marginLeft = '50px'
    clearInterval(loop)
    document.addEventListener('keydown', reloadPage)  
    board.classList.add('death-back')
  }

}, 10)
document.addEventListener('keydown', jump)   
