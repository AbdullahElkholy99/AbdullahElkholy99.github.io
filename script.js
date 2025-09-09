// select ui elements
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const yearEl = document.getElementById('year');

allEventListeners();

function allEventListeners(){
  if(navToggler) navToggler.addEventListener('click', togglerClick);
  navLinks.forEach(a => a.addEventListener('click', navLinkClick));
  window.addEventListener('resize', closeMenuOnResize);
  if(yearEl) yearEl.textContent = new Date().getFullYear();
}

function togglerClick(){
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

function navLinkClick(){
  // close mobile menu after clicking a link
  if(navMenu.classList.contains('open')){
    navMenu.classList.remove('open');
    navToggler.classList.remove('toggler-open');
  }
}

function closeMenuOnResize(){
  if(window.innerWidth > 767 && navMenu.classList.contains('open')){
    navMenu.classList.remove('open');
    navToggler.classList.remove('toggler-open');
  }
}

window.addEventListener("scroll", function () {
  const aboutSection = document.querySelector(".about-content");
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    aboutSection.classList.add("show");
  }
});

// Open modals
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = "block";
  });
});

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function() {
    this.closest('.modal').style.display = "none";
  });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
