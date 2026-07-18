(() => {
  const navbars = document.querySelectorAll('.navbar');
  navbars.forEach((navbar) => {
    const menu = navbar.querySelector('.menu');
    if (!menu || navbar.querySelector('.nav-toggle')) return;

    const button = document.createElement('button');
    button.className = 'nav-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Toggle navigation');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span></span><span></span><span></span>';
    navbar.insertBefore(button, menu);

    const close = () => {
      button.classList.remove('is-open');
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    };

    button.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      button.classList.toggle('is-open', isOpen);
      button.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) close();
    });
  });
})();
