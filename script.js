// Confirm this mailbox exists before publishing the site.
const contactEmail = 'contact@cloudirect.fr';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Projet web — ${data.get('name').trim()}`;
  const body = `Bonjour Cloud Direct,\n\n${data.get('message').trim()}\n\n${data.get('name').trim()}\n${data.get('email').trim()}`;
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = `Votre message est prêt dans votre messagerie. Si elle ne s’ouvre pas, écrivez à ${contactEmail}.`;
});
const legal = document.querySelector('#legal');
document.querySelector('#legal-open').addEventListener('click', () => legal.showModal());
document.querySelector('#legal-close').addEventListener('click', () => legal.close());
legal.addEventListener('click', event => { if (event.target === legal) {
  const bounds = legal.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) legal.close();
} });
