const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

const interestHeading = document.querySelector('.bio-copy h3');
const interestList = document.querySelector('.bio-copy .interest-list');
const aboutSection = document.querySelector('.intro');
if (interestHeading && interestList && aboutSection) {
  const interestsPanel = document.createElement('div');
  interestsPanel.className = 'interests-panel reveal visible';
  interestsPanel.append(interestHeading, interestList);
  aboutSection.append(interestsPanel);
}
