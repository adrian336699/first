const btn = document.getElementById('welcomeBtn');
const text = document.getElementById('welcomeText');

btn.addEventListener('click', function() {
    text.classList.remove('hidden');
});