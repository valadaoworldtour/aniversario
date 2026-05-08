const convite = document.querySelector('.convite');

document.addEventListener('mousemove', (e) => {

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  convite.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener('mouseleave', () => {
  convite.style.transform = 'rotateY(0deg) rotateX(0deg)';
});