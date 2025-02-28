'used strict'
// <    >  =>

    window.addEventListener('DOMContentLoaded', () => {
        const menuOpen = document.querySelector('.menu-icon-open');
        const menuClose = document.querySelector('.menu-icon-close');
        const nav = document.querySelector('nav');
        let overlay;
  
    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeMenu);
    }
  
    function openMenu() {
       if (nav) nav.classList.add('mobile-nav-open');
        menuOpen.classList.add('hidden');
        menuClose.classList.remove('hidden');
        createOverlay();
        document.body.style.overflow = 'hidden';
    }
  
    function closeMenu() {
        if (nav) nav.classList.remove('mobile-nav-open');
        menuOpen.classList.remove('hidden');
        menuClose.classList.add('hidden');
        if (overlay) overlay.remove();
        document.body.style.overflow = ''; 
    }
  
    if (menuOpen) menuOpen.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
  
 
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
        closeMenu();
        }
    });

  const sr = ScrollReveal({
    duration: 1000,
    distance: '100px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    opacity: 0,
    origin: 'bottom',
    reset: false
  });

  function cascade3D(elements, delay = 0, interval = 100) {
    sr.reveal(elements, {
      delay: delay,
      interval: interval,
      rotate: { x: 20, y: 10, z: -10 },
      scale: 0.8,
      cleanup: true
    });
  }

  sr.reveal('.header img:first-child', {
    duration: 1200,
    distance: '0px',
    origin: 'center',
    scale: 0.5,
    rotate: { x: 0, y: 360, z: 0 },
    delay: 200
  });

  cascade3D('nav ul li', 500, 75);

  sr.reveal('.img-figure', {
    duration: 1500,
    origin: 'left',
    distance: '100%',
    rotate: { x: 0, y: 90, z: 0 },
    delay: 300
  });

  sr.reveal('.description-future h1', {
    duration: 1200,
    scale: 1.5,
    distance: '0px',
    rotate: { x: 80, y: 0, z: 0 },
    delay: 800
  });

  sr.reveal('.more', {
    duration: 1000,
    origin: 'right',
    distance: '100px',
    rotate: { x: 0, y: -30, z: 10 },
    delay: 1000
  });

  sr.reveal('.aside', {
    duration: 1300,
    scale: 0.7,
    rotate: { x: 0, y: 0, z: 45 },
    delay: 1200
  });

  cascade3D('.card', 1400, 200);

  sr.reveal('.content', {
    duration: 1000,
    scale: 0.9,
    rotate: { x: -30, y: 0, z: 0 },
    delay: 1600,
    interval: 200
  });

  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('.container').style.transform = `perspective(1000px) rotateX(${scrolled * 0.01}deg)`;
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
});