
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.fixed-menu');
    if (window.scrollY > 50) {
        menu.style.backgroundColor = '#00bcd4';
    } else {
        menu.style.backgroundColor = '#0072ff';
    }
});
