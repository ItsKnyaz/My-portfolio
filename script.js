// Мобильное меню + анимации
document.addEventListener('DOMContentLoaded', () => {

    // Гамбургер-меню
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Плавная анимация шкал навыков при скролле
    const skillBars = document.querySelectorAll('.skill-fill');
    const animateBars = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < window.innerHeight - 50) {
                bar.style.transition = 'width 1s ease';
            }
        });
    };
    animateBars();
    window.addEventListener('scroll', animateBars);

    console.log('Сайт-портфолио загружен. Привет, будущий SRE! 🚀');
});
