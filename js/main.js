const target = document.getElementById("humburger__menu")
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("humburger__nav")
  nav.classList.toggle('in')
})