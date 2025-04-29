// Smooth scroll for any internal link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Intercept form submit and open WhatsApp chat
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = encodeURIComponent(document.getElementById('name').value.trim());
    const email   = encodeURIComponent(document.getElementById('email').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());
    const text    = `*New Contact Message*\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
    // +254700883620 is your number in international format
    const waLink = `https://wa.me/254700883620?text=${text}`;
    window.open(waLink, '_blank');
  });
  
  // Override Learn More buttons to scroll to Contact
  function learnMore(slug) {
    // slug param is ignored; always go to #contact
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  // Smooth internal scroll (including on page‐load if URL has #contact)
function smoothScrollTo(hash) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      smoothScrollTo(anchor.getAttribute('href'));
    });
  });
  // on-load
  window.addEventListener('load', () => {
    if (location.hash) {
      smoothScrollTo(location.hash);
    }
  });
  
  
  async function openBlog(id) {
    const mapping = {
      'bitcoin-guide': 'bitcoin-guide.html',
      'budgeting-101': 'budgeting-101.html',
      'fintech-innovations': 'fintech-innovations.html',
      'cryptocurrency-trends': 'cryptocurrency-trends.html',
      'stock-market-investing': 'stock-market-investing.html'  // ← new entry
    };
    const file = mapping[id];
    if (!file) return;
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error('Failed to load ' + file);
      const html = await res.text();
      const viewer = document.getElementById('blog-viewer');
      viewer.innerHTML = html;
      viewer.style.display = 'block';
      viewer.classList.replace('animate__fadeOut', 'animate__fadeIn');
      viewer.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      console.error(e);
      alert('Sorry, could not load the content.');
    }
  }

  function openBlog(id) {
    // Navigate to the corresponding HTML file
    window.location.href = id + '.html';
  }
