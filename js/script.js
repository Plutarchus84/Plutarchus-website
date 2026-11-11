// Ledengrid dynamisch opbouwen vanuit leden-data.js
const ledenGrid = document.getElementById('leden-grid');
if (ledenGrid && typeof ledenData !== 'undefined') {
  const frag = document.createDocumentFragment();
  ledenData.forEach(lid => {
    const card = document.createElement('div');
    card.className = 'lid-card';

    const img = document.createElement('img');
    img.className = 'lid-photo';
    img.loading = 'lazy';
    img.alt = lid.name;
    img.src = `images/leden/${lid.slug}.jpg`;
    img.onerror = function () {
      this.onerror = null;
      this.src = 'images/leden/placeholder.svg';
    };

    const caption = document.createElement('div');
    caption.className = 'lid-caption';
    caption.innerHTML = `<div class="lid-naam">${lid.name}</div><div class="lid-jaar">Lichting ${lid.year}</div>`;

    card.appendChild(img);
    card.appendChild(caption);
    frag.appendChild(card);
  });
  ledenGrid.appendChild(frag);
}

// Terug-naar-boven knop
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Contactformulier via Netlify Forms versturen (blijft op de pagina, geen redirect)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const data = new URLSearchParams(new FormData(form));

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: data.toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      if (response.ok) {
        status.textContent = 'Bedankt, je bericht is verstuurd.';
        status.style.color = '#8fd19e';
        form.reset();
      } else {
        status.textContent = 'Er ging iets mis, probeer het later opnieuw.';
        status.style.color = '#e08a8a';
      }
    } catch (err) {
      status.textContent = 'Er ging iets mis, probeer het later opnieuw.';
      status.style.color = '#e08a8a';
    }
  });
}
