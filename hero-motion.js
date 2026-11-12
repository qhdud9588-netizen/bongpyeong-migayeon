const hero = document.querySelector('.hero');
const motionButton = hero.querySelector('.hero-motion');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function setMotion(isMoving) {
  if (isMoving) hero.classList.add('has-motion');
  hero.classList.toggle('is-moving', isMoving);
  motionButton.textContent = isMoving ? '대문 움직임 멈추기' : '대문 움직이기';
}

setMotion(!reducedMotion.matches);
motionButton.hidden = false;
motionButton.addEventListener('click', () => {
  setMotion(!hero.classList.contains('is-moving'));
});
reducedMotion.addEventListener('change', event => setMotion(!event.matches));
