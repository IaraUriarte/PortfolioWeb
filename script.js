// Menú móvil accesible
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
const setMenu = (open) => {
  menu.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
};
btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setMenu(false); btn.focus(); }
});

// Alternar el tema visual
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  const label = isDark ? 'Activar tema claro' : 'Activar tema oscuro';
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
});

// Caso de estudio en <dialog> (el foco vuelve al botón al cerrar)
document.querySelectorAll('[data-open]').forEach((opener) => {
  const dlg = document.getElementById(opener.dataset.open);
  opener.addEventListener('click', () => dlg.showModal());
  dlg.addEventListener('close', () => opener.focus());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
});
