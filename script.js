const root = document.documentElement;
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
const themeToggle = document.getElementById('theme-toggle');
const mobileLinks = document.querySelectorAll('.mobile-link');

function applyTheme(isDark) {
  root.classList.toggle('dark', isDark);
  if (themeToggle) {
    themeToggle.textContent = isDark ? 'Light' : 'Dark';
  }
}

const savedTheme = localStorage.getItem('theme');
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const startDark = savedTheme ? savedTheme === 'dark' : preferredDark;
applyTheme(startDark);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextDark = !root.classList.contains('dark');
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    applyTheme(nextDark);
  });
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });
});
