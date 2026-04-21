const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = 'Light';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? 'Light' : 'Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const images = document.querySelectorAll('.toggle-img');

images.forEach((img) => {
  img.addEventListener('click', () => {
    const details = img.parentElement.querySelector('.details');

    // toggles visibility
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  });
});
