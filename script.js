const toggleBtn = document.querySelectorAll('.faq-toggle');


toggleBtn.forEach(e => {
    e.addEventListener('click', () => {
        e.parentNode.classList.toggle('active');
    });
});