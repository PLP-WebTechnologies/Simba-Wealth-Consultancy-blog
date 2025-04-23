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
  