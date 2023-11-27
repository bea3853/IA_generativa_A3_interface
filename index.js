const toggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.classList.toggle('active');

  const theme = toggle.getAttribute('data-theme');
  if (theme === 'dark') {
    toggle.setAttribute('data-theme', 'light');
  } else {
    toggle.setAttribute('data-theme', 'dark');
  }
});