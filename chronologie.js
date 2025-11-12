const timeline = document.querySelector('.timeline');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

leftArrow.addEventListener('click', () => {
  timeline.scrollBy({ left: -220, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  timeline.scrollBy({ left: 220, behavior: 'smooth' });
});
