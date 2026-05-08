const convite = document.querySelector('.convite');

document.addEventListener('mousemove', (e) => {

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  convite.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener('mouseleave', () => {
  convite.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Lógica do Contador Regressivo
function updateTimer() {
  const eventDate = new Date('May 9, 2026 15:00:00').getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff > 0) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
  } else {
    document.getElementById('timer').innerHTML = "<h2 style='color: #ffcc00; font-size: 1.5rem;'>🚀 O EVENTO COMEÇOU!</h2>";
  }
}

setInterval(updateTimer, 1000);
updateTimer(); // Chamada inicial para evitar delay de 1s