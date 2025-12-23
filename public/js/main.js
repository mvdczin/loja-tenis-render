const btn = document.getElementById('chatBtn');
const box = document.getElementById('chatBox');

btn.addEventListener('click', () => {
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
});
