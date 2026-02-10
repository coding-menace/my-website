


const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', () => {
    alert('Message sent softly. Thank you for your honesty.');
  });
}

let lastScrollY = window.scrollY;
let ticking = false;
const nav = document.querySelector('.nav');

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    nav.classList.add('nav-hidden');
    nav.classList.remove('nav-visible');
  } else {
    nav.classList.remove('nav-hidden');
    nav.classList.add('nav-visible');
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});


const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage || 
     (currentPage === "" && link.getAttribute('href') === "index.html")) {
    link.classList.add('active');
  }
});
 



window.addEventListener("load", () => {
  const textarea = document.querySelector(
    'body[data-page="connect"] .contact-form textarea'
  );

  if (!textarea) return;

  function setTextareaHeight() {
    const vh = window.innerHeight;

    let height = Math.round(vh * 0.32);

    height = Math.max(140, height); 
    height = Math.min(360, height); 

    textarea.style.height = height + "px";
  }

  setTextareaHeight();
  window.addEventListener("resize", setTextareaHeight);
});
 



setTimeout(() => {
  const textarea = document.querySelector(
    'body[data-page="connect"] .contact-form textarea'
  );

  if (!textarea) return;

  const vh = window.innerHeight;

  let height = Math.round(vh * 0.35);
  height = Math.max(160, height);
  height = Math.min(380, height);

  textarea.style.height = height + "px";
  textarea.style.maxHeight = height + "px";
  textarea.style.minHeight = height + "px";
}, 300);


